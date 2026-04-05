"use client";

import { IconArrowUpRight, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface INavLink {
  href: string;
  title: string;
}

const navLinks: INavLink[] = [
  { href: "/about", title: "About Us" },
  { href: "/services", title: "Services" },
  { href: "/case-studies", title: "Case Studies" },
  { href: "#contact", title: "Contact Us" },
];

export default function DefaultNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Mobile Nav */}

      <AnimatePresence key={"mobile-nav"}>
        {isOpen ? (
          <div className="fixed bg-background h-screen w-full z-200">
            <div className="container px-4 sm:px-0 flex items-center justify-between mx-auto my-4">
              <BrandLogo />

              <button
                className=""
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                <IconX className="size-5" />
              </button>
            </div>
            {/* Nav Items */}
            <div className="container px-4 sm:px-0 mx-auto py-3 overflow-y-scroll">
              <motion.ul
                className="flex flex-col space-y-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navLinks?.map((item) => {
                  return (
                    <motion.li
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                      className="text-foreground text-5xl md:text-8xl font-title"
                      key={item.href}
                      animate="visible"
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 100,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
            {/* End Nav Items */}
          </div>
        ) : null}
      </AnimatePresence>

      {/* Mobile Nav */}
      <div className="fixed top-0 left-0 w-full z-100 mix-blend-difference">
        <div className="flex items-center justify-between gap-24 z-50 w-full h-12 px-4 sm:px-12">
          <BrandLogo />

          <div className="xl:hidden flex items-center justify-center">
            <button
              className=""
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <IconX className="size-5" />
            </button>
          </div>

          <div className="hidden xl:block">
            <ul className="flex space-x-8">
              {navLinks?.map((item) => {
                return (
                  <li className="text-foreground text-base" key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Book Now */}

          <div className="hidden xl:block isolate">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-full px-4 py-2 -mr-2 -my-0.5 font-medium flex items-center gap-3 text-sm bg-black text-brand-6 ring isolate mix-blend-difference"
            >
              <span className="bg-brand-6 rounded-full -m-1 p-1 -ml-2.5">
                <IconArrowUpRight className="size-4 text-foreground" />
              </span>
              Let&apos;s Talk
            </motion.button>
          </div>
          {/* Book Now */}
        </div>
      </div>
    </>
  );
}

export const BrandLogo = () => (
  <div className="">
    <Link href="/">
      <h4 className="text-xl text-foreground font-medium">The Mark Media</h4>
      {/* <Image
        src={"/logox.png"}
        alt="Brand Logo"
        width={50}
        height={50}
        className="w-32 mix-blend-difference"
      /> */}
    </Link>
  </div>
);
