import { Accent } from "@/components/accent";
import { ParallaxHomepage } from "@/components/parallax-homepage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <ParallaxHomepage />

      <div className="bg-custom-gradient h-[600vh] space-y-28">
        <section
          id="about"
          className="relative top-0 flex min-h-screen w-full justify-center"
        >
          <div className="container grid grid-cols-2 content-center justify-items-center [&>*]:z-10">
            {/* <div
              className="absolute h-[200vh] min-h-screen w-full"
              style={{
                backgroundImage: "url('/about-us/bg-1.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            /> */}
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
                <div className="shadow-custom-shadow flex items-center justify-center rounded-xl p-10 px-20">
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
      </div>
    </>
  );
}
