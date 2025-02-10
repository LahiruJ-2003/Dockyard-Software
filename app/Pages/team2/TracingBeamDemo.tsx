"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { TracingBeam } from "./TracingBeam";
import { teamDetails } from "../../../data/index";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative">
        {/* First row (1 image) */}
        <div className="grid grid-cols-1 justify-center items-center text-center mb-8">
          <div className="flex flex-col items-center">
            <Image
              src={teamDetails[0].image}
              alt={teamDetails[0].name}
              height={150}
              width={150}
              className="rounded-full object-cover border border-gray-300  w-[150px] h-[150px]"
            />
            <h2 className="text-lg font-bold mt-3">{teamDetails[0].name}</h2>
            <p className="text-sm text-gray-500">{teamDetails[0].designation}</p>
          </div>
        </div>

        {/* Second row (2 images) */}
        <div className="grid grid-cols-2 gap-10 justify-center items-center text-center mb-8">
          {teamDetails.slice(1, 3).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.name}
                height={150}
                width={150}
                className="rounded-full object-cover border border-gray-300  w-[150px] h-[150px]"
              />
              <h2 className="text-lg font-bold mt-3">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.designation}</p>
            </div>
          ))}
        </div>

        {/* Remaining rows (3 images per row) */}
        <div className="grid grid-cols-3 gap-10 justify-center items-center text-center">
          {teamDetails.slice(3).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.name}
                height={150}
              width={150}
              className="rounded-full object-cover border border-gray-300  w-[150px] h-[150px]"
              />
              <h2 className="text-lg font-bold mt-3">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  );
}
