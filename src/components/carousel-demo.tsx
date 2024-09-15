"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-5xl">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="p-10">
              <div className="shadow-custom-shadow border-muted-foreground/30 rounded-xl border p-10">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#f3f4ed] to-[#5926b7] opacity-75 blur" />
                  <div className="relative">
                    <Image
                      src={`/our-project/${index + 1}.png`}
                      alt="Project"
                      width={1000}
                      height={800}
                      className="aspect-video w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`mx-1 inline-block size-2 rounded-full ${
              index === current - 1 ? "bg-primary" : "bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
