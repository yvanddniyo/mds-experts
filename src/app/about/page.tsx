"use client";
import { Navbar } from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <AboutSection />
      </main>
    </div>
  );
}
