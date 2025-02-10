"use client";
import React from "react";
import { StickyScroll } from "../about2/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Who We Are?",
    description:
      "Dockyard Total Solutions (Pvt) Ltd (DTS), a fully owned subsidiary of Colombo Dockyard PLC (35% owned by the Sri Lankan government), offers comprehensive ICT solutions through its Integrated ICT Solution Center. Leveraging Colombo Dockyard's ICT expertise, DTS provides services globally with a team of over 25 qualified software and hardware engineers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/who.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "To create value in the industry by serving as a trusted business partner, delivering diversified solutions powered by state-of-the-art technology and a commitment to excellence.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/mission.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Vission",
    description:
      "To be an indispensable partner in providing comprehensive, innovative, and sustainable solutions that drive success.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/vission.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
 
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
