import { cn } from "@/lib/utils";
import { PropsWithChildren, Ref } from "react";

function Section({
  children,
  ref,
  className,
}: PropsWithChildren & {
  className?: string;
  ref?: Ref<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={ref}
      className={cn(
        "**:data-[block=contain]:container **:data-[block=contain]:mx-auto py-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

export { Section };
