"use client";

import { cn } from "@/lib/utils";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

export function CTAButton({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      className={cn(
        "flex items-center text-secondary-foreground font-medium text-lg gap-4 bg-linear-90 from-secondary to-foreground px-2 py-1",
        className,
      )}
    >
      {children ? children : "Book a call"}
      <span className="bg-background text-foreground p-2 -mr-1">
        <IconArrowRight className="size-4" />
      </span>
    </motion.button>
  );

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      className={cn(
        "rounded-full px-4 py-2 -my-0.5 font-medium flex items-center gap-4 text-sm bg-black text-accent ring ring-primary isolate mix-blend-difference",
        className,
      )}
    >
      {children}
      <span className="bg-primary rounded-full -m-1 p-1 -mr-2.5 [&>svg]:size-4 *:text-background">
        <IconArrowUpRight />
      </span>
    </motion.button>
  );
}
