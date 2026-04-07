import DifferenceBetween from "@/components/blocks/difference-between";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

export default function AboutPage() {
  return (
    <Section className="pt-24">
      <SectionTitle>About Us</SectionTitle>
      <div className="" data-block="contain">
        {/* About */}
        <div>
          <p>
            The Mark media works as your partner in marketing. Our approach
            differs from rest of the agencies, we strategize not work, we
            position not place, we align not supply
          </p>
        </div>
        {/* About End */}

        {/*  */}
        <DifferenceBetween />
        {/*  */}
      </div>
    </Section>
  );
}
