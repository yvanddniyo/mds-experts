import { motion } from "framer-motion";
import EnhancedTitle from "@/lib/EnhancedTitle";

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <EnhancedTitle>What We Do</EnhancedTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex items-center lg:items-start mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold p-4">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Coaching for Project Management Professional (PMP) Certification
              </h3>
            </div>
            <p className="text-gray-600">
              Comprehensive PMP certification training with expert instructors
              and proven methodologies to help you achieve your professional
              goals.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Business Services
              </h3>
            </div>
            <p className="text-gray-600">
              Bookkeeping, Accounting, Tax Advisory, and other business-related
              consultancy services to support your business growth and
              compliance needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
