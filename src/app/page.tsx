"use client";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhatWeDoSection />
        <ContactSection />
        <CTASection />
      </main>
    </div>
  );
}
