"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import SeatChart from './SeatChart'

import { IoLocationSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { SiEthereum } from "react-icons/si";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// import photo from '@/public/photo.jpg'

import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";

const PostCard = ({ entry, className }) => {

  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false)

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};


const callImage = () =>{

}
  

  return (
    <Card className="w-full max-w-md min-h-[250px] px-5 py-4 flex flex-col justify-between items-start rounded-lg border border-slate-700 hover:border-green-300  dark:backdrop-blur-xl transition-all ease-linear bg-gradient-to-t from-green-800/30 to-transparent hover:from-green-800/50">
      <div className="w-full flex justify-between items-center p-4 dark:border-b ">
        <span className="text-2xl font-bold">{entry.eventName}</span>
        <Link href={entry.artistLink} target="_blank" className="text-muted-foreground text-xl flex justify-start items-center gap-1 group ">
            <UserIcon className="w-4 h-4 inline-block" />
            {entry.artist}
            <FiExternalLink className=" w-3 h-3 group-hover:inline-block hidden " />
        </Link>
        {/* <CardDescription className="text-sm">{entry.description}</CardDescription> */}
      </div>
      <CardContent className="p-6 space-y-4  flex justify-between items-center gap-4 w-full ">

      {/* <div className="grid place-items-center mx-auto p-2 w-[150px] h-[150px] border rounded-lg object-contain ">
        <Image src={photo} alt="altimage" className="w-full h-full" />
      </div> */}

      <div className="flex flex-col justify-between items-start gap-2">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">
            <MapPinIcon className="w-4 h-4 inline-block mr-2" />
            {entry.location}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className="text-muted-foreground">
            <TicketIcon className="w-4 h-4 inline-block mr-2" />
            {entry.remainingSeats} seats left!
          </div>
          
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">
            <CalendarIcon className="w-4 h-4 inline-block mr-2" />
            {entry.date} - {entry.time}
          </div>
        </div>
      </div>
      </CardContent>
      <div className=" flex justify-between items-center text-base font-medium w-full mt-4 ">
          <div className=" flex justify-center items-center gap-2 border border-orange-200/50 p-2 rounded-md text-2xl ">
            <SiEthereum className="text-red-400" />{" "}
            <span className="bg-gradient-to-r from-red-200 to-red-200 bg-clip-text text-transparent">
              {" "}
              {entry.ticketPrice}{" "} AVA
            </span>
        </div>
        
        <Button onClick={()=>(setToggle(true))} className="">
          <Link href={`/buy/${entry.id}`}>
          Buy Tickets
          </Link>
        </Button>
        {/* {toggle && (
        <SeatChart
          
          setToggle={setToggle}
        />
      )} */}
        
      </div>
    </Card>
  );
};

export default PostCard;



function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

