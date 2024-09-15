import { Accent } from "@/components/accent";
import { OurStructure } from "@/components/homepage/our-structure";
import { ParallaxHomepage } from "@/components/parallax-homepage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <ParallaxHomepage />

      <div className="bg-custom-gradient h-fit space-y-28 overflow-hidden">
        <section
          id="about"
          className="relative top-0 flex min-h-screen w-full justify-center"
        >
          <div className="container grid grid-cols-2 content-center justify-items-center [&>*]:z-10">
            <Image
              src="/about-us/bg-1.svg"
              alt="About Us"
              width={500}
              height={500}
              className="absolute -top-28 z-20 w-full"
            />
            <div className="flex flex-col gap-10">
              <h1 className="text-5xl font-bold text-white">
                Who Are <Accent>We?</Accent>
              </h1>
              <p className="text-xl font-light">
                Bina Nusantara Computer Club is a{" "}
                <span className="font-bold">computer-based organization</span>{" "}
                in Binus University and we are a family of excellent youth who
                works passionately and professionally.
                <br />
                <br />
                BNCC educating others in computer and organizational knowledge,
                having technology products such as{" "}
                <span className="font-bold">
                  software house and online media, doing technology research,
                  and creating technology communities
                </span>{" "}
                inside and outside the university.
              </p>

              <div className="group relative inline-flex w-[200px]">
                <Link className="z-20 w-full" href="/contact">
                  <Button className="text-foreground w-full rounded-2xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] p-6 py-7 text-xl font-bold">
                    Contact Us
                  </Button>
                </Link>
                <div className="animate-tilt absolute inset-0 rounded-xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
              </div>
            </div>

            <div className="relative w-[500px]">
              <Image
                src="/about-us/image-1.png"
                alt="About Us"
                width={500}
                height={300}
                className="absolute bottom-[40%] right-10 z-20 -rotate-3 rounded-xl bg-white/10 p-3 drop-shadow-lg backdrop-blur-lg"
              />

              <Image
                src="/about-us/image-2.png"
                alt="About Us"
                width={500}
                height={300}
                className="absolute left-10 top-[60%] rotate-3 rounded-xl bg-white/10 p-3 drop-shadow-lg backdrop-blur-lg"
              />
            </div>
          </div>
        </section>

        <section
          id="our-vision"
          className="relative top-0 flex h-fit w-full justify-center"
        >
          <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
            <h1 className="text-5xl font-bold text-white">
              Our <Accent>Vision</Accent>
            </h1>

            <div className="shadow-custom-shadow rounded-xl bg-white/5 p-10 backdrop-blur-lg">
              <p className="text-balance text-center text-xl font-light">
                An organization of technology enthusiasts that pursues
                <br />
                technological achievements and services for Indonesian society.
              </p>
            </div>
          </div>
        </section>

        <section
          id="our-mission"
          className="relative top-0 flex h-fit w-full justify-center"
        >
          <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
            <h1 className="text-5xl font-bold text-white">
              Our <Accent>Mission</Accent>
            </h1>

            <div className="grid grid-cols-3 gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="shadow-custom-shadow flex items-center justify-center rounded-xl p-10 px-20"
                >
                  <Image
                    src={`/our-mission/${i + 1}.svg`}
                    alt="Mission"
                    width={50}
                    height={50}
                    className="size-[50px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="separator"
          className="relative top-0 flex h-fit w-full justify-center"
        >
          <Image
            src="/homepage/separator.svg"
            width={1920}
            height={1080}
            className="absolute w-full -rotate-2 scale-110 object-contain"
            alt="Separator"
          />
          <Image
            src="/our-project/bg.svg"
            alt="About Us"
            width={500}
            height={500}
            className="absolute z-0 w-full"
          />
        </section>

        <section
          id="our-project"
          className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
        >
          <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
            <h1 className="text-5xl font-bold text-white">
              Our <Accent>Projects</Accent>
            </h1>

            <div className="grid grid-cols-3 gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
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

            <div className="group relative inline-flex w-[200px]">
              <Link className="z-20 w-full" href="/contact">
                <Button className="text-foreground w-full rounded-2xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] p-6 py-7 text-xl font-bold">
                  View More
                </Button>
              </Link>
              <div className="animate-tilt absolute inset-0 rounded-xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
            </div>
          </div>
        </section>

        <section
          id="our-project"
          className="relative top-0 flex h-fit w-full justify-center bg-black/20 py-[200px]"
        >
          <Image
            src="/our-events/bg.svg"
            alt="About Us"
            width={500}
            height={500}
            className="absolute top-[-400px] z-0 w-full"
          />
          <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
            <h1 className="text-5xl font-bold text-white">
              Our <Accent>Events</Accent>
            </h1>

            <div className="grid grid-cols-3 gap-10">
              {Array.from({ length: 3 }).map((_, i) => (
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
                      <h2 className="text-2xl font-bold">Event Name</h2>
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

            <div className="group relative inline-flex w-[200px]">
              <Link className="z-20 w-full" href="/contact">
                <Button className="text-foreground w-full rounded-2xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] p-6 py-7 text-xl font-bold">
                  View More
                </Button>
              </Link>
              <div className="animate-tilt absolute inset-0 rounded-xl bg-gradient-to-r from-[#65E0E9] to-[#A269FF] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
            </div>
          </div>
        </section>

        <section
          id="our-project"
          className="relative top-0 flex h-fit w-full justify-center py-[100px]"
        >
          <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
            <h1 className="text-5xl font-bold text-white">
              Our <Accent>Divisions</Accent>
            </h1>

            <div className="flex items-center justify-center gap-20 py-10">
              {Array.from({ length: 5 }).map((_, i) => {
                const div_name = ["PR", "EEO", "LnT", "RnD", "HrD"];

                return (
                  <div key={i} className="flex flex-col items-center">
                    <Image
                      src={`/our-divisions/${i + 1}.svg`}
                      alt="Division"
                      width={200}
                      height={200}
                      className="size-[80px]"
                    />
                    <h2 className="text-2xl font-bold">{div_name[i]}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="our-project"
          className="relative top-0 flex h-fit w-full justify-center py-[100px]"
        >
          <Image
            src="/our-structure/bg.svg"
            alt="About Us"
            width={500}
            height={500}
            className="absolute top-[-200px] z-0 w-full"
          />
          <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
            <h1 className="text-5xl font-bold text-white">
              Our <Accent>Structure</Accent>
            </h1>

            <OurStructure />
          </div>
        </section>
      </div>
    </>
  );
}
