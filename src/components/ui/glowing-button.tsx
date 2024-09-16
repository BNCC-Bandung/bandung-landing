import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function GlowingButton({
  children,
  href,
  className,
  disabled = false,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
}) {
  const classes = cn(
    "group relative inline-flex w-fit ${className}",
    "text-foreground w-full rounded-2xl z-20 bg-gradient-to-r from-[#65E0E9] to-[#A269FF] p-6 py-7 text-xl font-bold",
    className,
    disabled && "cursor-default",
  );
  return (
    <div className="group relative inline-flex w-fit">
      {disabled ? (
        <Button className={classes}>{children}</Button>
      ) : (
        <Link className="z-20 w-full" href={href ?? "#"}>
          <Button className={classes}>{children}</Button>
        </Link>
      )}
      <div className="animate-tilt absolute inset-0 rounded-xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
    </div>
  );
}
