import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function ContactFooter() {
  return (
    <section className="w-full flex items-center justify-center bg-black py-38">
      <div className="flex items-center justify-center w-full container">
        <h3 className="text-white/80 md:text-4xl font-title font-bold">
          <span className="text-brand-6 italic">&quot;</span> The Art of{" "}
          <span className="text-brand-6 italic">Strategic</span> Marketing:
          Let&apos;s Create Your Masterpiece Together
          <span className="text-brand-6 italic">&quot;</span>
        </h3>
      </div>
    </section>
  );
}

function Block({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      className="relative w-full z-10 "
      initial="idle"
      whileHover="hover"
    >
      {/*  */}
      <div className="relative mix-blend-difference px-8 py-4 h-full w-full">
        <h2 className="text-white md:text-6xl font-medium">{title}</h2>

        {/*  */}
        <div className="absolute right-8 top-2">
          <button className="rounded-full p-4 ">
            <IconArrowUpRight className="text-black size-12" />
          </button>
        </div>
        {/*  */}
      </div>
    </motion.div>
  );
}
