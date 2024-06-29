"use client"

import Link from "next/link"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { Web3 } from 'web3';

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CopytoClipboard from "../CopytoClipboard/CopytoClipboard";

import { HiOutlineTicket } from "react-icons/hi2";

import { useDispatch } from "react-redux";
import { setWallet } from "@/lib/store/features/walletSlice/walletSlice";

export default function Navbar() {

  const navItems = [
    {
      name: 'Sell Tickets',
      path: '/sell'
    },
    {
      name: 'Buy Tickets',
      path: '/buy'
    },
    {
      name: 'Resell Ticket',
      path: '/resell'
    },
  ]

  const pathname = usePathname();
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [latestBlock, setLatestBlock] = useState(null);
  const [accountButtonDisabled, setAccountButtonDisabled] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // ensure that there is an injected the Ethereum provider
    if (window.ethereum) {
      // use the injected Ethereum provider to initialize Web3.js
      setWeb3(new Web3(window.ethereum));
      // check if Ethereum provider comes from MetaMask
      if (window.ethereum.isMetaMask) {
        setProvider('Connected to Ethereum with MetaMask.');
      } else {
        setProvider('Non-MetaMask Ethereum provider detected.');
      }
    } else {
      // no Ethereum provider - instruct user to install MetaMask
      setWarning('Please install MetaMask');
      setAccountButtonDisabled(true);
    }
  }, []);

  useEffect(() => {
    async function getChainId() {
      if (web3 === null) {
        return;
      }

      // get chain ID and populate placeholder
      setChainId(`Chain ID: ${await web3.eth.getChainId()}`);
      setTimeout(() => {
        console.log("Chain ID: ", chainId);
      }, 1000);
      
    }

    async function getLatestBlock() {
      if (web3 === null) {
        return;
      }

      // get latest block and populate placeholder
      setLatestBlock(`Latest Block: ${await web3.eth.getBlockNumber()}`);

      // subscribe to new blocks and update UI when a new block is created
      const blockSubscription = await web3.eth.subscribe('newBlockHeaders');
      blockSubscription.on('data', (block) => {
        setLatestBlock(`Latest Block: ${block.number}`);
      });
      setTimeout(() => {
        console.log("Latest Block: ", latestBlock);
      }, 1000);
    }

    getChainId();
    getLatestBlock();
  }, [web3]);

  // click event for "Request MetaMask Accounts" button
  async function requestAccounts() {
    if (web3 === null) {
      return;
    }

    // request accounts from MetaMask
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    document.getElementById('requestAccounts')?.remove();

    // get list of accounts
    const allAccounts = await web3.eth.getAccounts();
    setTimeout(() => {
      console.log(allAccounts[0]);
      console.log("Chain ID: ", chainId);
      console.log("Latest Block: ", latestBlock);
    }, 1000);
    setAccounts(allAccounts);
    // get the first account and populate placeholder
    setConnectedAccount(`${allAccounts[0]}`);
    
    dispatch(setWallet({address: allAccounts[0], chainID: chainId }));
  }


  return (
    <header className="fixed top-0 z-50 p-1 w-full bg-background/90 backdrop-blur-lg border-b ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HiOutlineTicket className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-primary">TicketChain</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          { navItems.map((item)=>(
              <Link
                href={item.path}
                className="group relative flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                prefetch={false}
                key={item.name}
                style={{ color: pathname === item.path ? "var(--primary)" : "" }}
              >
                <span >{item.name}</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
          ))}
        </nav>

        <div id="connectedAccount" className="inline-block" hidden={accountButtonDisabled} >
          { connectedAccount && <CopytoClipboard text={connectedAccount} /> }
          {/* { !accountButtonDisabled && 
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          } */}

          {/* {connectedAccount} */}
        </div>

        <Button 
          onClick={() => requestAccounts()} 
          id="requestAccounts"
          disabled={accountButtonDisabled} 
          className=" inline-flex dark:bg-[#15803d] hover:dark:bg-green-600 text-white "
        >
          Connect
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-muted-foreground" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <HiOutlineTicket className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-primary">TicketChain</span>
              </Link>
              <SheetClose className="rounded-full p-1 transition-colors hover:bg-muted">
                <XIcon className="h-5 w-5 text-muted-foreground" />
              </SheetClose>
            </div>
            <nav className="grid gap-4 px-4 py-6">
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary"
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span>Home</span>
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary"
                prefetch={false}
              >
                <InfoIcon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span>About</span>
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary"
                prefetch={false}
              >
                <ServerIcon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span>Services</span>
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary"
                prefetch={false}
              >
                <ContactIcon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span>Contact</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}