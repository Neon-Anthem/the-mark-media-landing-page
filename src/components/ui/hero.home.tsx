"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { CTAButton } from "./cta.button";
import { Marquee } from "./marque";
import { Section } from "./section";
import ShinyText from "./shiny-text";
import { TextAnimate } from "./text-animated";

export default function HeroSection() {
  return (
    <Section
      className={
        "relative z-20 h-screen bg-radial-[at_25%_25%] from-background via-background to-primary pt-24"
      }
    >
      <HeroHeading />
    </Section>
  );
}

function HeroHeading() {
  return (
    <div className="mt-16" data-block="contain">
      <div className="relative text-4xl md:text-8xl mx-auto font-medium space-y-16">
        <div className="text-center mx-auto w-full sm:w-[70%]">
          <TextAnimate animation="blurInUp" duration={0.6} className="j">
            We turn your marketing spends into Measurable Revenue.
          </TextAnimate>
        </div>

        {/* Sub Heading  */}
        <div className="w-[90%] text-center sm:w-[60%] mx-auto">
          <p className="text-sm sm:text-xl">
            Full-service media agency for growth-stage companies who need
            campaigns that close, not just campaigns that run.
          </p>
        </div>
        {/* End Sub Heading */}

        {/* CTA  */}
        <HeroCTA />
        {/* End CTA */}

        {/* Hero Visuals */}
        <HeroVisuals />
        {/* End Hero Visuals */}
      </div>
      <LogoCloud />
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="w-max mx-auto hidden xl:block">
      <CTAButton
        variant={"primary"}
        mode={"rounded"}
        size={"small"}
        iconMode="tiled"
      >
        Get Our Free Brand Audit
      </CTAButton>
    </div>
  );
}

function HeroVisuals() {
  return (
    <div className="">{/* //todo: Place a video reel on the concept. */}</div>
  );
}

export function XHeroSection() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className="h-screen relative" ref={container}>
      {/* Content */}
      <div className="absolute top-[45%] -translate-y-1/2 w-full space-y-16 overflow-hidden h-full flex flex-col items-center justify-center text-center px-4">
        {/* Tagline */}
        <ShinyText
          className="text-xl mix-blend-difference text-white/80"
          text="Your Digital Compass"
        />

        {/* End Tagline */}

        {/* Hero Title */}
        <div className="">
          <motion.h2
            style={{ scale, opacity, translateY }}
            //   animate={{ opacity: 1, scale: [1.8, 0.9, 1] }}
            transition={{
              duration: 0.5,
            }}
            className="text-8xl max-w-[80vw]  font-medium text-white/90 font-title z-10 mix-blend-difference"
          >
            {/* Skyrocket your business with our innovative Marketing solutions */}
            Make Your Mark. <br></br>Create Lasting Digital Impact
          </motion.h2>
        </div>
        {/* End Hero Title */}

        {/* CTA */}
        <div className="flex items-center gap-12 justify-center py-1 pl-4 pr-1">
          <p className="mix-blend-difference text-md font-medium text-white">
            Let&apos;s Audit your Marketing Strategy
          </p>
        </div>
      </div>
      {/* End Content */}
      {/* Logo Cloud */}
      <LogoCloud />
      {/* End Logo Cloud */}
    </section>
  );
}

type LogoListType = {
  src: string;
  alt: string;
  opacity?: number;
  size?: string;
}[];

function LogoCloud() {
  const logos: LogoListType = [
    {
      src: "/assets/client-logos/marrakesh.png",
      alt: "Marrakesh",
      opacity: 0.55,
      size: "10rem",
    },
    {
      src: "/assets/client-logos/bastian.png",
      alt: "Bastian",
      opacity: 0.55,
      size: "8rem",
    },
    {
      src: "/assets/client-logos/curated-coffee.png",
      alt: "Curated Coffee",
      opacity: 0.55,
      size: "5rem",
    },
    {
      src: "/assets/client-logos/kiki.png",
      alt: "Kiki",
      opacity: 0.55,
      size: "5rem",
    },
    {
      src: "/assets/client-logos/verosha.png",
      alt: "Verosha Cave Spa",
      opacity: 0.55,
    },
    {
      src: "/assets/client-logos/nykaa.png",
      alt: "Nykaa",
      opacity: 0.55,
      size: "8rem",
    },
    {
      src: "/assets/client-logos/pride-of-cows.png",
      alt: "Pride Of Cows",
      opacity: 0.55,
    },
    { src: "/assets/client-logos/escenza.png", alt: "Escenza", opacity: 0.55 },
  ];

  return (
    <div className="absolute bottom-16 left-0 w-full h-32">
      <div className="py-4">
        <h3 className=" text-white/70 font-title text-center">
          Brands We&apos;ve Worked with
        </h3>
      </div>
      <Marquee className="" reverse>
        {logos?.map((logo) => {
          return <Logo key={logo.src} {...logo} />;
        })}
      </Marquee>
    </div>
  );
}

function Logo({ src, alt, opacity, size }: LogoListType[number]) {
  return (
    <div className="px-12 my-auto w-56 h-28 flex items-center justify-center">
      <Image
        src={src!}
        alt={alt!}
        width={400}
        height={400}
        style={{
          opacity: opacity || 0.55,
          width: `${size || "6rem"}`,
          // height: `${size || "6rem"}`,
        }}
        className="object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export function Shader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0 }}
        pixelDensity={1.5}
        fov={45}
        pointerEvents="none"
        lazyLoad={true}
      >
        <ShaderGradient
          animate="on"
          brightness={0.6}
          cAzimuthAngle={180}
          cDistance={4.4}
          cPolarAngle={70}
          cameraZoom={1}
          color1="#d2ec8d"
          color2="#5c7bb7"
          color3="#06193a"
          //   control="props"
          //   embedMode="off"
          envPreset="city"
          //   format="gif"
          //   fov={45}
          //   frameRate={10}
          //   gizmoHelper="hide"
          grain="off"
          lightType="3d"
          // pixelDensity={1}
          positionX={0}
          positionY={0.9}
          positionZ={-0.3}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={45}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.2}
          uFrequency={0}
          uSpeed={0.2}
          uStrength={3.4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
