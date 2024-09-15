import Image from "next/image";

interface GridItem {
  id: number;
  imageSrc: string;
  alt: string;
  className: string;
  name: string;
  position: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    imageSrc: "/our-structure/ceo.png",
    alt: "Mission",
    className: "col-start-3 row-start-1 ",
    name: "Theofilus Adhi Septian",
    position: "Chief Executive Officer",
  },
  {
    id: 2,
    imageSrc: "/our-structure/cfo.png",
    alt: "Mission",
    className: "col-start-4 row-start-2",
    name: "Richard Rafelson",
    position: "Chief Financial Officer",
  },
  {
    id: 3,
    imageSrc: "/our-structure/pr.png",
    alt: "Mission",
    className: "col-start-1 row-start-3",
    name: "Natasya Felicia",
    position: "PR Manager",
  },
  {
    id: 4,
    imageSrc: "/our-structure/eeo.png",
    alt: "Mission",
    className: "col-start-2 row-start-3",
    name: "Cynthia Shabrina",
    position: "EEO Manager",
  },
  {
    id: 5,
    imageSrc: "/our-structure/lnt.png",
    alt: "Mission",
    className: "col-start-3 row-start-3",
    name: "Maleo Farrel",
    position: "LnT Manager",
  },
  {
    id: 6,
    imageSrc: "/our-structure/rnd.png",
    alt: "Mission",
    className: "col-start-4 row-start-3",
    name: "Reynard Hansel",
    position: "RnD Manager",
  },
  {
    id: 7,
    imageSrc: "/our-structure/hrd.png",
    alt: "Mission",
    className: "col-start-5 row-start-3",
    name: "Rafael Marvin Sowarahardja",
    position: "HRD Manager",
  },
];

const GridItem = ({ item }: { item: GridItem }) => (
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

export function OurStructure() {
  return (
    <div className="grid grid-cols-5 gap-[4rem_2.5rem]">
      {gridItems.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
}
