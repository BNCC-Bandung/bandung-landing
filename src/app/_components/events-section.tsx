"use client";
import { Accent } from "@/components/accent";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { GlowingButton } from "@/components/ui/glowing-button";
import Image from "next/image";
import events from "../../../public/our-events/dummy_data/events.json";
import { useState } from "react";

export const EventsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  return (
    <section
      id="our-events"
      className="relative top-0 flex h-fit w-full justify-center bg-black/20 py-[200px]"
    >
      <Image
        src="/our-events/bg.svg"
        alt="Events Background"
        width={500}
        height={500}
        className="absolute top-[-400px] z-0 w-full"
      />
      <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
        <SectionTitle>
          Our <Accent>Events</Accent>
        </SectionTitle>
        <div className="grid grid-cols-3 gap-10">
          {events.slice(0, visibleCount).map((event, i) => (
            <ProjectCard
              key={event.id}
              imageIndex={i + 1}
              title={event.title}
              year={event.year}
              description={
                event.description.split(" ").slice(0, 20).join(" ") +
                (event.description.split(" ").length > 20 ? "..." : "")
              }
            />
          ))}
        </div>
        {visibleCount < events.length && (
          <GlowingButton
            disabled
            className="text-md p-6"
            onClick={handleViewMore}
          >
            View More
          </GlowingButton>
        )}
      </div>
    </section>
  );
};
