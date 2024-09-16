import Image from "next/image";

export const ProjectCard: React.FC<{
  imageIndex: number;
  title: string;
  year: string;
  description: string;
}> = ({ imageIndex, title, year, description }) => (
  <div className="shadow-custom-shadow relative flex flex-col gap-4 rounded-xl bg-white/5 p-6 backdrop-blur-lg">
    <div className="relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#65E0E9] to-[#3E47BE] opacity-75 blur" />
      <div className="relative">
        <Image
          src={`/our-project/${imageIndex}.png`}
          alt={title}
          width={200}
          height={150}
          className="aspect-video w-full rounded-lg object-cover"
        />
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-lg font-semibold">{year}</span>
      </div>
      <p className="text-justify font-light">{description}</p>
    </div>
  </div>
);
