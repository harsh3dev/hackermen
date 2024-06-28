import React from "react";
import Link from "next/link";
import { HiOutlineTicket } from "react-icons/hi2";

const Footer = () => {
  const navItems = [
    {
      name: "List Tickets",
      path: "/listticket",
    },
    {
      name: "Buy Tickets",
      path: "/buy",
    },
    {
      name: "Resell Ticket",
      path: "/resell",
    },
  ];
  return (
    <footer className="bg-green-500/50 text-white py-12 w-full absolute bottom-0 ">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HiOutlineTicket className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-primary">
            TicketChain
          </span>
        </Link>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              href={item.path}
              className="group relative flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              prefetch={false}
              key={item.name}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-4">
          <Link
            href="#"
            className="hover:text-[#00d8ff] transition-colors"
            prefetch={false}
          >
            <TwitterIcon className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="hover:text-[#00d8ff] transition-colors"
            prefetch={false}
          >
            <DiscIcon className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="hover:text-[#00d8ff] transition-colors"
            prefetch={false}
          >
            <TextIcon className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="hover:text-[#00d8ff] transition-colors"
            prefetch={false}
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function BitcoinIcon(props) {
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function DiscIcon(props) {
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
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TextIcon(props) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
