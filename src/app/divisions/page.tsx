import { Accent } from "@/components/accent";
import { OurStructure } from "@/components/homepage/our-structure";

import Image from "next/image";
import Link from "next/link";

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
        <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
          <h1 className="text-5xl font-bold text-white">
            See Our <Accent>Structure</Accent>
          </h1>

          <OurStructure />
        </div>
      </section>
    </div>
  );
}

export function DivisionSelection() {
  return (
    <section
      id="our-divisions"
      className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
    >
      <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
        <h1 className="text-5xl font-bold text-white">
          See Our <Accent>Divisions</Accent>
        </h1>

        <div className="flex items-center justify-center gap-20 py-10">
          {Array.from({ length: 5 }).map((_, i) => {
            const div_name = ["PR", "EEO", "LnT", "RnD", "HrD"];

            return (
              <Link href={`/divisions/${div_name[i]?.toLocaleLowerCase()}`}>
                <div
                  key={i}
                  className="shadow-custom-shadow flex cursor-pointer flex-col items-center rounded-2xl bg-white/15 p-10 backdrop-blur-lg transition-transform hover:scale-[1.03] active:scale-[0.97]"
                >
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
