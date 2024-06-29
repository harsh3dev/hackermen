"use client"
import React, { useState } from 'react'
import Seat from './Seat'

const page = ({params}) => {
    const [isBooked, setIsBooked] = useState(false );
    const [maxCapacity, setMaxCapacity] = useState(50);
    const [selected, setSelected] = useState(null);
  return (
    <div className=' w-fit h-full text-white text-3xl grid place-items-center mx-auto p-20 ' >
        <h1 className='text-3xl font-bold text-left my-5 '>
            Choose a seat to book
        </h1>
      <div className=' w-full border border-dashed rounded-lg h-full '  >
        <div className=' grid grid-cols-4 gap-4 place-items-center py-4 '>
      {Array.from({ length: maxCapacity }, (_, index) =>(
          <Seat isBooked={isBooked} key={index} selected={selected} setSelected={setSelected} index={index}  />
        ))}
        </div>

        { selected && <h3 className='text-sm'>
          Selected seat: {selected}
        </h3>}
      </div>
    </div>
  )
}

export default page
