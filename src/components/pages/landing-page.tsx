"use client";
import { footerTextAtom } from "@/store/footer-text-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import AboutSection from "../ui/about.home";
import CompaniesSection from "../ui/companies.home";
import HeroSection from "../ui/hero.home";
import HookHomeSection from "../ui/hook.home";
import { WorkHomePage } from "../ui/work.home";

export default function LandingPage() {
  const setText = useSetAtom(footerTextAtom);

  useEffect(() => {
    setText("Let's Talk");
  }, [setText]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <HookHomeSection />
      <WorkHomePage />
      <CompaniesSection />
    </>
  );
}
