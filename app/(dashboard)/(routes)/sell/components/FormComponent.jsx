
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full min-h-screen flex flex-col justify-between items-center mt-14 gap-5 "
        >
          <div className=" h-full w-[60%] mb-10 gap-10 ">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create a New Event
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below to list your event.
            </p>
            <div className="mt-8 flex flex-col justify-between gap-5 ">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium">
                  Event Name
                </Label>

                  <Input
                    id="name"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("Event Name", { required: true })}
                  />

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
                      {...register("Price", { required: true, min: 0 })}
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

                    <Input
                      id="date"
                      type="text"
                      required
                      className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                      {...register("Date", { required: true })}
                    />

                </div>
                <div>
                  <Label htmlFor="time" className="block text-sm font-medium">
                    Time
                  </Label>

                    <Input
                      id="time"
                      type="text"
                      required
                      className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                      {...register("Time", { required: true })}
                    />

                </div>
              </div>
              <div>
                <Label htmlFor="location" className="block text-sm font-medium">
                  Location
                </Label>

                  <Input
                    id="location"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("Location", { required: true })}
                  />

              </div>
              <div>
                <Label htmlFor="artist" className="block text-sm font-medium">
                  Artist Name
                </Label>

                  <Input
                    id="artist"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("Artist Name", { required: true })}
                  />

              </div>
              <div>
                <Label
                  htmlFor="social-handle"
                  className="block text-sm font-medium"
                >
                  Social Media Handle
                </Label>

                  <Input
                    id="social-handle"
                    type="text"
                    required
                    className="block w-full rounded-md border border-slate-700 bg-transparent shadow-sm focus:border-primary focus:ring-primary sm:text-sm hover:border-slate-400"
                    {...register("ArtistURL", {})}
                  />

              </div>
                <Button type="submit" className="w-full">
                  Create Event
                </Button>
            </div>
          </div>
        </form>
  );
};

