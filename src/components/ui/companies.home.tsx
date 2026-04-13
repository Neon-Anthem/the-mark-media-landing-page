"use client";

import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";
import { Section } from "./section";
import { SectionTitle } from "./section-title";
import ShinyText from "./shiny-text";

function splitArray(
  arr: unknown[],
  firstArrayLength: number,
  splitLength: number,
) {
  const length = arr.length;
  const matrixArray = [];
  for (let arrayLen = 0; arrayLen < length; ) {
    if (arrayLen === 0) {
      const firstArray = arr.slice(0, firstArrayLength);
      matrixArray.push(firstArray);
      arrayLen += firstArrayLength;
      continue;
    }
    const splitArray = arr.slice(arrayLen, arrayLen + splitLength);
    matrixArray.push(splitArray);
    arrayLen += splitLength;
  }
  return matrixArray;
}

export default function CompaniesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-background mt-16" ref={containerRef}>
      <div className="mx-2 sm:mx-8 space-y-4 md:space-y-6">
        <SectionTitle subheadline="Brands we have worked magic with">
          Our clients
        </SectionTitle>
        <div className="" data-block="contain">
          <div className="relative border-2 border-accent/40 rounded-xs">
            {/* <CornerStars /> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 divide-x divide-accent/40 divide-y">
              {/* Placeholder */}

              {/* End Placeholder */}
              {companyList?.map((company, idx) => {
                return (
                  <div
                    key={company.alt + idx}
                    className={cn(
                      "h-32 px-4 flex items-center justify-center",
                      company.className,
                    )}
                  >
                    <Image
                      src={company.src}
                      alt={company.alt}
                      width={400}
                      height={400}
                      style={{
                        opacity: company.opacity || 1,
                        width: `${company.size || "6rem"}`,
                      }}
                      className="object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                );
              })}
              <div className="flex flex-col h-32 items-start justify-between p-4 col-span-2">
                <p className="text-nowrap text-center font-title">
                  <ShinyText
                    className="text-xl sm:text-2xl uppercase"
                    text={"This could be you..."}
                  />
                </p>
                {/* CTA */}
                <div>
                  <span className="[&>svg]:size-4 text-primary flex items-center gap-2 border-b border-primary/50">
                    Book a Free Audit
                    <IconArrowRight />
                  </span>
                </div>
                {/* End CTA */}
              </div>
            </div>
          </div>
          {/* <div className="mx-auto w-max">
          <CTAButton>Book a Free Analysis</CTAButton>
        </div> */}
        </div>
      </div>
    </Section>
  );
}

type LogoListType = {
  src: string;
  alt: string;
  opacity?: number;
  className?: string;
  size?: string;
  text?: string;
}[];
const companyList: LogoListType = [
  {
    src: "/assets/client-logos/marrakesh.png",
    alt: "Marrakesh",
    size: "10rem",
  },
  {
    src: "/assets/client-logos/bastian.png",
    alt: "Bastian",
    size: "8rem",
  },
  {
    src: "/assets/client-logos/curated-coffee.png",
    alt: "Curated Coffee",
    opacity: 0.8,
    size: "4rem",
  },
  {
    src: "/assets/client-logos/phoenix-marketcity.png",
    alt: "Phoenix Marketcity",
    opacity: 0.8,
    size: "4rem",
  },
  {
    src: "/assets/client-logos/mantri-square.png",
    alt: "Mantri Square",
    opacity: 0.8,
    size: "7rem",
  },
  {
    src: "/assets/client-logos/kiki.png",
    alt: "Kiki",
    size: "5rem",
  },
  {
    src: "/assets/client-logos/verosha-spa.png",
    alt: "Verosha Cave Spa",
  },
  {
    src: "/assets/client-logos/nykaa.png",
    alt: "Nykaa",
    size: "8rem",
  },
  {
    src: "/assets/client-logos/pride-of-cows.png",
    alt: "Pride Of Cows",
  },
  { src: "/assets/client-logos/escenza.png", alt: "Escenza" },
];
