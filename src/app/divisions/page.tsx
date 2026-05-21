import { Accent } from "@/components/accent";
import { OurStructure } from "@/components/our-structure";

import Image from "next/image";
import Link from "next/link";
import { DivisionData } from "./[id]/data";

export default async function Home() {
  return (
    <div className="bg-custom-gradient relative z-10 flex min-h-screen w-full flex-col overflow-hidden">
      <Image
        src="/divisions/bg.svg"
        alt="About Us"
        width={500}
        height={500}
        className="absolute z-0 w-full"
      />

      <DivisionSelection />

      <section
        id="our-divisions-structure"
        className="relative top-0 flex h-fit w-full justify-center py-[100px]"
      >
        <div className="mx-auto flex w-10/12 max-w-7xl flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            See Our <Accent>Structure</Accent>
          </h1>

          <OurStructure gridItems={DivisionData.getStructure()} />
        </div>
      </section>
    </div>
  );
}

export function DivisionSelection({ text = "See Our" }: { text?: string }) {
  return (
    <section
      id="our-divisions"
      className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
    >
      <div className="mx-auto flex w-10/12 max-w-7xl flex-col items-center gap-10 [&>*]:z-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {text} <Accent>Divisions</Accent>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-6 py-10 md:gap-12 lg:gap-20">
          {Array.from({ length: 5 }).map((_, i) => {
            const div_name = ["PR", "EEO", "LnT", "RnD", "HrD"];

            return (
              <Link
                key={i}
                href={`/divisions/${div_name[i]?.toLocaleLowerCase()}`}
              >
                <div className="shadow-custom-shadow flex cursor-pointer flex-col items-center rounded-2xl bg-white/15 p-6 font-sans text-white backdrop-blur-lg transition-transform hover:scale-[1.03] active:scale-[0.97] md:p-10">
                  <Image
                    src={`/our-divisions/${i + 1}.svg`}
                    alt="Division"
                    width={200}
                    height={200}
                    className="size-[80px]"
                  />
                  <h2 className="text-2xl font-bold">{div_name[i]}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
