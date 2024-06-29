
import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Seat = ({isBooked, selected, setSelected, index}) => {

  return (
    <div onClick={()=>setSelected(index)} className=' w-5 h-5 text-sm grid place-items-center rounded-full border border-slate-300 hover:bg-slate-500  ' style={{backgroundColor: isBooked? "rgb(31 41 55)" : ""}} >
      {selected===index ? <FaCheck />: ""  }
      {/* {selected && <FaCheck />} */}
    </div>
  )
}

export default Seat
