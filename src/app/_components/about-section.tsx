import { Accent } from "@/components/accent";
import { SectionTitle } from "@/components/section-title";
import { GlowingButton } from "@/components/ui/glowing-button";
import Image from "next/image";

export const AboutSection: React.FC = () => (
  <section
    id="about"
    className="relative top-0 flex h-fit w-full justify-center py-20 lg:min-h-screen"
  >
    <div className="mx-auto grid w-10/12 max-w-7xl grid-cols-1 content-center justify-items-center gap-10 lg:grid-cols-2 [&>*]:z-10">
      <Image
        src="/about-us/bg-1.svg"
        alt="About Us"
        width={500}
        height={500}
        className="absolute -top-28 z-20 w-full"
      />
      <div className="flex w-full flex-col gap-8">
        <SectionTitle>
          Who Are <Accent>We?</Accent>
        </SectionTitle>
        <p className="text-base font-light lg:text-xl">
          Bina Nusantara Computer Club is a{" "}
          <span className="font-bold">computer-based organization</span> in
          Binus University and we are a family of excellent youth who works
          passionately and professionally.
          <br />
          <br />
          BNCC educating others in computer and organizational knowledge, having
          technology products such as{" "}
          <span className="font-bold">
            software house and online media, doing technology research, and
            creating technology communities
          </span>{" "}
          inside and outside the university.
        </p>
        <GlowingButton href="/contact" className="text-md w-fit p-6">
          Contact Us
        </GlowingButton>
      </div>
      <div className="relative hidden w-full max-w-[500px] lg:block">
        <div className="shadow-custom-shadow absolute bottom-[30%] right-10 w-full -rotate-6 rounded-xl bg-white/15 p-3 backdrop-blur-lg">
          <Image
            src="/about-us/image-1.png"
            alt="About Us"
            width={500}
            height={300}
            className="aspect-video rounded-xl bg-white/10 object-cover"
          />
        </div>

        <div className="shadow-custom-shadow absolute left-24 top-[70%] w-full rotate-6 rounded-xl bg-white/15 p-3 backdrop-blur-lg">
          <Image
            src="/about-us/image-2.png"
            alt="About Us"
            width={500}
            height={300}
            className="aspect-video rounded-xl bg-white/10 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
