import { Accent } from "@/components/accent";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { GlowingButton } from "@/components/ui/glowing-button";

export const ProjectsSection: React.FC = () => (
  <section
    id="our-projects"
    className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
  >
    <div className="mx-auto flex w-10/12 max-w-7xl flex-col items-center gap-10 [&>*]:z-10">
      <SectionTitle>
        Our <Accent>Projects</Accent>
      </SectionTitle>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCard
            key={i}
            imageIndex={i + 1}
            title="Project Name"
            year="2021"
            description="Lorem ipsum dolor sit amet consectetur. At enim mauris commodo ultricies. Erat sagittis semper dignissim tortor tellus amet ante habitant."
          />
        ))}
      </div>
      <GlowingButton disabled className="text-md p-6">
        View More
      </GlowingButton>
    </div>
  </section>
);
