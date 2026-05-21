import { Accent } from "@/components/accent";
import { GlowingButton } from "@/components/ui/glowing-button";
import { DivisionData, type DivisionKeys } from "./data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { OurStructure } from "@/components/our-structure";
import { DivisionSelection } from "../page";

export default async function Home({ params }: { params: { id: string } }) {
  if (!(params.id in DivisionData.divisions)) {
    return notFound();
  }

  const division = DivisionData.get(params.id as DivisionKeys);

  return (
    <div className="bg-custom-gradient relative z-10 flex min-h-screen w-full flex-col overflow-hidden pb-[100px]">
      <Image
        src="/divisions/bg.svg"
        alt="About Us"
        width={500}
        height={500}
        className="absolute z-0 w-full"
      />

      <section
        id="about"
        className="relative top-0 flex h-fit w-full justify-center py-24 lg:min-h-screen"
      >
        <div className="mx-auto grid w-10/12 max-w-7xl grid-cols-1 content-center justify-items-center gap-10 lg:grid-cols-2 [&>*]:z-10">
          <div className="flex w-full flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src={division.image}
                alt={division.title}
                width={500}
                height={500}
                className="size-16 md:size-20"
              />
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                <Accent>{division.title.split(" ")[0]}</Accent>
                <br />
                {division.title.split(" ").slice(1).join(" ")}
              </h1>
            </div>

            <p className="font-sans text-base font-light text-white/90 md:text-xl">
              {division.description}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-5">
              <GlowingButton disabled className="text-md p-5 md:p-6">
                Creativity
              </GlowingButton>
              <GlowingButton disabled className="text-md p-5 md:p-6">
                Communication
              </GlowingButton>
              <GlowingButton disabled className="text-md p-5 md:p-6">
                Social Media
              </GlowingButton>
            </div>
          </div>

          <div className="relative hidden w-full max-w-[500px] lg:block">
            <div className="shadow-custom-shadow absolute bottom-[40%] right-10 w-full rotate-6 rounded-xl bg-white/15 p-3 backdrop-blur-lg">
              <Image
                src={division.card_image[0] ?? "/divisions/pr/hero-1.png"}
                alt="About Us"
                width={500}
                height={300}
                className="aspect-video rounded-xl bg-white/10 object-cover"
              />
            </div>

            <div className="shadow-custom-shadow absolute left-24 top-[50%] w-full -rotate-6 rounded-xl bg-white/15 p-3 backdrop-blur-lg">
              <Image
                src={division.card_image[1] ?? "/divisions/pr/hero-2.png"}
                alt="About Us"
                width={500}
                height={300}
                className="aspect-video rounded-xl bg-white/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-structure"
        className="relative top-0 flex h-fit w-full justify-center py-[100px]"
      >
        {/* <Image
          src="/our-structure/bg.svg"
          alt="About Us"
          width={500}
          height={500}
          className="absolute top-[-200px] z-0 w-full"
        /> */}
        <div className="mx-auto flex w-10/12 max-w-7xl flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Our <Accent>Structure</Accent>
          </h1>

          <OurStructure gridItems={division.structure} />
        </div>
      </section>

      <section
        id="our-events"
        className="relative top-0 flex h-fit w-full justify-center pt-[100px] md:pt-[200px]"
      >
        <div className="mx-auto flex w-10/12 max-w-7xl flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {division.title} <Accent>Events</Accent>
          </h1>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {division.events.map((event, i) => (
              <div
                key={i}
                className="shadow-custom-shadow relative flex flex-col gap-4 rounded-xl bg-white/5 p-6 font-sans text-white backdrop-blur-lg"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#65E0E9] to-[#3E47BE] opacity-75 blur" />

                  <div className="relative">
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={200}
                      height={150}
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{event.name}</h2>
                    <span className="text-lg font-semibold">{event.year}</span>
                  </div>
                  <p className="text-justify font-light">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <GlowingButton className="text-md p-6">View More</GlowingButton>
        </div>
      </section>

      <DivisionSelection />
    </div>
  );
}
