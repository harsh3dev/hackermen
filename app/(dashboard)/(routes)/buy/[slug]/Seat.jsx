
import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Seat = ({isBooked, selected}) => {

  return (
    <div onClick={()=>setSelected((prev)=>(!prev))} className=' w-5 h-5 text-sm grid place-items-center rounded-full border border-slate-300 hover:bg-slate-500  ' style={{backgroundColor: isBooked? "rgb(31 41 55)" : ""}} >
      {selected && <FaCheck />}
    </div>
  )
}

export default Seat
