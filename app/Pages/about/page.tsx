"use client";

import React, { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import { BackgroundBeams } from "@/components/ui/background-beams";

import Footer from "@/components/Footer";
import { navItems } from "@/data";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { WobbleCardDemo } from "@/app/Pages/about/WobbleCardDemo";

export default function AboutPage() {
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
      { threshold: 1.0 }
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
        setLogoVisible(direction < 0);
      }
    }
  });

  return (
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
              className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40 px-4"
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

        {/* About Section */}
        <section className="relative z-10 w-full flex-grow pt-40" ref={heroRef}>
          {/* <About /> */}
          <WobbleCardDemo />
        </section>

        {/* Footer */}
        
        <Footer />
        
      </div>
        {/* <BackgroundBeams/> */}
    </main>
  );
}
