import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
              MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa. We are dedicated to empowering individuals and organizations across diverse sectors through high-quality capacity-building solutions and expert business support services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a mission to deliver value through excellent human resource training and development programs, we foster lifelong learning, personal growth, and quality-driven performance. Beyond training, MDS Experts Ltd offers a comprehensive suite of business services including bookkeeping, accounting, tax advisory, and tailored business consultancy designed to support operational excellence, financial compliance, and strategic decision-making.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment to meeting clients&apos; evolving needs, promoting continuous improvement, and encouraging self-review makes us your trusted partner in building stronger businesses and more effective teams. At MDS Experts Ltd, we don&apos;t just deliver services we help you thrive, grow, and succeed.
            </p>
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