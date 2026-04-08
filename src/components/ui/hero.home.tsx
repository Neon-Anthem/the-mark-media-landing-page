"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import Image from "next/image";
import { CTAButton } from "./cta.button";
import { Marquee } from "./marque";
import { Section } from "./section";

export default function HeroSection() {
  return (
    <Section
      className={
        "relative z-50 h-screen bg-radial-[at_25%_25%] from-background via-background to-primary pt-24"
      }
    >
      <HeroHeading />

      <LogoCloud />
    </Section>
  );
}

function HeroHeading() {
  return (
    <div className="pt-16 h-full" data-block="contain">
      <div className="text-3xl md:text-8xl mx-auto font-medium">
        <div className="text-center mx-auto w-full">
          {/* <TextAnimate animation="blurInUp" duration={0.6} className="">
            We turn your marketing spends into Measurable Revenue.
          </TextAnimate> */}
          <h4 className="capitalize">
            We Turn Your<br></br>Marketing Spends into<br></br>Measurable
            Revenue.
          </h4>
        </div>

        {/* Sub Heading  */}
        <div className="w-[90%] text-center sm:w-[60%] mx-auto mt-4 xl:mt-16">
          <p className="text-sm sm:text-xl">
            Full-service media agency for growth-stage companies who need
            campaigns that close, not just campaigns that run.
          </p>
        </div>
        {/* End Sub Heading */}

        {/* CTA  */}
        <HeroCTA />
        {/* End CTA */}
      </div>
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="w-max mx-auto mt-8 xl:mt-20">
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
      size: "4rem",
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
      src: "/assets/client-logos/phoenix-marketcity.png",
      alt: "Pheonix Marketcity",
      opacity: 0.55,
    },
    {
      src: "/assets/client-logos/mantri-square.png",
      alt: "Mantri Square",
      opacity: 0.55,
    },
    {
      src: "/assets/client-logos/nykaa.png",
      alt: "Nykaa",
      opacity: 0.55,
      size: "8.5rem",
    },
    {
      src: "/assets/client-logos/pride-of-cows.png",
      alt: "Pride Of Cows",
      opacity: 0.55,
    },
    {
      src: "/assets/client-logos/escenza.png",
      alt: "Escenza",
      opacity: 0.55,
      size: "5rem",
    },
  ];

  return (
    <div className="absolute bottom-0 w-full flex flex-col sm:flex-row sm:items-center">
      <div className="py-4 px-2 sm:border-r border-primary/50">
        <h3 className=" text-white/70 font-title text-center text-sm text-nowrap">
          Brands We&apos;ve Worked with
        </h3>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="" reverse>
          {logos?.map((logo) => {
            return <Logo key={logo.src} {...logo} />;
          })}
        </Marquee>
        {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div> */}
        {/* <div className=" pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-120 from-transparent to-primary/30"></div> */}
      </div>
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
