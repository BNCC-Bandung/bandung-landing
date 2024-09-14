"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-muted-foreground/30 fixed left-1/2 top-0 z-50 my-10 w-10/12 max-w-7xl -translate-x-1/2 rounded-xl border bg-white/10 bg-opacity-70 shadow-sm backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold">
              <Image
                src="/header/logo.svg"
                alt="Logo"
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/#about">About Us</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/divisions">Divisions</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:bg-secondary inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <MobileNavLink href="/">About Us</MobileNavLink>
            <MobileNavLink href="/projects">Projects</MobileNavLink>
            <MobileNavLink href="/events">Events</MobileNavLink>
            <MobileNavLink href="/divisions">Divisions</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out",
        usePathname().split("#")[0] === href.split("#")[0]
          ? "text-foreground"
          : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-md px-3 py-2 text-base font-medium transition duration-150 ease-in-out",
        usePathname().split("#")[0] === href.split("#")[0]
          ? "text-foreground"
          : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
}
