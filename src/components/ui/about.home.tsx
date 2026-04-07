import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CTAButton } from "./cta.button";
import { Section } from "./section";
import { SectionTitle } from "./section-title";
import { TextAnimate } from "./text-animated";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <Section
      className="relative px-2 sm:px-8 min-h-[150vh] bg-background text-foreground z-10"
      ref={containerRef}
    >
      {/* Video Background */}

      {/* Video Background */}
      {/* Title */}
      {/* End Title */}
      {/* Content */}

      <motion.div
        className="sticky top-1/2 -translate-y-1/2 left-0 right-0 space-y-4 text-center sm:text-start"
        style={{
          opacity,
        }}
      >
        <SectionTitle
          subheadline="About Us"
          className="text-center sm:text-start mx-auto"
        >
          Strategic Growth Partners
        </SectionTitle>
        <div
          className="text-base sm:text-2xl font-medium sm:font-normal leading-relaxed mx-auto space-y-4"
          data-block="contain"
        >
          <TextAnimate className="" duration={0.8} animation="blurInUp">
            At The Mark Media, our goal is to strategize, ease, and optimize
            your sales through intelligent planning.
          </TextAnimate>
          <TextAnimate delay={0.8} duration={0.8} animation="blurInUp">
            We believe in building lasting relationships with your audience,
            focusing on genuine brand loyalty over pure advertisements.
          </TextAnimate>

          {/* CTA */}
          <div className="hidden sm:flex items-center justify-center sm:justify-start gap-3 md:mt-16">
            <CTAButton>Learn About Us</CTAButton>
          </div>
          {/* End Cta */}
        </div>
      </motion.div>
      {/* End Content */}
    </Section>
  );
}
