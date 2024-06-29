// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract TokenMaster is ERC721 {
    address public owner; //added
    uint256 public totalOccasions;
    uint256 public totalSupply;
    
    struct Ticket {
        uint256 id;
        uint256 price;
        address originalOwner;
    }

    struct Occasion {
        uint256 id;
        string name;
        uint256 cost;
        uint256[] ticketIds;
        uint256 maxTickets;
        string date;
        string time;
        string location;
        address owner
    }

    mapping(uint256 => Occasion) occasions;
    mapping(uint256 => mapping(address => bool)) public hasBought;
    mapping(uint256 => mapping(uint256 => address)) public seatTaken;
    mapping(uint256 => uint256[]) seatsTaken;

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

    function list(
        string memory _name,
        uint256 _cost,
        uint256 _maxTickets,
        string memory _date,
        string memory _time,
        string memory _location
    ) public  {
        totalOccasions++;
        Occasion storage newEvent = occasion[totalOccasions];
        newEvent.id=totalOccasions,
        newEvent.name=_name,
        for(uint256 i = 0; i < ticketPrices.length; i++){
        ticketCounter++;
        uint256 ticketId = ticketCounter;
        _mint(msg.sender, ticketId);  
        tickets[ticketId] = Ticket(ticketId, ticketPrices[i], msg.sender, qrCodeURIs[i]);
        newEvent.ticketIds.push(ticketId);
        }
        newEvent.date=_date,
        newEvent.time=_time,
        newEvent.location=_location,
        newEvent.owner= msg.sender
    }

    function mint(uint25600 _id, uint256 _seat) public payable {
        // Require that _id is not 0 or less than total occasions...
        require(_id != 0);
        require(_id <= totalOccasions);

        // Require that ETH sent is greater than cost...
        require(msg.value >= occasions[_id].cost);

        // Require that the seat is not taken, and the seat exists...
        require(seatTaken[_id][_seat] == address(0));
        require(_seat <= occasions[_id].maxTickets);

        occasions[_id].tickets -= 1; // <-- Update ticket count

        hasBought[_id][msg.sender] = true; // <-- Update buying status
        seatTaken[_id][_seat] = msg.sender; // <-- Assign seat

        seatsTaken[_id].push(_seat); // <-- Update seats currently taken

        totalSupply++;

        _safeMint(msg.sender, totalSupply);
    }

    function getOccasion(uint256 _id) public view returns (Occasion memory) {
        return occasions[_id];
    }

    function getSeatsTaken(uint256 _id) public view returns (uint256[] memory) {
        return seatsTaken[_id];
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }
}