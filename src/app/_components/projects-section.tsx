"use client";

import { Accent } from "@/components/accent";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { GlowingButton } from "@/components/ui/glowing-button";
import projects from "../../../public/our-project/dummy_data/projects.json";
import { useState } from "react";

export const ProjectsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  return (
    <section
      id="our-projects"
      className="relative top-0 flex h-fit w-full justify-center pt-[200px]"
    >
      <div className="container flex flex-col items-center gap-10 [&>*]:z-10">
        <SectionTitle>
          Our <Accent>Projects</Accent>
        </SectionTitle>
        <div className="grid grid-cols-3 gap-10">
          {projects.slice(0, visibleCount).map((project, i) => (
            <ProjectCard
              key={project.id}
              imageIndex={i + 1}
              title={project.title}
              year={project.year}
              description={
                project.description.split(" ").slice(0, 20).join(" ") +
                (project.description.split(" ").length > 20 ? "..." : "")
              }
            />
          ))}
        </div>
        {visibleCount < projects.length && (
          <GlowingButton
            disabled
            className="text-md p-6"
            onClick={handleViewMore}
          >
            View More
          </GlowingButton>
        )}
      </div>
    </section>
  );
};
