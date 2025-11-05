"use client";
import { motion } from "motion/react";
import { AnimatedNumber } from "../../components/motion-primitives/animated-number";
import { useEffect, useRef, useState } from "react";

const Statistics = () => {
  const [professionValue, setProfessionValue] = useState(0);
  const [experienceValue, setExperienceValue] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const element = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setProfessionValue(28);
          setExperienceValue(3);
          setHasAnimated(true);
        }
      },
      { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [hasAnimated]);
  return (
    <motion.div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="text-center p-4 bg-white rounded-lg shadow-md">
        <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
          <AnimatedNumber
            className="inline-flex items-center font-bold  text-orange-500 text-3xl"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={experienceValue}
          />{" "}
          <span className="text-orange-500">+</span>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          Years of Professional Experience
        </div>
      </div>

      <div className="text-center p-4 bg-white rounded-lg shadow-md">
        <div className=" md:text-4xl font-bold  mb-2">
          <AnimatedNumber
            className="inline-flex items-center font-bold  text-orange-500 text-3xl"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={professionValue}
          />{" "}
          <span className="text-orange-500">+</span>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          Trained Professionals (PMP, ACP, PBA)
        </div>
      </div>

      {/* <div className="text-center p-4 bg-white rounded-lg shadow-md">
        <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
          <AnimatedNumber
            className="inline-flex items-center font-bold  text-orange-500 text-3xl"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={country}
          />{" "}
          <span className="text-orange-500">+</span>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          Countries Operated in Around the World
        </div>
      </div> */}
    </motion.div>
  );
};
export default Statistics;
