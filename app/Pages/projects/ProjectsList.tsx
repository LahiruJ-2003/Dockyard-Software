"use client";
import { allProjects } from "@/data/index";
import { motion } from "framer-motion";
import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsList: FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(1);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!projectsRef.current) return;
    const sections = projectsRef.current.querySelectorAll("section");
    let currentIndex = 1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentIndex = index + 1;
      }
    });

    setCurrentProjectIndex(currentIndex);
  };

  useEffect(() => {
    const projectSection = projectsRef.current;
    if (projectSection) {
      projectSection.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (projectSection) {
        projectSection.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={projectsRef}
      className="relative h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar"
    >
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* "Bring your projects" Section */}
      {/* <h2 className="text-center text-3xl font-bold mt-10">
        Bring your projects
      </h2> */}

      {/* Page Counter */}
      <div className="fixed top-20 right-10 bg-black text-white px-6 py-3 rounded-full text-lg font-bold z-50">
        {currentProjectIndex} / {allProjects.length}
      </div>

      {allProjects.map((project, index) => {
        const descriptions = [
          project.des1,
          project.des2,
          project.des3,
          project.des4,
          project.des5,
          project.des6,
        ].filter(Boolean);

        return (
          <motion.section
            key={project.id}
            id={`project-${index + 1}`}
            className="h-screen snap-start flex flex-col gap-10 items-center justify-center p-6 relative md:flex-row"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-full md:w-1/2 flex justify-center items-center"
              variants={imageVariants}
              transition={{ duration: 1 }}
            >
              {project.img && ( // Only render the Image component if project.img exists (is not undefined or null)
                <Image
                  src={project.img} // Ensure project.img is a valid string before passing it to the Image component
                  alt={project.title} // Provide an alternative text for accessibility
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
            </motion.div>

            <motion.div
              className="w-full md:w-2/3 flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-lg"
              variants={contentVariants}
              transition={{ duration: 1 }}
            >
              <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>
              <h3 className="text-lg text-gray-600 mb-4">
                {project.secondTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {descriptions.map((description, idx) => (
                  <li key={idx} className="text-gray-800 text-base">
                    {description}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center w-full mt-auto gap-4">
                {project.icon.map((icon) => (
                  <motion.div
                    key={icon.id}
                    className="w-10 h-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={icon.img}
                      width={40}
                      height={40}
                      alt="Technology Icon"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default ProjectsList;
