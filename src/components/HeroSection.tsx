"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import bussiness from "../assets/f-business.svg"; // background icons
import hero from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative lg:h-lvh flex items-center justify-center overflow-hidden text-white rounded-b-[3rem] bg-gradient-to-b from-[#0056A3] to-[#007BCE] pt-24 pb-16"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT SECTION */}
        <motion.div
          className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            In-Person, <span className="text-yellow-400">Expert-Led</span>{" "}
            <span className="block text-white">Professional Course</span>
          </motion.h1>

          <motion.span
            className="block text-pink-400 text-4xl md:text-6xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Training for Lasting Impact
          </motion.span>

          <motion.p
            className="text-base md:text-lg text-blue-50 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            MDS Experts Ltd is a leading Rwandan firm specializing in tax
            consultancy, bookkeeping, and professional training courses (PMP,
            PBA, ACP), driving development across Africa.
          </motion.p>
          <Link href="/program" className="inline-block">
            <motion.button
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Professional Journey →
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT ILLUSTRATION SECTION */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative pt-16 lg:pt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-[280px] sm:w-[380px] md:w-[450px] lg:w-[480px]">
            <Image
              src={hero}
              alt="Professional Training"
              className="object-contain drop-shadow-2xl"
              priority
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating background icons */}
      <div
        className="absolute bottom-6 lg:top-1/2 right-24 opacity-60 animate-pulse w-[50px] h-[50px]"
        style={{
          backgroundImage: `url(${bussiness.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute top-16 lg:bottom-1/2 left-24 w-[50px] h-[50px] opacity-60 animate-pulse"
        style={{
          backgroundImage: `url(${bussiness.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default HeroSection;
