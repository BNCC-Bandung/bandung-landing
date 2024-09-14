import { cn } from "@/lib/utils";

export function Accent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        `${className} bg-gradient-to-r from-[#FFCCF7] to-[#A269FF] bg-clip-text text-transparent`,
      )}
    >
      {children}
    </span>
  );
}
