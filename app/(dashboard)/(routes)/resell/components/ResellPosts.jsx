"use client"
import React, { useEffect, useState } from 'react';

import { contractInstance, web3 } from '@/lib/web3';
import ResellPostCard from './ResellPostCard';

const ResellPosts = () => {
  const [occasion, setOccasion] = useState([]);

  useEffect(() => {
    fetchOccasion();
  }, []);

  const fetchOccasion = async () => {

    const total = await contractInstance.methods.totalSupply().call();

    for(let i = 1; i <= total; i++){
        const isListed = await contractInstance.methods.isTicketListed(i).call();
        if(isListed){
            const tickets = await contractInstance.methods.tickets(i).call();
            console.log(tickets);
        }
    }
  }


  const parseOccasionData = (occasionDetails) => {
    const occas = {
      id: occasionDetails[1].toString(),
      eventName: occasionDetails[2],
      ticketPrice: web3.utils.fromWei(occasionDetails[3], 'ether'), // Convert price from Wei to Ether
      totalSeats: occasionDetails[5].toString(),
      date: occasionDetails[6],
      time: occasionDetails[7],
      remainingSeats: occasionDetails[4].toString(),
      artist: "The Rockers", // This seems to be hardcoded, you can fetch it dynamically if needed
      artistLink: "https://instagram.com/therockers", // This seems to be hardcoded, you can fetch it dynamically if needed
      location: occasionDetails[8],
      owner: occasionDetails[0]
    };
    console.log(occas);
    return occas;
  };
  return (
    <div className='w-full min-h-[50vh] grid grid-cols-3 gap-2'>
      {occasion.length > 0 ? (
        occasion.map((entry, index) => (
          <ResellPostCard entry={entry} key={index} />
        ))
      ) : (
        <p>Loading occasion data...</p>
      )}
    </div>
  );
}

export default ResellPosts;