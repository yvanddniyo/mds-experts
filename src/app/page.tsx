"use client";
import { Navbar } from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import MissionVisionSection from "../components/MissionVisionSection";
import WhyUsSection from "../components/WhyUsSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import ContactSection from "../components/ContactSection";
// import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <div className="bg-sky-700">
      <Navbar />
      <HeroSection />
      </div>
      <main className="pt-16">
        {/* Defer motion-heavy section slightly for perceived speed */}
        <div className="[contain:paint]"><ServicesSection /></div>
        <MissionVisionSection />
        <WhyUsSection />
        <WhatWeDoSection />
        <ContactSection />
        {/* <CTASection /> */}
      </main>
    </div>
  );
}
