// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useEffect } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 }, // Slide in from the left
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 }, // Slide in from the right
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(1);

//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     let currentIndex = 1;

//     sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();
//       if (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//       ) {
//         currentIndex = index + 1; // Update the index of the visible project
//       }
//     });

//     setCurrentProjectIndex(currentIndex);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
//       {allProjects.map((project, index) => {
//         const descriptions = [
//           project.des1,
//           project.des2,
//           project.des3,
//           project.des4,
//           project.des5,
//           project.des6,
//         ].filter(Boolean);

//         return (
//           <motion.section
//             key={project.id}
//             id={`project-${index + 1}`} // Unique ID for each project
//             className="h-screen snap-start flex gap-20 items-center justify-center p-8 relative"
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Top Left: SVG and Project Number */}
//             <div className="absolute top-12 left-7 flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 100 150"
//                 width="60"
//                 height="75"
//                 className={
//                   currentProjectIndex === index + 1
//                     ? "opacity-100"
//                     : "opacity-30"
//                 }
//               >
//                 <rect width="100" height="100" fill="#f2f2f2" />
//                 <polygon points="0,100 50,150 100,100" fill="#f2f2f2" />
//               </svg>
//               <span
//                 className={`text-lg font-bold absolute -left-1 top-4 ${
//                   currentProjectIndex === index + 1
//                     ? "text-p-500"
//                     : "text-p-500"
//                 }`}
//               >
//                 {index + 1}/{allProjects.length}
//               </span>
//             </div>

//             {/* Left Side: Image */}
//             <motion.div
//               className="w-1/2 h-1/2 flex justify-center items-center"
//               variants={imageVariants}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src={project.img} // Ensure `project.img` exists in your data
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>

//             {/* Right Side: Content */}
//             <motion.div
//               className="w-2/3 flex flex-col items-start justify-center p-8 bg-white rounded-lg shadow-lg"
//               variants={contentVariants}
//               transition={{ duration: 1 }}
//             >
//               {/* Title */}
//               <h1 className="text-black text-4xl font-bold mb-4">
//                 {project.title}
//               </h1>
//               <h3 className="text-lg text-gray-600 mb-6">
//                 {project.secondTitle}
//               </h3>

//               {/* Descriptions */}
//               <ul className="list-disc pl-5 space-y-2 mb-6">
//                 {descriptions.map((description, idx) => (
//                   <li key={idx} className="text-p-400 text-base">
//                     {description}
//                   </li>
//                 ))}
//               </ul>

//               {/* Technology Icons */}
//               <div className="flex justify-center w-full mt-auto">
//                 {project.icon.map((icon) => (
//                   <motion.div
//                     key={icon.id}
//                     className="mx-2"
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Image
//                       src={icon.img}
//                       width={40}
//                       height={40}
//                       alt="Technology Icon"
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.section>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsList;
// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useEffect } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(1);

//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     let currentIndex = 1;

//     sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();
//       if (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//       ) {
//         currentIndex = index + 1;
//       }
//     });

//     setCurrentProjectIndex(currentIndex);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar">
//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//       {allProjects.map((project, index) => {
//         const descriptions = [
//           project.des1,
//           project.des2,
//           project.des3,
//           project.des4,
//           project.des5,
//           project.des6,
//         ].filter(Boolean);

//         return (
//           <motion.section
//             key={project.id}
//             id={`project-${index + 1}`}
//             className="h-screen snap-start flex gap-20 items-center justify-center p-8 relative"
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             <motion.div
//               className="w-1/2 h-1/2 flex justify-center items-center"
//               variants={imageVariants}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>

//             <motion.div
//               className="w-2/3 flex flex-col items-start justify-center p-8 bg-white rounded-lg shadow-lg"
//               variants={contentVariants}
//               transition={{ duration: 1 }}
//             >
//               <h1 className="text-black text-4xl font-bold mb-4">
//                 {project.title}
//               </h1>
//               <h3 className="text-lg text-gray-600 mb-6">
//                 {project.secondTitle}
//               </h3>
//               <ul className="list-disc pl-5 space-y-2 mb-6">
//                 {descriptions.map((description, idx) => (
//                   <li key={idx} className="text-p-400 text-base">
//                     {description}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-center w-full mt-auto">
//                 {project.icon.map((icon) => (
//                   <motion.div
//                     key={icon.id}
//                     className="mx-2"
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Image
//                       src={icon.img}
//                       width={40}
//                       height={40}
//                       alt="Technology Icon"
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.section>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsList;
// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useEffect } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(1);

//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     let currentIndex = 1;

//     sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();
//       if (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//       ) {
//         currentIndex = index + 1;
//       }
//     });

//     setCurrentProjectIndex(currentIndex);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar">
//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//       {/* Page Counter */}
//       <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-full text-lg font-bold z-50">
//         {currentProjectIndex} / {allProjects.length}
//       </div>
//       {allProjects.map((project, index) => {
//         const descriptions = [
//           project.des1,
//           project.des2,
//           project.des3,
//           project.des4,
//           project.des5,
//           project.des6,
//         ].filter(Boolean);

//         return (
//           <motion.section
//             key={project.id}
//             id={`project-${index + 1}`}
//             className="h-screen snap-start flex gap-20 items-center justify-center p-8 relative"
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             <motion.div
//               className="w-1/2 h-1/2 flex justify-center items-center"
//               variants={imageVariants}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>

//             <motion.div
//               className="w-2/3 flex flex-col items-start justify-center p-8 bg-white rounded-lg shadow-lg"
//               variants={contentVariants}
//               transition={{ duration: 1 }}
//             >
//               <h1 className="text-black text-4xl font-bold mb-4">
//                 {project.title}
//               </h1>
//               <h3 className="text-lg text-gray-600 mb-6">
//                 {project.secondTitle}
//               </h3>
//               <ul className="list-disc pl-5 space-y-2 mb-6">
//                 {descriptions.map((description, idx) => (
//                   <li key={idx} className="text-p-400 text-base">
//                     {description}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-center w-full mt-auto">
//                 {project.icon.map((icon) => (
//                   <motion.div
//                     key={icon.id}
//                     className="mx-2"
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Image
//                       src={icon.img}
//                       width={40}
//                       height={40}
//                       alt="Technology Icon"
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.section>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsList;
// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useEffect, useRef } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(1);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const handleScroll = () => {
//     if (!projectsRef.current) return;
//     const sections = projectsRef.current.querySelectorAll("section");
//     let currentIndex = 1;

//     sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();
//       if (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//       ) {
//         currentIndex = index + 1;
//       }
//     });

//     setCurrentProjectIndex(currentIndex);
//   };

//   useEffect(() => {
//     const projectSection = projectsRef.current;
//     if (projectSection) {
//       projectSection.addEventListener("scroll", handleScroll);
//     }
//     return () => {
//       if (projectSection) {
//         projectSection.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div ref={projectsRef} className="relative h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar">
//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//       {/* Page Counter */}
//       <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-full text-lg font-bold z-50">
//         {currentProjectIndex} / {allProjects.length}
//       </div>
//       {allProjects.map((project, index) => {
//         const descriptions = [
//           project.des1,
//           project.des2,
//           project.des3,
//           project.des4,
//           project.des5,
//           project.des6,
//         ].filter(Boolean);

//         return (
//           <motion.section
//             key={project.id}
//             id={`project-${index + 1}`}
//             className="h-screen snap-start flex gap-20 items-center justify-center p-8 relative"
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             <motion.div
//               className="w-1/2 h-1/2 flex justify-center items-center"
//               variants={imageVariants}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>

//             <motion.div
//               className="w-2/3 flex flex-col items-start justify-center p-8 bg-white rounded-lg shadow-lg"
//               variants={contentVariants}
//               transition={{ duration: 1 }}
//             >
//               <h1 className="text-black text-4xl font-bold mb-4">
//                 {project.title}
//               </h1>
//               <h3 className="text-lg text-gray-600 mb-6">
//                 {project.secondTitle}
//               </h3>
//               <ul className="list-disc pl-5 space-y-2 mb-6">
//                 {descriptions.map((description, idx) => (
//                   <li key={idx} className="text-p-400 text-base">
//                     {description}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-center w-full mt-auto">
//                 {project.icon.map((icon) => (
//                   <motion.div
//                     key={icon.id}
//                     className="mx-2"
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Image
//                       src={icon.img}
//                       width={40}
//                       height={40}
//                       alt="Technology Icon"
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.section>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsList;
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
    <div ref={projectsRef} className="relative h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar">
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* Page Counter */}
      <div className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-full text-lg font-bold z-50">
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
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
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

