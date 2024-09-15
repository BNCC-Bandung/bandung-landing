import { Accent } from "@/components/accent";
import { CarouselDemo } from "@/components/carousel-demo";
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
              <div
                key={i}
                className="shadow-custom-shadow relative flex flex-col gap-4 rounded-xl bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#65E0E9] to-[#3E47BE] opacity-75 blur" />

                  <div className="relative">
                    <Image
                      src={`/our-project/${i + 1}.png`}
                      alt="Mission"
                      width={200}
                      height={150}
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Project Name</h2>
                    <span className="text-lg font-semibold">2021</span>
                  </div>
                  <p className="text-justify font-light">
                    Lorem ipsum dolor sit amet consectetur. At enim mauris
                    commodo ultricies. Erat sagittis semper dignissim tortor
                    tellus amet ante habitant.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <GlowingButton href="/projects">View All Projects</GlowingButton>
        </div>
      </section>
    </div>
  );
}
