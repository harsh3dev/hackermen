// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TokenMaster is ERC721 {
    address public owner;
    uint256 public totalOccasions;
    uint256 public totalSupply;

    struct Ticket{
        address payable owner;
        uint256 occasionId;
        uint256 seatNo;
    }

    struct Occasion {
        address eventOrganiser;
        uint256 id;
        string name;
        uint256 cost;
        uint256 tickets;
        uint256 maxTickets;
        string date;
        string time;
        string location;
        uint256 percentage;
    }

    mapping(uint256 => Occasion) occasions;
    mapping(uint256 => mapping(address => bool)) public hasBought;
    mapping(uint256 => mapping(uint256 => address)) public seatTaken;
    mapping(uint256 => uint256[]) seatsTaken;
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => Ticket) public tickets;
    mapping(uint256 => uint256) public ticketListing;
    mapping(uint256 => bool) public isticketListed;


    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        owner = msg.sender;
    }

    function listOccasion(
        string memory _name,
        uint256 _cost,
        uint256 _maxTickets,
        string memory _date,
        string memory _time,
        string memory _location,
        uint256 _percentage
    ) public onlyOwner {
        totalOccasions++;
        occasions[totalOccasions] = Occasion(
            msg.sender,
            totalOccasions,
            _name,
            _cost,
            _maxTickets,
            _maxTickets,
            _date,
            _time,
            _location,
            _percentage
        );
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function mint(uint256 _Occasion_id, uint256 _seat, string memory ipfsLink) public payable {
        // Require that _id is not 0 or less than total occasions...
        require(_Occasion_id != 0);
        require(_Occasion_id <= totalOccasions);

        // Require that ETH sent is greater than cost...
        require(msg.value >= occasions[_Occasion_id].cost);

        // Require that the seat is not taken, and the seat exists...
        require(seatTaken[_Occasion_id][_seat] == address(0));
        require(_seat <= occasions[_Occasion_id].maxTickets);

        occasions[_Occasion_id].tickets -= 1; // <-- Update ticket count

        hasBought[_Occasion_id][msg.sender] = true; // <-- Update buying status
        seatTaken[_Occasion_id][_seat] = msg.sender; // <-- Assign seat

        seatsTaken[_Occasion_id].push(_seat); // <-- Update seats currently taken

        totalSupply++;

        tickets[totalSupply] = Ticket(
            payable(msg.sender),
            _Occasion_id,
            _seat
        );

        isticketListed[totalSupply] = false;

        (bool success, ) = occasions[_Occasion_id].eventOrganiser.call{value:msg.value}("");
        require(success, "Failed to transfer the funds");

        _safeMint(msg.sender, totalSupply);
        _setTokenURI(totalSupply, ipfsLink);
    }

    function TicketListing(uint256 _tokenId, uint256 _price) public {
        require(tickets[_tokenId].owner == msg.sender);
        require(_price > 0 , "Price should be more than 0");
        ticketListing[_tokenId] = _price;
        isticketListed[_tokenId] = true;
    }

    function transferTicket(uint256 _tokenId, uint256 price) public payable {
        address payable tokenOwner = tickets[_tokenId].owner; 
        require(isticketListed[_tokenId] == true, "The token is not listed for sale");
        
        uint256 orgPrice = (ticketListing[_tokenId] * occasions[tickets[_tokenId].occasionId].percentage) / 100;    
        uint256 actualPrice = ticketListing[_tokenId] + orgPrice;

        require(price >= actualPrice, "The price is not enough");
        require(tokenOwner != msg.sender, "Owner cannot the ticket");
        require(ticketListing[_tokenId] > 0, "The price cannot be set to 0");
        
        (bool success, ) = tokenOwner.call{value:(price-orgPrice)}("");
        require(success, "Failed to transfer the funds");

        (bool success2, ) = occasions[tickets[_tokenId].occasionId].eventOrganiser.call{value:orgPrice}("");
        require(success2, "Failed to transfer the funds");
        
        _transfer(tokenOwner, msg.sender, _tokenId);
        ticketListing[_tokenId] = 0;
        isticketListed[_tokenId] = false;
        tickets[_tokenId].owner = payable(msg.sender);
    }

    function isTicketListed(uint256 _tokenId) public view returns (bool)
    {
        return isticketListed[_tokenId];
    }

    function getIpfsLink(uint256 _tokenId) public view returns (string memory)
    {
        return _tokenURIs[_tokenId];
    }

    function getTicketOwner(uint256 _tokenId) public view returns (address)
    {
        return tickets[_tokenId].owner;
    }


    function getOccasion(uint256 _Occasion_id) public view returns (Occasion memory) {
        return occasions[_Occasion_id];
    }

    function getSeatsTaken(uint256 _Occasion_id) public view returns (uint256[] memory) {
        return seatsTaken[_Occasion_id];
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }
}