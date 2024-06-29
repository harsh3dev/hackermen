"use client"
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const wallet = useSelector((state)=> state.wallet);
  useEffect(()=>{
    console.log(wallet);
  },[wallet])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar/>
        Home
        {wallet.address}
      <Footer/>
    </main>
  );
}
