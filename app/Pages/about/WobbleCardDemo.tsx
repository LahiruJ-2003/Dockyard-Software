"use client";
import { cards } from "@/data/index";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/app/Pages/about/wobble-card";
import { CardStack } from "./card-stack";

export function WobbleCardDemo() {
  const cardItems = cards.map((card) => ({
    id: card.id,
    content: (
      <Image
        src={card.image}
        alt={`Image ${card.id}`}
        layout="fill"
        objectFit="cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    ),
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full bg-transparent">
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-p-400 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-4xl font-extrabold tracking-[-0.015em] text-white">
              Who We Are?
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white font-semibold">
              Dockyard Total Solutions (Pvt) Ltd (DTS), a subsidiary of Colombo
              Dockyard PLC with over 35% government ownership, specializes in
              ICT systems engineering. Established under the Companies Act of
              2007, DTS provides comprehensive ICT solutions through its
              Integrated ICT Solution Center, supported by a team of 25+ skilled
              engineers, offering 24/7 service with deep industry expertise and
              a commitment to excellence.
            </p>
          </div>
          <div className="w-full md:w-1/2 pr-2 self-center md:ml-4">
            <CardStack items={cardItems} scaleFactor={0.2} topCardScale={1.1} />
          </div>
        </div>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-full">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-extrabold tracking-[-0.015em] text-white">
            Values
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white font-bold">
            {/* We add value to the industry as the business partner through diversified business
          solutions derived from state of the art technology blended with our well. */}
            We drive industry growth by serving as a trusted business partner,
            delivering innovative and diversified solutions powered by
            cutting-edge technology. Our approach blends state-of-the-art
            advancements with deep industry expertise, ensuring tailored
            solutions that empower businesses to thrive in an evolving
            landscape. By fostering collaboration, integrity, and excellence, we
            consistently add measurable value to our clients, transforming
            challenges into opportunities and paving the way for sustainable
            success.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-p-200 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-4xl font-extrabold tracking-[-0.015em] text-white">
          Vision
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white font-semibold">
          Un-detachable partner in total solutions.
        </p>
      </WobbleCard>
    </div>
  );
}
