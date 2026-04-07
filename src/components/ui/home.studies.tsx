"use client";

import { CASE_STUDIES } from "@/data/case-studies.data";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { WorkHomeCard } from "./work.home";

function Title() {
  return (
    <div className="flex items-center justify-between ">
      <h3 className="text-2xl sm:text-6xl md:text-8xl font-title font-regular tracking-wider uppercase">
        Case Studies
      </h3>
      {/* <motion.span
        transition={{
          // ease: [0.621, -0.029, 0.483, 0.997],a
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
        className="text-6xl sm:text-6xl md:text-9xl leading-none text-primary"
      >
        ✦
      </motion.span> */}
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      // Delay the start of the children's animations
      delayChildren: 0.1,
      // Stagger each child's animation by 0.1 seconds
      staggerChildren: 0.08,
    },
  },
};

export default function CaseStudiesSection() {
  const ref = useRef(null);
  // Detect if the element is in the viewport
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 'once: true' means it only animates on first view
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <section className="container" ref={ref}>
      <Title />
      {/* Page Content */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-8 my-16"
      >
        {CASE_STUDIES?.map((work, index) => {
          return <WorkHomeCard {...work} key={index} />;
        })}
      </motion.div>
    </section>
  );
}
