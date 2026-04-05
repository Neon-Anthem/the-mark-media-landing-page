import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function Section({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <section
      className={cn(
        "**:data-[block=contain]:container **:data-[block=contain]:mx-auto",
        className,
      )}
    >
      {children}
    </section>
  );
}

export { Section };
