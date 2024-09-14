import { cn } from "@/lib/utils";
import { Krona_One } from "next/font/google";
import React from "react";

const font = Krona_One({
  subsets: ["latin"],
  weight: "400",
});

export const Title = React.forwardRef<
  HTMLHeadingElement,
  {
    children: React.ReactNode;
    className?: string;
  }
>(({ children, className }, ref) => {
  return (
    <h1 ref={ref} className={cn(`${font.className} ${className}`)}>
      {children}
    </h1>
  );
});

Title.displayName = "Title";
