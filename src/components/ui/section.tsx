import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, Ref } from "react";

const sectionVariants = cva("bg-background", {
  variants: {
    variant: {
      default: "",
      heading: "sm:py-24 py-12",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Section({
  children,
  ref,
  className,
  variant,
}: PropsWithChildren & {
  className?: string;
  ref?: Ref<HTMLDivElement | null>;
} & VariantProps<typeof sectionVariants>) {
  return (
    <section
      ref={ref}
      className={cn(
        "**:data-[block=contain]:container **:data-[block=contain]:mx-auto py-8",
        sectionVariants({ className, variant }),
      )}
    >
      {children}
    </section>
  );
}

export { Section };
