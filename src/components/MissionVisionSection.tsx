import { motion } from "framer-motion"
import Statistics from "./Statistics"

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold text-blue-600 mb-3">Vision Statement</h3>
            <p className="text-gray-700">
              To be a trusted catalyst for professional excellence and business growth across Africa equipping
              individuals and organizations with the skills, strategies, and support they need to thrive in a
              competitive world.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold text-purple-600 mb-3">Mission Statement</h3>
            <p className="text-gray-700">
            Our mission is to empower professionals with globally recognized training and support businesses with expert accounting, tax advisory, and tailored consultancy. We are dedicated to excellence, continuous improvement, and delivering lasting value to every client we serve.
            </p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto p-12 sm:px-6 lg:px-8">
            <Statistics />
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection


