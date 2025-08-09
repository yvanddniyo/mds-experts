import { motion } from "framer-motion"
import Image from "next/image"
import teachingImg from "@/assets/teaching.jpeg"
import businessImg from "@/assets/business.jpeg"

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Us
          </h2>
        </motion.div>

        {/* Row 1: Content Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cost-Effective Solutions for Your Business
            </h3>
            <p className="text-gray-700 mb-4">
              At MDS Experts Ltd, we provide innovative outsourcing strategies designed to boost
              efficiency and cut operational costs dramatically. With our commitment to
              excellence and competitive pricing, you gain maximum value while driving your
              business forward.
            </p>
            <a href="#contact" className="text-blue-600 font-semibold underline">
              Get in touch with us
            </a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full h-[200px] md:h-[220px] lg:h-[380px]  rounded-2xl p-2 shadow-xl ring-1 ring-gray-200">
              <Image src={teachingImg} alt="Business operations" fill className="object-contain" priority />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative lg:order-1 order-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full h-[200px] md:h-[220px] lg:h-[380px] rounded-2xl  p-2 shadow-xl ring-1 ring-gray-200">
              <Image src={businessImg} alt="Consulting solutions" fill className="object-contain" priority />
            </div>
          </motion.div>

          <motion.div
            className="lg:order-2 order-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cost-Effective Consulting Solutions for Lasting Impact
            </h3>
            <p className="text-gray-700 mb-4">
              MDS Experts Ltd empowers organizations with tailored consulting strategies that
              streamline operations, improve performance, and reduce costs. Our commitment
              to delivering measurable results ensures you gain maximum value while staying
              ahead in a competitive market.
            </p>
            <a href="#contact" className="text-blue-600 font-semibold underline">
              Get in touch with us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection


