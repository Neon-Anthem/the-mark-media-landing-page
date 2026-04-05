"use client";

import { motion } from "motion/react";

function Title() {
  return (
    <div className="flex items-center justify-between ">
      <h3 className="text-2xl sm:text-6xl md:text-8xl font-title font-regular tracking-wider uppercase">
        Case Studies
      </h3>
      <motion.span
        transition={{
          // ease: [0.621, -0.029, 0.483, 0.997],
          ease: "circInOut",
          type: "tween",
          stiffness: 1,
          duration: 0.6,
          bounce: 10,
          // visualDuration: 1,
        }}
        animate={{
          scale: [0, 1],
          // x: ["-100vh", 0],
          opacity: [0, 1],
        }}
        className="text-6xl sm:text-6xl md:text-9xl leading-none text-brand-6"
      >
        ✦
      </motion.span>
    </div>
  );
}

interface IProject {
  id: string;
  label: string;
  tags: string[];
  services: string[];
  rootImage: string;
  images: string[];
  videos: string[];
}

interface ICaseStudy {
  id: string;
  company: string;
  logo_url: string;
  image_url: string;
  projects: IProject[];
}

export default function CaseStudiesSection() {
  return (
    <section className="container">
      <Title />
      {/* Page Content */}
      <div></div>
    </section>
  );
}
