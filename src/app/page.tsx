import { ParallaxHomepage } from "@/components/parallax-homepage";

export default async function Home() {
  return (
    <>
      <ParallaxHomepage />

      <div
        id="about"
        className="relative top-0 z-30 flex min-h-screen w-full flex-col bg-white/50"
      >
        About Us
      </div>
    </>
  );
}
