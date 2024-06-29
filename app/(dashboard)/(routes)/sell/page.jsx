"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const wallet  = useSelector(state => state.wallet);

  return (
    <div className='text-white text-8xl font-extrabold w-full h-full flex flex-col items-center justify-center mt-20  '>
      listticket
      <span className='text-2xl text-center border rounded-lg'>{wallet.address} <br /> {wallet.chainID}</span>

    </div>
  )
}

export default page
