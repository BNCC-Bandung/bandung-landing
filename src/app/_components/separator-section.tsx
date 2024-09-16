import Image from "next/image";

export const SeparatorSection: React.FC = () => (
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
);
