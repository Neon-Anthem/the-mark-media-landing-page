import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import Image from "next/image";

export default function CaseStudySlugPage() {
  return (
    <Section className="pt-32 min-h-screen">
      <SectionTitle>Sephora</SectionTitle>

      <div className="relative h-full text-justify">
        <div
          className="grid grid-rows-2 grid-cols-none md:grid-rows-none md:grid-cols-2 h-full gap-4"
          data-block="contain"
        >
          {/* Image */}
          <div className="sticky top-0 h-full">
            <div className="relative h-max outline outline-primary/60 rounded-2xl space-y-4">
              {/* Fade */}
              <div className="h-full rounded-[inherit] absolute top-0 left-0 right-0 bottom-0 bg-linear-0 to-transparent from-black"></div>
              {/* End Fade */}
              <Image
                src="/assets/bastian/1.jpg"
                alt="case study image"
                width={600}
                height={600}
                className="rounded-[inherit]"
              />
            </div>
            {/* Tag */}
            <div className="mt-4">
              <span className="bg-background border-[0.5px] border-primary font-medium px-3 text-sm py-1">
                Campaign Based Marketing
              </span>
            </div>
            {/* end tag */}
          </div>
          {/* End Image */}

          {/* Content */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-4xl text-center md:text-start">
              High converting Landing pages
            </h4>
            <p className="text-accent/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores minima ipsam excepturi praesentium, error nam delectus?
              Earum sint, ab architecto neque sed aperiam sequi inventore fuga
              assumenda dolorum dignissimos, quo nostrum, repudiandae
              repellendus voluptates ipsa libero voluptatum consequuntur.
            </p>
          </div>
          {/* End Content */}
        </div>
      </div>
    </Section>
  );
}
