"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Button from "./button";
import CurvedLoop from "./curved-loop";

const brandPaths = [
  "/brand-logos-x/bastion-logo-tmm.png",
  "/brand-logos-x/escenza-logo-tmm.png",
  "/brand-logos-x/marrekesh-logo-tmm.png",
  "/brand-logos-x/nykaa-logo-tmm.png",
  "/brand-logos-x/new-me-logo-tmm.png",
  "/brand-logos-x/coco-logo-tmm.png",
  "/brand-logos-x/pheonix-pune-logo-tmm.png",
  "/brand-logos-x/kiki-logo-tmm.png",
  "/brand-logos-x/curated-coffee-logo-tmm.png",
];

const ContainerRefContext =
  createContext<React.RefObject<HTMLDivElement | null> | null>(null);

function useContainerRef() {
  const ctx = useContext(ContainerRefContext);
  if (!ctx)
    throw new Error(
      "useContainerRef must be used within a ContainerRefProvider",
    );
  return ctx;
}

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <ContainerRefContext.Provider value={containerRef}>
      <section
        className="relative w-full bg-black border-t border-brand-6/10 overflow-x-hidden"
        ref={containerRef}
      >
        <Title />

        <div className="md:mt-16">
          <FeaturedWork1 />
          <FeaturedWork2 />
          <ExploreCaseStudies />
        </div>
      </section>
    </ContainerRefContext.Provider>
  );
}

function Title() {
  return (
    <motion.div className="md:mt-28 mt-32 flex gap-6 w-[80%] mx-auto  items-center justify-center">
      <div className="text-center">
        <motion.h3 className="text-6xl text-white text-center">
          {/* About <span className="text-brand-6 font-medium">Mark Media</span> */}
          <span className="font-medium font-title">Featured Work & Events</span>
          <br></br>
          {/* <span className="text-6xl">Partnership That Actually Converts</span> */}
        </motion.h3>
      </div>
    </motion.div>
  );
}

function FeaturedWork1() {
  return (
    <div className="relative container mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-8 grid-rows-4 gap-4 mb-16 h-[80vh]">
        {/*  */}

        <div className="ring-1 ring-brand-6 p-2 col-span-3 row-span-4">
          {(() => {
            const src = "/assets/afterburn/girl-running.png";
            return (
              <Image
                loader={() => src}
                src={src}
                width={100}
                height={100}
                alt="Work image"
                className="object-cover h-full w-auto"
              />
            );
          })()}
        </div>
        <div className="col-span-3 row-span-2">
          <h2 className="text-7xl font-medium">The Run Club</h2>
          <p className="text-white/80 text-justify">
            A dynamic community platform connecting running enthusiasts to
            organize clubs, track workouts, and build lasting fitness
            connections. Through intuitive event management and social features,
            The Run Club fosters engagement and loyalty while providing brands
            with authentic touchpoints to reach health-conscious audiences.
          </p>
          {/*  */}
          <div className="mt-14 relative w-full z-10">
            {/* Text */}

            {/* End Text */}

            {/* //?Group photos */}
            <div className="relative col-span-5 w-full h-fit overflow-visible ring-1 p-2 ring-brand-6 -z-10">
              <Image
                loader={() => "/assets/afterburn/group-photo.png"}
                width={100}
                height={100}
                alt="People running Image"
                src="/assets/afterburn/group-photo.png"
                className="w-full h-32 object-cover z-10 object-[100%_70%]"
              />

              <div className="h-32 w-full absolute top-0 left-0 z-10 my-2 bg-black/40"></div>

              <div className=" w-full absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 right-0 -z-5">
                <h6 className="text-[16rem] leading-none font-black tracking-tighter font-title italic text-start text-brand-6">
                  RUN
                </h6>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/* End  */}

        {/* Video Showcase */}
        <div className="col-span-2 row-span-2 my-auto">
          {/* //todo Replace with video */}
          <div className="w-full h-fit overflow-hidden ring-1 p-2 ring-brand-6">
            <Image
              loader={() =>
                "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={100}
              height={100}
              alt="People running Image"
              src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Des */}
          <div className=" h-full"></div>
          {/* end */}
        </div>
        {/* End Video Showcase */}

        {/*  */}
        <div className="col-span-2 row-span-1 pt-8">
          {/* <p className="text-justify text-white/80 mx-auto mt-4">
            A dynamic community platform connecting running enthusiasts to
            organize clubs, track workouts, and build lasting fitness
            connections. Through intuitive event management and social features.
          </p> */}
        </div>
        {/*  */}
        {/*  */}
        <div className="col-span-3 row-span-1 my-auto z-10">
          <div className="w-full h-fit overflow-hidden ring-1 p-2 ring-brand-6">
            {(() => {
              const src = "/assets/afterburn/red-bull-baner-dj.jpg";
              return (
                <Image
                  loader={() => src}
                  width={100}
                  height={100}
                  alt="People running Image"
                  src={src}
                  className="w-full h-48 object-cover object-[100%_80%]"
                />
              );
            })()}
          </div>
        </div>
        {/*  */}
        {/* End Text */}
        <div className="relative col-span-2 row-span-1 my-auto w-full h-fit overflow-visible ring-1 p-2 ring-brand-6">
          {(() => {
            const src = "/assets/afterburn/push-up.jpg";
            return (
              <Image
                loader={() => src}
                width={100}
                height={100}
                alt="People running Image"
                src={src}
                className="w-full h-40 object-cover z-10 object-[30%_10%]"
              />
            );
          })()}
        </div>
        {/*  */}
        <div className="col-span-3 row-span-1 my-auto">
          <p className="text-7xl leading-none font-title font-black italic">
            <span className="font-ballet">The</span>{" "}
            <span className="text-8xl">AFTERBURN</span>
          </p>
          {/* <p className="text-justify text-white/80 mx-auto mt-4">
            A dynamic community platform connecting running enthusiasts to
            organize clubs, track workouts, and build lasting fitness
            connections. Through intuitive event management and social features.
          </p> */}
        </div>
        {/* End Text */}
      </div>
      {/* End Grid */}

      {/*  */}
    </div>
  );
}

