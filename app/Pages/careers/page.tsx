"use client";

import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { Careers } from "@/app/Pages/careers/careers";

export default function CareersPage() {
  const { scrollYProgress } = useScroll();
  const [logoVisible, setLogoVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLogoVisible(entry.isIntersecting);
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setLogoVisible(true);
      } else {
        if (direction < 0) {
          setLogoVisible(true);
        } else {
          setLogoVisible(false);
        }
      }
    }
  });

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Careers",
              url: "https://dockyardsoftware.com/careers",
              description:
                "Explore career opportunities with Dockyard Software. Join our diverse, inclusive team and work in a dynamic environment where innovation thrives.",
              potentialAction: {
                "@type": "ApplyAction",
                name: "Apply for a Job",
                url: "mailto:lahiru@dockyardsolution.lk",
              },
            }),
          }}
        />
      </Head>

      <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/* Floating Navigation Bar */}
          <FloatingNav navItems={navItems} className="z-50" />

          <AnimatePresence mode="wait">
            {logoVisible && (
              <motion.header
                initial={{ opacity: 1, y: -100 }}
                animate={{
                  y: logoVisible ? 0 : -100,
                  opacity: logoVisible ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40"
              >
                {/* Logo with animation matching the navbar */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, y: -17 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold pl-4"
                >
                
                </motion.div>
              </motion.header>
            )}
          </AnimatePresence>

          {/* Careers Section */}
          <section
            className="relative z-10 w-full flex-grow mb-36"
            ref={heroRef}
          >
            <Careers />

            <div className="flex flex-col md:flex-row justify-between items-center py-2 px-6 ">
              {/* Left Content Container */}
              <div className="w-full md:w-7/12 p-6 bg-white text-black border border-transparent rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-shine"></div>
                <h1 className="text-5xl font-bold mb-6">Careers — Join us!</h1>
                <p className="mb-4">
                  Vivanti prioritises diversity, equality, and inclusion (DEI)
                  and actively promotes these values as specialists in
                  healthcare marketing. We recognise and appreciate the diverse
                  backgrounds, perspectives, experiences, and identities of our
                  employees, clients, and stakeholders.
                </p>
                <p className="mb-4">
                  As a healthcare marketing agency our internal policies aim to
                  foster an inclusive work culture where everyone feels
                  respected, valued, and empowered to contribute. Research shows
                  that diverse teams are more innovative, creative, and better
                  equipped to solve complex problems, and our international team
                  exemplifies this.
                </p>
                <p className="font-semibold">
                  Join our friendly team, where collaboration and positivity
                  thrive.
                </p>
              </div>

              {/* Right Content Container */}
              <div className="w-full md:w-4/12 p-6 mt-8 md:mt-0 bg-white text-black border border-transparent rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-shine"></div>
                <h2 className="text-3xl font-semibold mb-6">
                  Interested in joining our team?
                </h2>
                <a
                  href="#"
                  className="inline-block text-center bg-black-100 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                >
                  dockyardsoftware@gmail.com
                </a>
                <p className="text-sm mt-4 ml-6 font-medium">
                  Send your CV through this!
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
