"use client";

import { cn } from "@/lib/utils";
import { footerTextAtom } from "@/store/footer-text-atom";
import { cva } from "class-variance-authority";
import { useAtomValue } from "jotai";

const textClass = cva(
  " font-title text-6xl sm:text-[6rem] md:text-[10rem] lg:text-[13rem] xl:text-[20rem] font-extrabold leading-none text-center select-none",
  //   "text-8xl font-title md:text-[20rem] font-extrabold leading-none text-center select-none opacity-30",
  {
    variants: {
      variant: {
        outline: "text-transparent opacity-50",
        masked: "text-white",
      },
    },
  },
);

export default function TextMaskSection() {
  const displayText = useAtomValue(footerTextAtom);

  return (
    <section className="relative w-full h-[30vh]">
      {/* Step 2: LAYER 1 - The Knockout Mask (Bottom)
          This is exactly what we had before. It creates the transparent window. */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black mix-blend-multiply z-10",
        )}
      >
        {/* The text must be white to create the cutout */}
        <h1 className={cn("", textClass({ variant: "masked" }))}>
          {displayText}
        </h1>
      </div>

      {/* Step 3: LAYER 2 - The Outline (Top)
          This layer sits exactly on top. pointer-events-none ensures it doesn't block clicks. */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        {/* - text-transparent: Hides the inner fill of the text so we can see through it.
          - [-webkit-text-stroke:2px_white]: Tailwind arbitrary value to draw a 2px white outline. 
            You can change 'white' to a hex code like '#ff0000' or any other color!
        */}
        <h1
          className={cn("", textClass({ variant: "outline" }))}
          style={{
            WebkitTextStroke: "1px var(--brand-6)",
          }}
        >
          {displayText}
        </h1>
      </div>
    </section>
  );
}
