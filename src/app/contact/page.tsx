"use client";

import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { motion } from "framer-motion";
import { Title } from "@/components/title";
import { Accent } from "@/components/accent";
import Link from "next/link";

export default function Home() {
  const socialLinks = [
    { icon: SiInstagram, href: "#", label: "Instagram" },
    { icon: SiYoutube, href: "#", label: "YouTube" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiFacebook, href: "#", label: "Facebook" },
  ];
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#0B041C]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center"
      >
        <Title>
          <Accent className="text-8xl">Contact Us</Accent>
        </Title>

        <p className="my-12 text-xl font-light leading-relaxed sm:text-lg">
          We'd love to hear from you. <br />
          Let's create something amazing together.
        </p>

        <div className="mb-12 space-y-4">
          <a
            href="mailto:bnccbandung.general@gmail.com"
            className="block text-lg font-medium transition-colors hover:underline sm:text-xl"
          >
            <Accent>bnccbandung.general@gmail.com</Accent>
          </a>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold">Follow us</h2>
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transform transition-all duration-200 hover:scale-110 hover:text-pink-400"
                aria-label={link.label}
              >
                <link.icon size={28} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
