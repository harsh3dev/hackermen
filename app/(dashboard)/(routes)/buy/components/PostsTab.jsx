"use client"
import React, { useEffect, useState } from 'react';
import mockData from "../mock-data.json";
import PostCard from './PostCard';
import { contractInstance, web3 } from '@/lib/web3';

const PostsTab = () => {
  const [occasion, setOccasion] = useState([]);

  useEffect(() => {
    fetchOccasion();
  }, []);

  const fetchOccasion = async () => {
    try {
      const occasionDetails = await contractInstance.methods.getOccasion(1).call();
      console.log(occasionDetails);
      setOccasion(prevOccasions => [...prevOccasions, parseOccasionData(occasionDetails)]);
    } catch (err) {
      console.log('Error: ' + err.message);
    }
  };

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
          <PostCard entry={entry} key={index} />
        ))
      ) : (
        <p>Loading occasion data...</p>
      )}
    </div>
  );
}

export default PostsTab;