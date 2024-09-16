import { Accent } from "@/components/accent";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";

export const MissionSection: React.FC = () => (
  <section
    id="our-mission"
    className="relative top-0 flex h-fit w-full justify-center"
  >
    <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
      <SectionTitle>
        Our <Accent>Mission</Accent>
      </SectionTitle>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="shadow-custom-shadow flex items-center justify-center rounded-xl p-10 px-20"
          >
            <Image
              src={`/our-mission/${i + 1}.svg`}
              alt={`Mission ${i + 1}`}
              width={50}
              height={50}
              className="size-[50px]"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
