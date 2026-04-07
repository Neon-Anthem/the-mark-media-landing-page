"use client";

import { footerTextAtom } from "@/store/footer-text-atom";
import { useSetAtom } from "jotai";
import {
  motion,
  TargetAndTransition,
  useAnimation,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

interface IServiceType {
  id: string;
  title: string;
  tag: string[];
  description: string;
}
interface IServiceGroup {
  groupTitle: string;
  services: IServiceType[];
}

const serviceGroups: IServiceGroup[] = [
  {
    groupTitle: "Community & Account Management",
    services: [
      {
        id: "community-building",
        title: "Community Engagement",
        tag: ["Audience", "Brand Loyalty"],
        description: "Foster engaged audiences that champion your brand",
      },
      {
        id: "influencer-management",
        title: "Influencer Management",
        tag: ["Creators", "Partnerships"],
        description: "Strategic partnerships with authentic creators",
      },
      {
        id: "account-management",
        title: "Account Management",
        tag: ["Support", "Execution"],
        description: "Dedicated support for seamless execution",
      },
      {
        id: "instagram-management",
        title: "Instagram Management",
        tag: ["Instagram", "Platform Expertise"],
        description: "Platform expertise for maximum reach",
      },
    ],
  },
  {
    groupTitle: "Advertising & Campaigns",
    services: [
      {
        id: "meta-ads",
        title: "Meta Ads",
        tag: ["Meta", "Campaigns"],
        description: "Targeted campaigns that convert",
      },

      {
        id: "seo-ppc",
        title: "SEO and PPC",
        tag: ["SEO", "PPC", "Paid Search"],
        description: "Optimised visibility and paid search",
      },
      {
        id: "google-my-business",
        title: "Google Business",
        tag: ["Local", "Presence"],
        description: "Local presence optimisation",
      },
    ],
  },
  {
    groupTitle: "Content & Strategy",
    services: [
      {
        id: "content-strategy",
        title: "Content Strategy",
        tag: ["Storytelling", "Data-driven"],
        description: "Data-driven storytelling frameworks",
      },
      {
        id: "content-creation",
        title: "Content Creation",
        tag: ["Visual Content", "Professional"],
        description: "Professional, engaging visual content",
      },
      {
        id: "affiliate-marketing",
        title: "Affiliate Marketing",
        tag: ["Performance", "Partnerships"],
        description: "Performance-based partnerships",
      },
    ],
  },
  {
    groupTitle: "Analytics & Development",
    services: [
      {
        id: "analytics-reporting",
        title: "Analytics & Reporting",
        tag: ["Insights", "Tracking"],
        description: "Measurable insights and performance tracking",
      },
      {
        id: "website-development",
        title: "Website Development",
        tag: ["Responsive", "Conversion"],
        description: "Responsive, conversion-focused sites",
      },
    ],
  },
];

export const serviceList = [
  {
    id: "service-1",
    title: "Service 1",
    tag: ["Tag1", "Tag2"],
    description:
      "Description for the service 1. This is a brief overview of what the service entails and how it can benefit the client.",
  },
  {
    id: "service-2",
    title: "Service 2",
    tag: ["Tag1", "Tag2"],
    description:
      "Description for the service 2. This is a brief overview of what the service entails and how it can benefit the client.",
  },
  {
    id: "service-3",
    title: "Service 3",
    tag: ["Tag1", "Tag2"],
    description:
      "Description for the service 3. This is a brief overview of what the service entails and how it can benefit the client.",
  },
];

export default function ServicesHome() {
  const setText = useSetAtom(footerTextAtom);

  useEffect(() => {
    setText("GROWTH");
  }, [setText]);

  return (
    <section className="bg-background sm:py-24 py-12">
      <div className="container mx-auto space-y-12 px-4 sm:px-0">
        <Title />
        {/*  */}
        <div className="flex flex-col mx-auto gap-4">
          {serviceGroups.map((group) => (
            <ServiceGroup
              key={group.groupTitle}
              groupTitle={group.groupTitle}
              services={group.services}
            />
          ))}
        </div>
        {/*  */}
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="flex items-center justify-between ">
      <h3 className="text-2xl sm:text-6xl md:text-8xl font-title font-regular tracking-wider uppercase">
        Services
      </h3>
      {/* <motion.span
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
        className="text-6xl sm:text-6xl md:text-9xl leading-none text-primary"
      >
        ✦
      </motion.span> */}
    </div>
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

function ServiceGroup({
  groupTitle,
  services,
}: {
  groupTitle: string;
  services: IServiceType[];
}) {
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
    <div className="w-full py-8 border-b-2 border-primary/20">
      <h2 className="text-2xl tracking-widest mb-6 text-center md:text-start">
        {groupTitle}
      </h2>
      <motion.div
        className="flex flex-wrap justify-center md:justify-start gap-4 flex-1"
        ref={ref}
        initial={"hidden"}
        animate={controls}
        variants={containerVariants}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </motion.div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string[];
}) {
  return (
    <motion.div
      className="border border-primary/50 flex flex-col justify-between rounded-2xl p-3 gap-4 flex-1 min-w-75 max-w-100"
      variants={itemVariants}
      transition={{
        type: "spring",
      }}
    >
      <div className="">
        <h3 className="text-4xl h-24">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tag.map((t) => (
          <span
            key={t}
            className="rounded-full border border-primary/50 px-3 py-0.5 text-sm text-primary/80"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
