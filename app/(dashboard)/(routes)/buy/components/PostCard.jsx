"use client"
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

import { IoLocationSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { SiEthereum } from "react-icons/si";

import photo from '@/public/photo.jpg'

import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";

const PostCard = ({ entry, className }) => {

  const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

  function getRandomWord() {
    const eventRelatedWords = [
        "Performance",
        "Festival",
        "Screening",
        "Exhibition",
        "Premiere",
        "Gala",
        "Show",
        "Recital",
        "Ceremony",
        "Spectacle"
    ];

    const randomIndex = Math.floor(Math.random() * eventRelatedWords.length);
    return eventRelatedWords[randomIndex];
}
  
const callImage = () =>{

}
  function convertDateFormat(dateStr) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [day, month, year] = dateStr.split(".");

    const monthName = months[parseInt(month, 10) - 1];

    return `${day} ${monthName} ${year}`;
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

      <div className="grid place-items-center mx-auto p-2 w-[150px] h-[150px] border rounded-lg object-contain ">
        <Image src={photo} alt="altimage" className="w-full h-full" />
      </div>

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
            {convertDateFormat(entry.date)} - {entry.time}
          </div>
        </div>
      </div>
      </CardContent>
      <div className=" flex justify-between items-center text-base font-medium w-full mt-4 ">
          <div className=" flex justify-center items-center gap-2 border border-yellow-200/50 p-2 rounded-md text-2xl ">
            <SiEthereum className="text-yellow-400" />{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
              {" "}
              ETH {entry.ticketPrice}{" "}
            </span>
        </div>
        <Button onClick={handleOpen} className="">Buy Tickets</Button>
        <Modal isOpen={open} onClose={handleClose}>
				<>
					<h1>GFG</h1>
					<h3>A computer science portal!</h3>
				</>
			</Modal>
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









{/* <div className="min-w-[350px] min-h-[250px] px-5 py-4 flex flex-col justify-between items-start rounded-lg border border-slate-500 hover:border-green-300  dark:backdrop-blur-xl transition-all ease-linear bg-gradient-to-t from-green-800/30 to-transparent hover:from-green-800/50 ">
      <div className="w-full flex flex-col justify-between items-start rounded-lg ">
        <div className=" w-full flex justify-between items-center">
          <h1 className="font-bold text-2xl ">{entry.eventName}</h1>
          <span className=" rounded-full text-sm flex justify-center items-center gap-1">
            <IoLocationSharp />
            {entry.location}
          </span>
        </div>

        <div className=" w-full flex justify-between items-center mt-4 ">
          <Link
            href={entry.artistLink}
            className="text-xl flex justify-center items-center gap-2 group "
          >
            {entry.artist}
            <FiExternalLink className=" w-3 h-3 group-hover:inline-block hidden " />
          </Link>
          <span className=" text-sm text-secondary dark:text-primary ">
            {convertDateFormat(entry.date)}
          </span>
        </div>

        <div className=" w-full flex justify-start items-center gap-2 mb-4 mt-1 flex-wrap "></div>
      </div>
      <div className=" flex justify-between items-center text-base font-medium w-full mt-4 ">
        <div className=" flex justify-center items-center gap-2 border border-yellow-200/50 p-2 rounded-md text-2xl ">
          <SiEthereum className="text-yellow-400" />{" "}
          <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
            {" "}
            ETH {entry.ticketPrice}{" "}
          </span>
        </div>

        <Button className=" bg-primary dark:bg-primary hover:bg-secondary dark:hover:bg-secondary text-white dark:text-gray-950 dark:hover:text-white font-medium dark:font-bold transition-colors ease-in-out ">
          <Link href={`/findteam/${entry.slug}`}>Buy Tickets</Link>
        </Button>
      </div>
    </div> */}