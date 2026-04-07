import DifferenceBetween from "@/components/blocks/difference-between";
import { CTAButton } from "@/components/ui/cta.button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

export default function AboutPage() {
  return (
    <Section className="pt-24">
      <SectionTitle>About Us</SectionTitle>
      <div className="" data-block="contain">
        {/* About */}
        <div>
          <p className="text-center sm:text-start">
            The Mark media works as your partner in marketing. Our approach
            differs from rest of the agencies, we strategize not work, we
            position not place, we align not supply
          </p>
        </div>
        {/* About End */}

        {/*  */}
        <div className="mt-8 sm:mt-16">
          <div className="my-2">
            <h3 className="text-2xl md:text-4xl capitalize text-center sm:text-start">
              What <span className="text-secondary">differenciates</span> us
              from the <span className="">Rest</span>
            </h3>
          </div>

          <DifferenceBetween />

          <div className="my-4 w-max mx-auto sm:mx-0">
            <CTAButton>Want to work with us</CTAButton>
          </div>
        </div>
        {/*  */}
      </div>
    </Section>
  );
}
