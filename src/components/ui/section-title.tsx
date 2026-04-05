import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function SectionTitle({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className="w-full text-start" data-block="contain">
      <h3
        className={cn("text-3xl sm:text-7xl uppercase font-medium", className)}
      >
        {children}
      </h3>
    </div>
  );
}

export { SectionTitle };
