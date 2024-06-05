"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";

const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 z-50 lg:hidden"
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -288 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -288 }}
            className="px-6 z-50 py-10 bg-neutral-100 w-[18rem] lg:w-fit absolute lg:static flex flex-col justify-between h-screen lg:h-auto overflow-y-auto"
          >
            <div className="relative z-50">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <Badge href="/resume" text="Read Resume" />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="absolute lg:hidden top-16 right-6 h-14 w-14 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconMenu2 className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-md",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "hidden lg:flex h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <hr className="mt-4" />

      <Heading as="p" className="text-md md:text-sm lg:text-sm pt-10 pb-2 px-2">
        Connect with me
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="hidden lg:flex space-x-2">
      <Image
        src="https://pbs.twimg.com/profile_images/1752683831503589376/d1MIGj3z_400x400.jpg"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Jack Dolby&apos;s</p>
        <p className="font-light text-secondary">Personal Site</p>
      </div>
    </div>
  );
};
