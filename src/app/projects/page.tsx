import { Accent } from "@/components/accent";
import { CarouselDemo } from "@/components/carousel-demo";
import { ProjectCard } from "@/components/project-card";
import { GlowingButton } from "@/components/ui/glowing-button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-custom-gradient relative z-10 flex min-h-screen w-full flex-col overflow-hidden">
      <Image
        src="/projects/bg.svg"
        alt="About Us"
        width={500}
        height={500}
        className="absolute z-0 w-full"
      />

      <section
        id="newest-project"
        className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
      >
        <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            <Accent>Newest</Accent> Projects
          </h1>

          <CarouselDemo />
        </div>
      </section>

      <section
        id="discover-project"
        className="relative top-0 flex h-fit w-full justify-center py-[200px]"
      >
        <div className="container flex w-full flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Discover <Accent>More</Accent> Projects
          </h1>

          {/* This is the part that you need to replace */}
          <div className="flex w-full flex-col items-center justify-center gap-10 py-10">
            <div className="shadow-custom-shadow flex w-2/3 items-center gap-5 rounded-xl bg-white/5 p-4 backdrop-blur-lg">
              <SearchIcon />
              <span className="text-white">Search Projects</span>
            </div>
            <div className="flex w-2/3 items-center justify-between gap-5">
              <span>All</span>
              <span>App Design</span>
              <span>UI/UX</span>
              <span>Website</span>
              <span>Mobile App</span>
              <span>Sort by: NEWEST</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {Array.from({ length: 9 }).map((_, i) => (
              <ProjectCard
                key={i}
                imageIndex={i + 1}
                title="Project Name"
                year="2021"
                description="Lorem ipsum dolor sit amet consectetur. At enim mauris commodo ultricies. Erat sagittis semper dignissim tortor tellus amet ante habitant."
              />
            ))}
          </div>

          <GlowingButton href="/projects">View All Projects</GlowingButton>
        </div>
      </section>
    </div>
  );
}
