import { IProcess, PROCESS } from "@/data/process";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Section } from "./section";
import { SectionTitle } from "./section-title";
import { TextAnimate } from "./text-animated";

export default function ProcessHomeSection() {
  return (
    <Section className="relative min-h-[200vh] border-y border-primary/40">
      <div className="sticky top-20 z-50">
        {/* Title */}
        <SectionTitle subheadline="Our Process" className="">
          3-Step Process
        </SectionTitle>
        {/* End Title */}

        {/* Content */}

        <ProcessGroup className="z-20 mt-16 sm:mt-32">
          {PROCESS?.map((item, index) => {
            return <ProcessCard {...item} index={index} key={index} />;
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
      <div className="-z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-[0.5px] bg-primary/40"></div>
      {/* <span
        className={cn("z-50 h-max w-max opacity-80", {
          "translate-y-[500%]": index === 0,
          "translate-y-[800%]": index === 1,
          "translate-y-[300%]": index === 2,
        })}
      >
        Measaurable
      </span> */}
      {/* <Image
        src={src}
        alt=""
        width={500}
        height={500}
        className={cn("size-48 object-cover z-50 opacity-70", {
          "translate-y-[500%]": index === 0,
          "translate-y-[800%]": index === 1,
          "translate-y-[300%]": index === 2,
        })}
      /> */}
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
  tag,
  index,
  hasTag,
}: PropsWithChildren & {
  className?: string;
  tag: string;
  index: number;
  hasTag?: boolean;
}) {
  return (
    <div className="flex items-center -ml-6">
      {/* Tab */}
      <div className="relative w-16 sm:w-20 text-center text-base font-medium font-mono">
        <div className="-rotate-90 w-21 sm:w-28 text-foreground">
          <div className="bg-linear-90 from-primary/30 to-primary/40">
            {hasTag ? tag : <>Step {index + 1}</>}
          </div>
        </div>
      </div>
      {/* Tab */}
      <div
        className={cn(
          "p-px sm:p-1 w-full bg-linear-90 from-primary to-background z-20",
          className,
        )}
      >
        <div className="p-2 bg-background">{children}</div>
      </div>
    </div>
  );
}

function ProcessCard({ index, ...item }: IProcess & { index: number }) {
  return (
    <ProcessCardRoot className="" tag={item.tag} index={index} hasTag>
      <div className="space-y-4">
        <span className="text-xl sm:text-3xl md:text-6xl uppercase font-medium">
          <TextAnimate animation="blurInUp" by="text">
            {item.heading}
          </TextAnimate>
        </span>
        <div className="font-medium tracking-wide text-foreground/70 text-sm sm:text-base md:text-lg">
          <TextAnimate animation="blurInUp">{item.description}</TextAnimate>
        </div>
      </div>
    </ProcessCardRoot>
  );
}
