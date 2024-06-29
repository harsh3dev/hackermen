import { useEffect, useState } from 'react'

// Import Components
import Seat from './Seat'
// Import Assets
import { IoIosCloseCircle } from "react-icons/io";

const SeatChart = ({ setToggle }) => {
  const [seatsTaken, setSeatsTaken] = useState(false)
  const [hasSold, setHasSold] = useState(false)

  return (
    <div className=" w-[100vw] h-[100vh] bg-red-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
      <div className=" grid grid-cols-[25] border-[10px] border-blue-800 bg-yellow-800 rounded-lg w-[90%] h-[80%] max-w-5xl mx-auto p-[20px] z-[2] overflow-x-scroll fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className='col-span-1 row-span-1 text-lg  ' >Seating Map</h1>

        <button onClick={() => setToggle(false)} className=" w-[35px] h-[35px] border border-white rounded-sm cursor-pointer grid place-items-center bg-green-800 hover:bg-green-700  ">
        <IoIosCloseCircle />
        </button>

        <div className="row-span-2 h-[150px] rounded-b-[24px] flex justify-center items-center border border-black bg-blue-600 ">
          <strong>STAGE</strong>
        </div>

        {seatsTaken && Array(25).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={1}
            columnStart={0}
            maxColumns={5}
            rowStart={2}
            maxRows={5}
            seatsTaken={[10,11,1,3]}
            key={i}
          />
        )}

        <div className="min-w-[30px] my-[5px] flex justify-center items-center border border-black bg-blue-600" style={{ writingMode: "vertical-lr", gridColumn: "6 / span 1",
    gridRow: "3 / span 10"}} >
          <strong>WALKWAY</strong>
        </div>

        {seatsTaken && Array(100 - 50).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={26}
            columnStart={6}
            maxColumns={15}
            rowStart={2}
            maxRows={15}
            seatsTaken={[30,11,2]}
            key={i}
          />
        )}

        <div className="min-w-[30px] my-[5px]flex justify-center items-center border border-black bg-blue-600  " style={{ writingMode: "vertical-lr", gridColumn: "22 / span 1",
    gridRow: "3 / span 10"}} >
          <strong>WALKWAY</strong>
        </div>

        {seatsTaken && Array(25).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={10}
            columnStart={22}
            maxColumns={5}
            rowStart={2}
            maxRows={5}
            seatsTaken={[7,6,9]}
            key={i}
          />
        )}
      </div>
    </div >
  );
}

export default SeatChart;