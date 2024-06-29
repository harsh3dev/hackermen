"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { FormComponent } from './components/FormComponent';

const page = () => {
  const wallet  = useSelector(state => state.wallet);

  return (
    <div className='text-white w-full h-full flex flex-col items-center justify-between mt-20  '>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <FormComponent/>
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

// name, price, maximum number of seats, date of event, time, location, artist name, social media handle
