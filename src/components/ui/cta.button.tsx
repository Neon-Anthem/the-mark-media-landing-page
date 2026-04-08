"use client";

import { cn } from "@/lib/utils";
import { contactFormOpen } from "@/store/contact-store";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import { useSetAtom } from "jotai";
import { motion, Transition } from "motion/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";

const ctaButtonVariants = cva("flex items-center font-medium", {
  variants: {
    variant: {
      default:
        "bg-linear-90 from-secondary to-foreground text-secondary-foreground",
      primary:
        "bg-linear-135 from-primary/30 to-background text-foreground outline outline-primary/40 [&>span]:bg-primary [&>span]:text-background",
    },
    mode: { default: "", rounded: "rounded-full [&>span]:rounded-full" },
    size: {
      base: "px-2 py-1 gap-4 text-xl",
      small: "px-2 py-0.5 gap-3 text-base [&>span]:-mr-1.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    mode: "default",
    size: "base",
  },
});

export function CTAButton({
  children,
  className,
  variant,
  mode,
  size,
  iconMode = "plain",
  href,
}: PropsWithChildren & {
  className?: string;
  iconMode?: "plain" | "tiled";
  href?: string;
} & VariantProps<typeof ctaButtonVariants>) {
  const redirect = useRouter();
  const [controls, setControls] = useState<"initial" | "animate">("initial");

  const transitions: Transition = {
    type: "spring",
    duration: 0.6,
  };

  const activate = () => {
    setControls("animate");
  };
  const deactivate = () => {
    setControls("initial");
  };

  const setIsOpen = useSetAtom(contactFormOpen);

  return (
    <motion.button
      onClick={() => {
        if (href) {
          redirect.push(href);
        } else {
          setIsOpen(true);
        }
      }}
      onHoverStart={activate}
      onHoverEnd={deactivate}
      onFocus={activate}
      onBlur={deactivate}
      className={cn(
        "group text-nowrap",
        ctaButtonVariants({ className, mode, variant, size }),
      )}
    >
      {children ? children : "Book a call"}
      <motion.span className="bg-background text-foreground -mr-1 *:size-4 overflow-hidden">
        <div className="flex items-center m-2 *:-translate-x-1">
          <motion.div
            className="flex items-center justify-center"
            transition={transitions}
            variants={{
              initial: {
                translateX: -40,
                translateY: iconMode === "tiled" ? 40 : 0,
              },
              animate: {
                translateX: 0,
              },
            }}
            animate={controls}
          >
            {iconMode === "plain" ? <IconArrowRight /> : <IconArrowUpRight />}
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            animate={controls}
            transition={transitions}
            variants={{
              initial: {
                translateX: "-100%",
              },
              animate: {
                translateX: 0,
                translateY: iconMode === "tiled" ? -40 : 0,
              },
            }}
          >
            {iconMode === "plain" ? <IconArrowRight /> : <IconArrowUpRight />}
          </motion.div>
        </div>
      </motion.span>
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
