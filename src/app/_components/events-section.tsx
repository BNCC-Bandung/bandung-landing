import { Accent } from "@/components/accent";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { GlowingButton } from "@/components/ui/glowing-button";
import Image from "next/image";

export const EventsSection: React.FC = () => (
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
        {Array.from({ length: 3 }).map((_, i) => (
          <ProjectCard
            key={i}
            imageIndex={i + 1}
            title="Event Name"
            year="2021"
            description="Lorem ipsum dolor sit amet consectetur. At enim mauris commodo ultricies. Erat sagittis semper dignissim tortor tellus amet ante habitant."
          />
        ))}
      </div>
      <GlowingButton disabled className="text-md p-6">
        View More
      </GlowingButton>
    </div>
  </section>
);
