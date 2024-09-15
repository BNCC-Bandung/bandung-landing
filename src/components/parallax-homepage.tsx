"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Title } from "./title";
import { Accent } from "./accent";
import Image from "next/image";

export function ParallaxHomepage() {
  const parralaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parralaxRef,
    offset: ["start start", "end start"],
  });

  const scroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  const EASE_FACTOR = 0.6;

  const backgroundScale = useTransform(scroll, [0, EASE_FACTOR], [1.05, 1.5]);
  const islandScale = useTransform(scroll, [0, EASE_FACTOR], ["150%", "100%"]);
  const moonScale = useTransform(scroll, [0, EASE_FACTOR / 2], ["100%", "0%"]);
  const moonPosition = useTransform(
    scroll,
    [0, EASE_FACTOR],
    ["75% 10%", "100% 100%"],
  );
  const textScale = useTransform(scroll, [0, EASE_FACTOR], ["100%", "20%"]);
  const textY = useTransform(scroll, [0, EASE_FACTOR], ["-10%", "20%"]);

  return (
    <div ref={parralaxRef} className="relative inset-0 w-full">
      <div className="sticky top-0 h-[95vh] overflow-hidden">
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
            scale: islandScale,
          }}
        />
        <motion.div
          className="relative z-10 flex h-full items-center justify-center text-white"
          style={{ scale: textScale, y: textY }}
          initial={{ opacity: 0, x: 300 }} // Start from below
          whileInView={{ opacity: 1, x: 0 }} // Slide to original position
          transition={{ duration: 0.3, ease: "circOut" }}
        >
          <Title className="stroke-black text-7xl">
            Bina Nusantara <br />
            Computer Club
          </Title>
        </motion.div>
      </div>

      <div className="relative z-40 -mt-[80px]">
        <Image
          src="/homepage/rounded.svg"
          width={1920}
          height={1080}
          className="w-full object-contain"
          alt=""
        />
        <div className="absolute inset-x-[20%] translate-y-[-50%]">
          <Image
            src="/homepage/phone.png"
            width={1920}
            height={1080}
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="sticky top-0 flex h-[100vh] flex-col items-center justify-center bg-gradient-to-b from-[#262662] to-[#04042D]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-center"
        >
          <Title className="text-foreground text-center text-6xl leading-[1.4]">
            Where Technology <br />
            Placed in <Accent>Kota Kembang</Accent>
          </Title>
          <span className="text-4xl font-light">#VIVABNCC</span>
        </motion.div>
      </div>

      <div className="sticky top-0 flex h-screen items-center justify-center bg-[#0B041C]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Title>
            <Accent className="text-8xl">About Us</Accent>
          </Title>
        </motion.div>
      </div>
    </div>
  );
}