function FeaturedWork2() {
  return (
    <div className="relative container mx-auto pt-16">
      {/* Grid */}
      <div className="grid grid-cols-12 grid-rows-12 gap-4 my-16 h-[80vh]">
        {/* Title */}
        <div className="col-start-1 col-end-6 row-start-1 row-end-3">
          <h2 className="text-8xl text-center font-medium">
            The Bastian{" "}
            <span className="font-ballet text-[9rem] text-orange-600">
              Experience
            </span>
          </h2>
          <p className="">
            Our agency organized a curated night out by sending top influencers
            to the club to boost visibility and engagement. They captured
            authentic experiences, shared live content.
          </p>
        </div>

        {/* End Title */}

        {/* 2 Dancing */}
        <div className="col-start-9 col-end-13 row-start-3 row-end-9  ring-2 ring-orange-600 p-2 z-30">
          {(() => {
            const src = "/assets/bastian/1.jpg";
            return (
              <Image
                loader={() => src}
                width={100}
                height={100}
                alt="People running Image"
                src={src}
                className="w-full h-full object-cover"
              />
            );
          })()}
        </div>
        {/* End 2 Dancing */}

        {/* 16:9 Dacing image */}

        <div className="col-start-6 col-end-10 row-start-1 row-end-1 my-auto ring-2 ring-orange-600 p-2 z-20">
          {(() => {
            const src = "/assets/bastian/2.jpg";
            return (
              <Image
                loader={() => src}
                width={100}
                height={100}
                alt="People running Image"
                src={src}
                className="w-full h-150 object-cover"
              />
            );
          })()}
        </div>
        {/* End 16:9 Dacing image */}

        {/* Club */}

        {/* Club container */}
        {/* <div className="w-full h-full col-start-1 col-end-7 row-start-6 row-end-10 ring-2 ring-orange-600 z-50 p-2"></div> */}
        {/* End Club container */}

        <div className="relative col-start-1 col-end-7 row-start-6 mr-10 row-end-13 my-auto ring-2 ring-orange-600 p-2 z-50">
          {(() => {
            const src = "/assets/bastian/3.jpg";
            return (
              <Image
                loader={() => src}
                width={100}
                height={100}
                alt="People running Image"
                src={src}
                className="w-full h-full object-cover -z-40 opacity-0"
              />
            );
          })()}
        </div>
        <div className="relative col-start-1 col-end-7 mr-10 row-start-6 row-end-13 my-auto ring-2 ring-orange-600 p-2 z-10">
          {(() => {
            const src = "/assets/bastian/3.jpg";
            return (
              <Image
                loader={() => src}
                width={100}
                height={100}
                alt="People running Image"
                src={src}
                className="w-full h-full object-cover -z-40"
              />
            );
          })()}
        </div>
        {/* End Club */}
        {/* Neon */}
        <div className="col-start-4 col-end-11 md:mr-18 row-start-9 row-end-13 ring-2 ring-orange-600 p-2">
          {(() => {
            const src = "/assets/bastian/4.jpg";
            return (
              <Image
                loader={() => src}
                width={100}
                height={100}
                alt="People running Image"
                src={src}
                className="w-full h-full object-cover object-[80%_40%] -z-20"
              />
            );
          })()}
        </div>
        {/* End Neon */}

        {/* Final Text */}
        <div className="relative col-start-10 col-end-13 row-start-9 row-end-13 -mt-4  w-full h-fit overflow-visible z-50">
          <h4 className="font-ballet  text-[8rem] flex flex-col items-center my-auto text-center leading-tight text-neutral-200">
            <span className="">The</span>
            <span>Nightlife</span>
          </h4>
        </div>
        {/* End Final Text */}
      </div>
      {/* End Grid */}
    </div>
  );
}

function ExploreFeatureSection() {
  return <div></div>;
}

