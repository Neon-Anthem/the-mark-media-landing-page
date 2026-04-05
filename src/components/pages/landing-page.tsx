"use client";
import { footerTextAtom } from "@/store/footer-text-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import AboutSection from "../ui/about.home";
import CompaniesSection from "../ui/companies.home";
import ContactFooter from "../ui/contact.footer.home";
import HeroSection from "../ui/hero.home";
import WorkSection from "../ui/work.home";

export default function LandingPage() {
  const setText = useSetAtom(footerTextAtom);

  useEffect(() => {
    setText("Let's Talk");
  }, [setText]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CompaniesSection />
      {/* <FeaturedWorkSection /> */}
      <ContactFooter />
    </>
  );
}
