import { cn } from "@/lib/utils";
import { IconPlus, IconSparkles2Filled } from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import ShinyText from "./shiny-text";
import { TextAnimate } from "./text-animated";

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
      src: "-",
      alt: "Placeholder",
      text: "This could be your Brand",
      opacity: 0.55,
      size: "10rem",
      className: "col-span-2",
    },
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
      src: "/assets/client-logos/kiki.png",
      alt: "Kiki",
      size: "5rem",
    },
    {
      src: "/assets/client-logos/verosha.png",
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

  const logoMatrix = splitArray(companyList, 3, 4);

  return (
    <section className="bg-black py-24" ref={containerRef}>
      <div className="container mx-auto space-y-16">
        <Title containerRef={containerRef} />
        <div className="relative outline outline-white/50 rounded-xs divide-y divide-white/50">
          {/* <CornerStars /> */}

          {logoMatrix.map((logoList, matrixIndex) => {
            return (
              <div
                className="grid grid-cols-4 w-full divide-x divide-white/50 *:border-white/50"
                key={matrixIndex}
              >
                {(logoList as LogoListType).map((company, idx) => {
                  const abrubptEnd =
                    matrixIndex === logoMatrix.length - 1 &&
                    logoList.length < 8;
                  return (
                    <div
                      key={company.alt + idx}
                      className={cn(
                        "h-32 px-4 flex items-center justify-center",
                        company.className,
                        {
                          "border-r": abrubptEnd,
                        },
                      )}
                    >
                      {company.text ? (
                        <div className="flex items-center justify-center col-span-2">
                          <p className="text-nowrap w-[80%] text-center text-white md:text-2xl font-title">
                            <ShinyText text={company.text} />
                          </p>
                        </div>
                      ) : (
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
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const cornerStarVariants = cva("absolute *:size-12 text-white border-none");

function CornerStars() {
  const IconComp = <IconPlus strokeWidth={0.5} />;
  return (
    <>
      <div
        className={cn(
          "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
          cornerStarVariants(),
        )}
      >
        {IconComp}
      </div>
      <div
        className={cn(
          "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
          cornerStarVariants(),
        )}
      >
        {IconComp}
      </div>
      <div
        className={cn(
          "top-0 right-0 translate-x-1/2 -translate-y-1/2",
          cornerStarVariants(),
        )}
      >
        {IconComp}
      </div>
      <div
        className={cn(
          "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
          cornerStarVariants(),
        )}
      >
        {IconComp}
      </div>
    </>
  );
}

function Title({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["60%", "0%"]);

  const Icon = <IconSparkles2Filled className="text-brand-6 md:size-8" />;

  return (
    <motion.div
      className=" flex items-center gap-6 mx-auto w-max"
      // style={{ scale, translateY }}
    >
      <span>{Icon}</span>
      <motion.h3 className="text-6xl text-white text-center">
        {/* About <span className="text-brand-6 font-medium">Mark Media</span> */}
        <TextAnimate animation="blurInUp" duration={0.5}>
          Our Clients
        </TextAnimate>
      </motion.h3>
      <span className="-scale-x-100">{Icon}</span>
    </motion.div>
  );
}
