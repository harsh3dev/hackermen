"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const wallet = useSelector((state) => state.wallet);
  const filter = useSelector((state) => state.filter);
  useEffect(() => {
    console.log(wallet);
    console.log(filter);
  }, [wallet, filter]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="absolute bg-black w-full h-full -z-10 -top-0 left-0 bg-grid-white opacity-20 pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Unlock the Power of Collaboration
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Streamline your team's workflow with our cutting-edge
                collaboration tools. Get started today.
              </p>
            </div>
            <Link
              href="/buy"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#00b894] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
