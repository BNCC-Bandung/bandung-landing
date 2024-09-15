import { Accent } from "@/components/accent";
import { CarouselDemo } from "@/components/carousel-demo";
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
        className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
      >
        <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Discover <Accent>More</Accent> Projects
          </h1>
        </div>
      </section>
    </div>
  );
}
