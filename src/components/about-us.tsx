"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Title } from "./title";
import { Accent } from "./accent";

export function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // const scroll = scrollYProgress;

  const scroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.1,
  });

  const backgroundScale = useTransform(scroll, [0, 0.5], [1.05, 1.5]);
  const islandY = useTransform(scroll, [0, 1], ["150%", "10%"]);
  const moonScale = useTransform(scroll, [0, 0.5], ["100%", "0%"]);
  const moonPosition = useTransform(scroll, [0, 1], ["75% 10%", "100% 100%"]);
  const textScale = useTransform(scroll, [0, 1], ["100%", "20%"]);
  const textY = useTransform(scroll, [0, 1], ["-10%", "20%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/homepage/bg-space.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale: backgroundScale,
            y: -1,
          }}
        />
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/homepage/moon.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: moonPosition,
            scale: moonScale,
          }}
        />
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/homepage/island.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            scale: islandY,
          }}
        />
        <motion.div
          className="relative z-10 flex h-full items-center justify-center text-white"
          style={{ scale: textScale, y: textY }}
        >
          <Title className="stroke-black text-7xl">
            Bina Nusantara <br />
            Computer Club
          </Title>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/homepage/rounded.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      />
      <motion.div
        className="absolute inset-0 bottom-[-100%] z-20"
        style={{
          backgroundImage: "url('/homepage/phone.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          scale: 0.75,
        }}
      />
      <div className="relative flex h-[90vh] flex-col items-center justify-end bg-gradient-to-b from-[#262662] to-[#04042D]">
        <Title className="text-foreground text-center text-6xl leading-[1.4]">
          Where Technology <br />
          Placed in <Accent>Kota Kembang</Accent>
        </Title>
        <span className="mb-56 mt-10 text-4xl font-light">#VIVABNCC</span>
      </div>
    </div>
  );
}
