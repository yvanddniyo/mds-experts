import { motion } from "framer-motion"

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
        <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">18+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Professional Experience</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">120+</div>
                <div className="text-sm text-gray-600 font-medium">Trained Certified Professionals (PMP, ACP, PBA)</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">12+</div>
                <div className="text-sm text-gray-600 font-medium">Countries Operated in Around the World</div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection


