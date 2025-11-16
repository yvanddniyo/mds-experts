"use client";
import { motion } from "framer-motion";
import Statistics from "./Statistics";
import EnhancedTitle from "@/lib/EnhancedTitle";
import mdsExpert2 from "@/assets/mds-jpg-removebg-preview.png";
import { KEYWORDS } from "@/constants/Info";

export const metadata = {
  title:
    "About MDS Experts Ltd | Professional Training & Consultancy in Rwanda",
  description:
    "MDS Experts Ltd is a Kigali-based professional training and consultancy center specializing in capacity building, business advisory, project management, and strategic development. The company empowers professionals, entrepreneurs, and organizations through globally recognized training programs, certification preparation courses, and business coaching services.",
  url: "https://mdsexpertspro.com/about",
  image: mdsExpert2.src,
  siteName: "MDS Experts Ltd",
  author: "MDS Experts Ltd",
  publisher: "MDS Experts Ltd",
  copyright: "MDS Experts Ltd",
  type: "website",
  locale: "en_US",
  keywords: KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 h-[92vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <EnhancedTitle>About MDS EXPERT LTD</EnhancedTitle>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-gray-700 mb-6">
              MDS Experts Ltd is a Kigali-based professional training and
              consultancy center specializing in capacity building, business
              advisory, project management, and strategic development.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The company empowers professionals, entrepreneurs, and
              organizations through globally recognized training programs,
              certification preparation courses, and business coaching services.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              MDS Experts partners with both local and international
              institutions to promote excellence, innovation, and sustainable
              growth in Rwanda and beyond. Our flagship programs have helped
              professionals across East Africa enhance their performance, obtain
              global certifications, and lead impactful change in their
              organizations.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              At MDS Experts Ltd, we don’t just provide services we enable you
              to thrive, grow, and succeed.
            </p>
            <Statistics />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Vision Statement
              </h3>
              <p className="text-gray-700">
                To be a trusted catalyst for professional excellence and
                business growth across Africa equipping individuals and
                organizations with the skills, strategies, and support they need
                to thrive in a competitive world.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-3">
                Mission Statement
              </h3>
              <p className="text-gray-700">
                Our mission is to empower professionals through globally
                recognized training programs and strengthen businesses through
                reliable accounting, tax advisory, and tailored consultancy
                services. We are committed to delivering excellence, fostering
                continuous improvement, and driving value for every client we
                serve.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
