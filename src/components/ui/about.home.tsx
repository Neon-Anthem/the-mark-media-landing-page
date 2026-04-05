import { IconArrowUpRight } from "@tabler/icons-react";
import { useRef } from "react";
import Button from "./button";
import CurvedLoop from "./curved-loop";
import { SectionTitle } from "./section-title";
import { TextAnimate } from "./text-animated";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-background" ref={containerRef}>
      {/* Video Background */}

      {/* Video Background */}
      {/* Title */}
      {/* End Title */}
      {/* Content */}

      <div className="space-y-4 text-center sm:text-start">
        <SectionTitle className="sm:w-[70%] text-center sm:text-start mx-auto">
          About Us
        </SectionTitle>
        <div className="" data-block="contain">
          <TextAnimate
            className="text-base sm:text-2xl text-foreground/90 font-medium leading-relaxed w-[70%] sm:w-[70%] mx-auto"
            duration={3}
            animation="blurInUp"
          >
            At The Mark Media, our goal isn&apos;t just to provide
            services—it&apos;s to strategize, ease, and optimize your sales
            through intelligent planning. We believe in building lasting
            relationships with your audience, focusing on genuine brand loyalty
            over pure advertisements.
          </TextAnimate>

          <div className="flex items-center justify-center gap-3 md:mt-16">
            <Button icon={<IconArrowUpRight className="text-black" />}>
              Connect With Us
            </Button>
          </div>
        </div>

        <div className="overflow-hidden absolute bottom-0 left-0 right-0 h-10">
          <CurvedLoop
            marqueeText="The ✦ Mark ✦ Media ✦"
            curveAmount={0}
            interactive={false}
            className="mix-blend-difference bg-blue-500 h-fit"
          />
        </div>
      </div>
      {/* End Content */}
    </section>
  );
}
