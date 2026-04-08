"use client";

import { contactFormOpen } from "@/store/contact-store";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useSetAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import LogoLettermark from "../../../public/assets/tmm-logo-lettermark";
import { CTAButton } from "./cta.button";

interface INavLink {
  href: string;
  title: string;
  onClick?: () => void;
}

export default function DefaultNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setFormOpen = useSetAtom(contactFormOpen);

  const navLinks: INavLink[] = [
    { href: "/about", title: "About Us" },
    { href: "/services", title: "Services" },
    { href: "/case-studies", title: "Case Studies" },
    {
      href: "",
      title: "Contact Us",
      onClick: () => {
        setFormOpen(true);
      },
    },
  ];

  return (
    <div className="">
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
                        item?.onClick?.();
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
      <div className="fixed top-0 left-0 w-full z-100 bg-background py-1 border-b border-primary/20">
        <div className="flex items-center justify-between z-50 w-full h-12 px-4 sm:px-12">
          <BrandLogo />

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks?.map((item) => {
                return (
                  <li
                    className="text-foreground text-base"
                    key={item.href}
                    onClick={() => {
                      item?.onClick?.();
                    }}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Book Now */}
          <div className="w-max flex items-center gap-2 sm:gap-6">
            <span
              className="flex md:hidden mix-blend-difference"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <IconMenu className="size-4 sm:size-6" />
            </span>
            <CTAButton
              mode="rounded"
              className="pl-3 text-base py-0.5 outline outline-background [&>span]:-mr-1.5"
            >
              Talk to Us
            </CTAButton>
          </div>

          {/* Book Now */}
        </div>
      </div>
    </div>
  );
}

export const BrandLogo = () => (
  <div className="">
    <Link href="/" className="text-white stroke-1 stroke-white fill-white">
      {/* <h4 className="text-xl text-foreground font-medium">The Mark Media</h4> */}
      {/* <Image
        src={"/logox.png"}
        alt="Brand Logo"
        width={50}
        height={50}
        className="w-32 mix-blend-difference"
      /> */}
      <div className="*:w-32 h-auto">
        <LogoLettermark />
      </div>
    </Link>
  </div>
);
