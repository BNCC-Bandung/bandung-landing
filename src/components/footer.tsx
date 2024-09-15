"use client";

import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-50 bg-[#0a0a29] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">BNCC</h2>
            <p className="text-muted-foreground text-sm">
              Paskal Hyper Square, Jl. Pasir Kaliki No. 25-27,
              <br />
              Ciroyom, Kec. Andir, Kota Bandung, Jawa Barat 40181
            </p>
            <p className="text-muted-foreground text-sm">
              Created with ❤️ by RnD BNCC Bandung.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Divisions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Structure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Mission
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Know More</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                bnccbandung.general@gmail.com
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0823xxx
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              &copy; 2024, BNCC Bandung. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400">
                <SiInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <SiYoutube size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <SiLinkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <SiFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
