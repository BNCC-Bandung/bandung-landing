import { Accent } from "@/components/accent";
import { OurStructure } from "@/components/our-structure";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import { DivisionData } from "../divisions/[id]/data";

export const StructureSection: React.FC = () => (
  <section
    id="our-structure"
    className="relative top-0 flex h-fit w-full justify-center py-[100px]"
  >
    <Image
      src="/our-structure/bg.svg"
      alt="Structure Background"
      width={500}
      height={500}
      className="absolute top-[-200px] z-0 w-full"
    />
    <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
      <SectionTitle>
        Our <Accent>Structure</Accent>
      </SectionTitle>
      <OurStructure gridItems={DivisionData.getStructure()} />
    </div>
  </section>
);
