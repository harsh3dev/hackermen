"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { web3, contractInstance } from "@/lib/web3";

const ResellForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [error, setError] = useState(null);
  const onSubmit = async (data) => {
    console.log(data);
    reset();
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    };


    const ownerAddress = await contractInstance.methods.getTicketOwner(data.tokenID).call();
    if(ownerAddress===accounts[0]){
        console.log(ownerAddress);
        await contractInstance.methods.TicketListing(Number(data.tokenID),Number(data.resellPrice)).send({ from: accounts[0] });
    } else{
        setError("The ticket does not belong to the owner's wallet");
        setTimeout(() => {            
            console.log(error);
        }, 1000);
    }
}
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full flex justify-around items-center gap-4"
    >
      <h1 className="absolute top-[-52px] left-[42%] text-xl z-10 ">
        Resell your ticket
      </h1>
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="space-y-2">
          <Label htmlFor="tokenID">Token ID</Label>
          <Input
            id="tokenID"
            placeholder="Enter token ID"
            {...register("tokenID", { required: true })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="resellPrice">Selling Price</Label>
          <Input
            id="resellPrice"
            type="resellPrice"
            placeholder="Enter the reselling price"
            {...register("resellPrice", { required: true })}
          />
        </div>
      <Button className='w-full align-bottom ' type="submit">Resell Ticket</Button>
      </div>
    </form>
  );
};

export default ResellForm;
