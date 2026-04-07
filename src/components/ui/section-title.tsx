"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

function SectionTitle({
  children,
  subheadline,
  className,
}: PropsWithChildren & { className?: string; subheadline?: string }) {
  return (
    <div className={cn("w-full", className)} data-block="contain">
      {subheadline ? (
        <div className="mx-auto w-max sm:ml-2">
          <h6 className="w-max text-xs sm:text-base font-mono uppercase">
            {subheadline}
          </h6>
        </div>
      ) : null}
      <motion.h3
        initial={{
          translateY: 20,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
        }}
        className={cn(
          "mx-auto w-[90%] text-center sm:text-start sm:w-full sm:mx-0 text-4xl sm:text-7xl uppercase font-medium",
        )}
      >
        {children}
      </motion.h3>
    </div>
  );
}

export { SectionTitle };