function Content() {
  const containerRef = useContainerRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [textDimmed, setTextDimmed] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Dim text after widths expand (0.5) but before images pop (0.6)
    if (latest >= 0.5 && !textDimmed) setTextDimmed(true);
    else if (latest < 0.45 && textDimmed) setTextDimmed(false);
  });

  return (
    <div className="sticky top-32">
      <Title />
      <div className="absolute right-0 left-0 top-0 -z-10 opacity-90">
        <CurvedLoop
          className=""
          marqueeText="Your ✦ Strategic ✦ Growth ✦ Partner ✦"
          curveAmount={540}
          direction="left"
          interactive={false}
          speed={1}
        />
      </div>
      {/* Text Content */}

      <motion.div
        className="relative text-4xl text-center leading-loose mt-16 w-[80%] mx-auto font-medium"
        animate={{
          color: textDimmed
            ? "rgba(255,255,255,0.15)"
            : "rgba(255,255,255,0.9)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        From boutique experiences <WorkImageCard index={0} />
        to global brands, we create <WorkImageCard
          index={1}
        /> partnerships <WorkImageCard index={2} /> that elevate brand presence{" "}
        <WorkImageCard index={3} /> and drive <WorkImageCard index={4} />{" "}
        meaningful engagement across all <WorkImageCard index={5} />{" "}
        touchpoints. We are proud to be trusted by leading{" "}
        <WorkImageCard index={6} />
        brands across the <WorkImageCard index={7} /> hospitality,{" "}
        <WorkImageCard index={8} /> wellness, food & beverage, and retail
        sectors.
      </motion.div>

      {/* End Text Content */}
    </div>
  );
}

function WorkImageCard({ index }: { index: number }) {
  const containerRef = useContainerRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Width starts expanding at 0.4
    if (latest >= 0.4 && !isVisible) setIsVisible(true);
    else if (latest < 0.35 && isVisible) setIsVisible(false);
    // Image pops at 0.6 (+0.2 scroll after width)
    if (latest >= 0.6 && !imageVisible) setImageVisible(true);
    else if (latest < 0.55 && imageVisible) setImageVisible(false);
  });

  // Width expands all at once, image pops staggered
  const imageDelay = index * 0.08;
  // Damping increases with index → later cards settle faster
  const damping = 10 + index * 1.5;
  // Stiffness for smoother, longer spring motion
  const stiffness = 120 + index * 10;
  // Higher mass = smoother & longer
  const mass = 1.2 - index * 0.05;

  return (
    <motion.span
      className="inline-block rounded-xl mx-2 align-middle"
      initial={{ width: 0 }}
      animate={isVisible ? { width: 144 } : { width: 0 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
        mass: 0.8,
      }}
    >
      <motion.span
        className="inline-block rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          imageVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }
        }
        transition={{
          type: "spring",
          stiffness,
          damping,
          mass,
          delay: imageVisible ? imageDelay : 0,
        }}
      >
        <Image
          src={brandPaths[index] ?? "/work1.jpg"}
          alt={"Work Image"}
          width={100}
          height={100}
          className="h-16 w-36 min-w-36 object-cover inline-block rounded-[inherit]"
        />
      </motion.span>
    </motion.span>
  );
}

function ExploreCaseStudies() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-20%" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    async function sequence() {
      // Phase 1: Slide in from right and stack on top of each other
      const cardEls = scope.current?.querySelectorAll(
        "[data-card]",
      ) as NodeListOf<HTMLElement>;
      if (!cardEls?.length) return;

      // Staggered slide-in: each card slides to center
      await Promise.all(
        Array.from(cardEls).map((el, i) =>
          animate(
            el,
            { x: 0, opacity: 1 },
            {
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: i * 0.12,
            },
          ),
        ),
      );

      // 0.2s pause
      await new Promise((r) => setTimeout(r, 200));

      // Phase 2: Spread into a visible fanned stack
      await Promise.all(
        Array.from(cardEls).map((el, i) =>
          animate(
            el,
            {
              x: (i - 2.5) * 18,
              y: (5 - i) * 8,
              rotate: (i - 2.5) * -3,
            },
            {
              type: "spring",
              stiffness: 250,
              damping: 18,
              // delay: i * 0.06,
            },
          ),
        ),
      );
    }

    sequence();
  }, [isInView, animate, scope]);

  return (
    <div className="md:mt-48 flex items-center gap-8 container mx-auto h-[80vh] py-16">
      {/*  */}
      <div ref={scope} className=" relative md:h-[50vh]">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.div
            data-card
            key={index}
            initial={{ x: "100vw", opacity: 0 }}
            style={{ zIndex: index }}
            className="absolute ring-2 ring-brand-6 top-0 bottom-0 left-0 right-0 bg-brand-6 rounded-xl flex items-center gap-6 w-[40vw] h-full mx-auto overflow-hidden"
          >
            {(() => {
              const src = "/assets/bastian/1.jpg";
              return (
                <Image
                  loader={() => src}
                  width={100}
                  height={100}
                  alt="People running Image"
                  src={src}
                  className="w-full h-full object-cover"
                />
              );
            })()}
          </motion.div>
        ))}
      </div>
      {/*  */}
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <h3 className="text-4xl text-center font-medium">
          Explore Our Case Studies
        </h3>
        <Button icon={<IconArrowUpRight className="text-black" />}>
          Case Studies
        </Button>
      </div>
    </div>
  );
}
