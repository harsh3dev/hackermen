
"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiEthereum } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { useForm } from "react-hook-form";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useEffect, useState } from "react";

import Image from "next/image";

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
      data.image = file;
    console.log(data);
    console.log(errors);
    reset();
  };



  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log("file", file);
  }
  useEffect(()=>{
    console.log(file);
  }, [file, setFile])

  return (
    <div className="h-full w-full  text-white mb-10">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <Label htmlFor="image" className="block text-sm font-medium">
              Event Image
            </Label>
            <div className="w-[400px] min-h-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 ">
              <div className="w-full mx-auto grid place-items-center">
                <svg
                  fill="#d9d9d9"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#d9d9d9"
                  stroke-width="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.528"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"></path>
                  </g>
                </svg>
              </div>
              <h3 class="mt-2 text-sm font-medium text-slate-400 grid place-items-center ">
                <label for="file-upload" class="relative cursor-pointer">
                  <span>Drag and drop</span>
                  <span class="text-green-500"> or browse </span>
                  <span>to upload</span>
                </label>
              </h3>
              <p class="mt-1 text-xs grid place-items-center text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
              <Input
                id="image"
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 z-50 "
                onChange={handleChange}
              />
              {file && (
                <div className=" grid place-items-center w-full">
                  <Image
                    src={file}
                    alt="uploaded-image"
                    width={400}
                    height={400}
                    className=" mt-2 "
                  />
                </div>
              )}
            </div>
          </div>

          <ScrollArea className=" min-h-[850px] mb-10 ">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create a New Event
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below to list your event.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium">
                  Event Name
                </Label>
                <div className="mt-1">
                  <Input
                    id="name"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("Event Name", { required: true })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="price" className="block text-sm font-medium">
                    Price
                  </Label>
                  <div className="mt-1 flex relative items-center space-x-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <SiEthereum className="w-4 h-4" />
                    </div>
                    <Input
                      id="price"
                      type="number"
                      required
                      className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400  pl-5"
                      {...register("Price", { required: true, min: 10 })}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="max-seats"
                    className="block text-sm font-medium"
                  >
                    Max Seats
                  </Label>
                  <div className="mt-1 flex relative items-center space-x-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <IoMdPerson className="w-4 h-4" />
                    </div>
                    <Input
                      id="max-seats"
                      type="number"
                      required
                      className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400 pl-5 "
                      {...register("Max Seats", {})}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="block text-sm font-medium">
                    Date
                  </Label>
                  <div className="mt-1">
                    <Input
                      id="date"
                      type="date"
                      required
                      className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                      {...register("Date", { required: true })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="time" className="block text-sm font-medium">
                    Time
                  </Label>
                  <div className="mt-1">
                    <Input
                      id="time"
                      type="time"
                      required
                      className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                      {...register("Time", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="location" className="block text-sm font-medium">
                  Location
                </Label>
                <div className="mt-1">
                  <Input
                    id="location"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("Location", { required: true })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="artist" className="block text-sm font-medium">
                  Artist Name
                </Label>
                <div className="mt-1">
                  <Input
                    id="artist"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("Artist Name", { required: true })}
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="social-handle"
                  className="block text-sm font-medium"
                >
                  Social Media Handle
                </Label>
                <div className="mt-1">
                  <Input
                    id="social-handle"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("ArtistURL", {})}
                  />
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Create Event
                </Button>
              </div>
            </div>
          </ScrollArea>
        </form>
      </div>
    </div>
  );
};
