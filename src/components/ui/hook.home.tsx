import { IProcess, PROCESS } from "@/data/process";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { Section } from "./section";
import { SectionTitle } from "./section-title";

export default function HookHomeSection() {
  return (
    <Section className="relative min-h-[300vh] sm:min-h-[200vh] border-y border-secondary">
      <div className="sticky top-20 z-50">
        {/* Title */}
        <SectionTitle className="text-secondary">3-Step Process</SectionTitle>
        {/* End Title */}

        {/* Content */}

        <ProcessGroup className="z-20 mt-16 sm:mt-32">
          {PROCESS?.map((item, index) => {
            return <ProcessCard {...item} key={index} />;
          })}
        </ProcessGroup>

        {/* End Content */}
      </div>
      {/*  */}
      <div className=""></div>
      <SecondaryComp />

      {/*  */}
    </Section>
  );
}

function SecondaryComp() {
  return (
    <div className="z-10 absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-center justify-around">
      {[
        "/assets/professional-photos/professional-man.jpg",
        "/assets/professional-photos/professional-man.jpg",
        "/assets/professional-photos/professional-man.jpg",
      ]?.map((src, index) => {
        return <SecondaryCompLine key={index} src={src} index={index} />;
      })}
    </div>
  );
}

function SecondaryCompLine({ src, index }: { src: string; index: number }) {
  return (
    <div className="relative h-full z-20">
      <div className="-z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-[0.5px] bg-secondary/40"></div>
      <Image
        src={src}
        alt=""
        width={500}
        height={500}
        className={cn("size-48 object-cover z-50 opacity-70", {
          "translate-y-[500%]": index === 0,
          "translate-y-[800%]": index === 1,
          "translate-y-[300%]": index === 2,
        })}
      />
    </div>
  );
}

function ProcessGroup({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn("space-y-6 sm:space-y-12 md:space-y-16", className)}
      data-block="contain"
    >
      {children}
    </div>
  );
}

function ProcessCardRoot({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className={cn("p-2 border bg-background z-20", className)}>
      {children}
    </div>
  );
}

function ProcessCard({ ...item }: IProcess) {
  return (
    <ProcessCardRoot className="">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-3xl md:text-6xl">{item.heading}</h2>
        <p className="ml-1 font-medium tracking-wide text-foreground/70">
          {item.description}
        </p>
      </div>
    </ProcessCardRoot>
  );
}
