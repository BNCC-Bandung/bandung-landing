import Link from "next/link";
import { Button } from "./button";

export function GlowingButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className="group relative inline-flex w-fit">
      <Link className="z-20 w-full" href={href}>
        <Button className="text-foreground w-full rounded-2xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] p-6 py-7 text-xl font-bold">
          {children}
        </Button>
      </Link>
      <div className="animate-tilt absolute inset-0 rounded-xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
    </div>
  );
}
