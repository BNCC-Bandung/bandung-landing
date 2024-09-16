import type { StructureProps } from "@/types/grid";
import Image from "next/image";

const GridItem = ({ item }: { item: StructureProps }) => (
  <div
    className={`shadow-custom-shadow relative flex flex-col gap-4 rounded-xl bg-white/5 p-6 backdrop-blur-lg ${item.className}`}
  >
    <div className="relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#65E0E9] to-[#3E47BE] opacity-75 blur" />
      <div className="relative">
        <Image
          src={item.imageSrc}
          alt={item.alt}
          width={200}
          height={150}
          className="aspect-[2/3] w-full rounded-lg object-cover"
        />
      </div>
    </div>
    <div className="space-y-2 text-center">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-lg font-bold">{item.position}</h2>
        <span className="font-light">{item.name}</span>
      </div>
    </div>
  </div>
);

export function OurStructure({ gridItems }: { gridItems: StructureProps[] }) {
  return (
    <div className="grid grid-cols-5 gap-[4rem_2.5rem]">
      {gridItems.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
}
