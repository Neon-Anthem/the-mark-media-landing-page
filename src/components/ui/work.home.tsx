"use client";
import { CASE_STUDIES, ICaseStudies } from "@/data/case-studies.data";
import { cn } from "@/lib/utils";
import {
  motion,
  TargetAndTransition,
  useAnimation,
  useInView,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CTAButton } from "./cta.button";
import { NumberTicker } from "./number-ticker";
import { Section } from "./section";
import { SectionTitle } from "./section-title";

export function WorkHomePage() {
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
    <Section>
      <div data-block="contain">
        <SectionTitle subheadline="Case Studies">Our Work</SectionTitle>

        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={controls}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-8"
        >
          {CASE_STUDIES?.map((work, index) => {
            return <WorkHomeCard {...work} key={index} />;
          })}
        </motion.div>
      </div>
    </Section>
  );
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

const itemVariants: { [key: string]: TargetAndTransition } = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function WorkHomeCard({ ...item }: ICaseStudies) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{
        type: "spring",
      }}
      className="min-w-84 max-w-10 border border-accent/20 shadow-xl shadow-white/5 rounded-xl m-2 flex-1"
    >
      <div className="relative rounded-t-[inherit]">
        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-0 from-background/0 to-transparent w-full h-full rounded-t-[inherit]"></div>
        {/* End Overlay */}
        <div className="absolute bottom-2 left-0 right-0">
          {/* Tag */}
          <span className="px-2 py-0.5 text-sm capitalize border border-background text-background ml-2">
            {item?.tag?.[0]}
          </span>
          {/* End Tag */}
        </div>
        {/* Image */}
        <div
          className={cn("w-full h-48 rounded-t-[inherit] overflow-hidden", {
            "bg-white": item.hasBg,
          })}
        >
          <Image
            src={item.imageSrc}
            className="w-full h-full object-cover"
            alt="image"
            width={400}
            height={400}
          />
        </div>
        {/* End Image */}
      </div>

      <div className="p-2 px-3">
        <div className="space-y-2">
          {/* Company Name */}
          <span className="font-mono font-medium text-primary">
            {item.companyName}
          </span>
          {/* End Company Name */}
          <h5 className="text-2xl">{item?.objective}</h5>
          <p className="text-foreground/60 line-clamp-2 text-sm">
            {item?.description}
          </p>
        </div>

        {/*  */}
        <div className="my-2">
          <ul className="space-y-2">
            {item?.metrics?.map((metric) => {
              return <MetricCard {...metric} key={metric.label} />;
            })}
          </ul>
        </div>
        {/*  */}

        {/* Cta */}
        <div className="mt-6">
          <CTAButton variant={"primary"} className="text-base">
            Read Case Study
          </CTAButton>
        </div>
        {/* End Cta */}
      </div>
    </motion.div>
  );
}

function MetricCard({ ...item }: ICaseStudies["metrics"][0]) {
  return (
    <li className="flex flex-row gap-2">
      <div className="">✦</div>
      <div className="flex flex-col">
        <div className="">
          <h6 className="text-foreground/70">{item.label}</h6>
        </div>
        <div className="**:text-lg text-primary">
          {typeof item?.value === "object" ? (
            <span
              className={cn("flex items-center", {
                "gap-1": item.value.spaced,
              })}
            >
              {/* Prefix */}
              {item?.value?.prefix ? <p>{item?.value?.prefix}</p> : null}
              {/* End prefix */}
              <NumberTicker
                className="text-primary"
                value={item?.value.val}
                decimalPlaces={item?.value?.decimalPlace}
              />
              {/* Suffix */}
              <p>{item?.value?.suffix}</p>
              {/* End Suffix */}
            </span>
          ) : (
            <span>{item.value}</span>
          )}
        </div>
      </div>
    </li>
  );
}
