import { Accent } from "@/components/accent";
import { SectionTitle } from "@/components/section-title";

export const VisionSection: React.FC = () => (
  <section
    id="our-vision"
    className="relative top-0 flex h-fit w-full justify-center"
  >
    <div className="mx-auto flex w-10/12 max-w-7xl flex-col items-center gap-10 [&>*]:z-10">
      <SectionTitle>
        Our <Accent>Vision</Accent>
      </SectionTitle>
      <div className="shadow-custom-shadow rounded-xl bg-white/5 p-6 backdrop-blur-lg md:p-10">
        <p className="text-balance text-center text-base font-light md:text-xl">
          An organization of technology enthusiasts that pursues
          technological achievements and services for Indonesian society.
        </p>
      </div>
    </div>
  </section>
);
