"use client"
"use client"
import { motion } from "framer-motion";
import Statistics from "./Statistics";

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About MDS EXPERT LTD
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-gray-700 mb-6">
            MDS Experts Ltd is a leading Rwandan firm specializing in tax consultancy, bookkeeping, and professional training courses such as PMP, PBA, and ACP. We are dedicated to advancing development across Africa by empowering individuals and organizations through high-quality capacity-building and expert business support services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
            Our comprehensive business solutions are designed to enhance operational efficiency, ensure financial compliance, and support strategic decision-making.
            </p>
            <p className="text-lg text-gray-700 mb-8">
            Driven by a commitment to adapt to our clients’ evolving needs, foster continuous improvement, and encourage self-assessment, we proudly stand as a trusted partner in building stronger businesses and more effective teams.
            </p>
            <p className="text-lg text-gray-700 mb-8">
            At MDS Experts Ltd, we don’t just provide services  we enable you to thrive, grow, and succeed.
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
              <h3 className="text-xl font-bold text-blue-600 mb-3">Vision Statement</h3>
              <p className="text-gray-700">
                To be a trusted catalyst for professional excellence and business growth across Africa equipping individuals and organizations with the skills, strategies, and support they need to thrive in a competitive world.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Mission Statement</h3>
              <p className="text-gray-700">
                Our mission is to empower professionals through globally recognized training programs and strengthen businesses through reliable accounting, tax advisory, and tailored consultancy services. We are committed to delivering excellence, fostering continuous improvement, and driving value for every client we serve.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 