"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const wallet  = useSelector(state => state.wallet);

  return (
    <div className='text-white text-8xl font-extrabold w-full h-full flex flex-col items-center justify-center mt-20  '>
      

    </div>
  )
}

export default page

// _name,
// _cost,
// _maxTickets,
// _date,
// _time,
// _location
// artist/org name
// artis/ event socials
