import { ParallaxHomepage } from "@/components/parallax-homepage";
import { AboutSection } from "./_components/about-section";
import { VisionSection } from "./_components/vision-section";
import { MissionSection } from "./_components/mission-section";
import { SeparatorSection } from "./_components/separator-section";
import { ProjectsSection } from "./_components/projects-section";
import { EventsSection } from "./_components/events-section";
import { DivisionSelection } from "./divisions/page";
import { StructureSection } from "./_components/structure-section";

export default async function Home() {
  return (
    <>
      <ParallaxHomepage />
      <div className="bg-custom-gradient h-fit space-y-28 overflow-hidden">
        <AboutSection />
        <VisionSection />
        <MissionSection />
        <SeparatorSection />
        <ProjectsSection />
        <EventsSection />
        <DivisionSelection text="Our" />
        <StructureSection />
      </div>
    </>
  );
}
