"use client";
import React from "react";
import { TracingBeamDemo } from "@/app/Pages/team2/TracingBeamDemo";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Page() {
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Floating Navigation Bar */}
        <FloatingNav navItems={navItems} className="z-50" />

        {/* Heading */}
        <div className="flex justify-center pt-28 pb-16"> {/* Increased bottom padding */}
          <h1 className="text-4xl font-bold mb-8">
            Meet Our <span className="text-purple">Amazing Team</span>
          </h1>
        </div>

        {/* <BackgroundBeamsWithCollision/> */}
        {/* Team Component */}
        <div className="mt-10 mb-20"> {/* Increased top and bottom margin */}
          <TracingBeamDemo />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
