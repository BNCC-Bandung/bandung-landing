import { Accent } from "@/components/accent";
import { SectionTitle } from "@/components/section-title";

export const VisionSection: React.FC = () => (
  <section
    id="our-vision"
    className="relative top-0 flex h-fit w-full justify-center"
  >
    <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
      <SectionTitle>
        Our <Accent>Vision</Accent>
      </SectionTitle>
      <div className="shadow-custom-shadow rounded-xl bg-white/5 p-10 backdrop-blur-lg">
        <p className="text-balance text-center text-xl font-light">
          An organization of technology enthusiasts that pursues
          <br />
          technological achievements and services for Indonesian society.
        </p>
      </div>
    </div>
  </section>
);
