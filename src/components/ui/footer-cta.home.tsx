import {
  IconArrowRight,
  IconChartDots2,
  IconCoin,
  IconSpeakerphone,
} from "@tabler/icons-react";
import Image from "next/image";
import { Section } from "./section";

export default function FooterCTASection() {
  return (
    <Section>
      <div className="w-[90%] mx-auto">
        {/* Outer Bg */}

        <div className="relative bg-radial-[at_25%_25%] from-primary to-brand-2 p-6 sm:p-12">
          {/* Icon Cloud */}
          <div className="absolute top-12 sm:top-16 sm:bottom-16 bottom-12 right-12 sm:right-16 space-y-3 sm:space-y-5 *:text-secondary *:size-6 sm:*:size-8 *:stroke-[1.3px]">
            <IconCoin />
            <IconChartDots2 />
            <IconSpeakerphone className="-rotate-35" />
          </div>
          {/* End Icon Cloud */}

          {/* Content */}
          <div className="w-full h-96 bg-background grid grid-rows-2 md:grid-rows-0 grid-cols-0 md:grid-cols-2 gap-2 *:p-2 md:*:p-4 xl:*:p-6">
            {/* Start */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-6xl xl:text-7xl w-[70%] sm:w-full">
                Looking to grow your{" "}
                <span className="text-secondary uppercase">marketing</span>{" "}
                returns?
              </h3>
              {/* CTA */}
              <button className="flex items-center text-secondary-foreground font-medium text-lg gap-4 bg-linear-90 from-secondary to-foreground px-2 py-1">
                Book a call
                <span className="bg-background text-foreground p-2 -mr-1">
                  <IconArrowRight className="size-4" />
                </span>
              </button>
              {/* End CTA */}
            </div>
            {/* End Start */}

            {/* End */}
            <div className="relative *:size-16 [&>img]:rounded-full [&>img]:object-cover">
              <Image
                src={"/assets/professional-photos/professional-women.jpg"}
                alt=""
                width={500}
                height={500}
                className="absolute rounded-none! rounded-r-2xl! top-[10%] sm:top-[40%] right-[45%] size-32! sm:size-52! object-[50%_20%]"
              />

              <Image
                src={"/assets/professional-photos/professional-man.jpg"}
                alt=""
                width={500}
                height={500}
                className="absolute top-[40%] sm:top-full right-[10%] sm:right-[20%] size-24! sm:size-36! object-[50%_10%]"
              />
            </div>
            {/* End End */}
          </div>
          {/* End Content */}
        </div>

        {/*  */}
      </div>
    </Section>
  );
}
