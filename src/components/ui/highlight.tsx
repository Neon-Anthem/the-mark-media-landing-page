import { motion } from "motion/react";
import { PropsWithChildren } from "react";

export default function PanHighlightAnimation({ children }: PropsWithChildren) {
  return (
    <motion.span className="w-fit relative bg-red-500">{children}</motion.span>
  );
}
