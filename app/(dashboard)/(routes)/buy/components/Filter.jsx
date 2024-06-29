"use client"
import { useState } from "react"
import { Slider, SliderTrack, SliderRange, SliderThumb } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

import { useDispatch } from "react-redux"

export default function Filter() {

  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([50, 1500])
  const handlePriceChange = (value) => {
    setPriceRange(value)
    // dispatch(setPrice(priceRange))
    setTimeout(() => {
      console.log(priceRange);
    }, 1000);
  }
  const [location, setLocation] = useState("")
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
    dispatch(setLocation(e.target.value))
  }
  return (
    <div className="bg-[#000] p-4 rounded-lg shadow-lg flex items-center justify-between space-x-6 dark">
      <div className="">
        <h4 className="text-base font-medium mb-2">Price Range</h4>
        <Slider
          min={50}
          max={1500}
          step={10}
          value={[priceRange]}
          onValueChange={handlePriceChange}
          className="w-[300px]"
        >
          <div className="bg-muted">
            <div className="bg-green-500" />
          </div>
          <div className="bg-green-500 w-4 h-4 rounded-full" />
        </Slider>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter a city or address"
            value={location}
            onChange={handleLocationChange}
            className="pr-8 w-[300px]"
          />
          <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}