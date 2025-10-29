"use client"
import { motion } from "framer-motion"
import { BookMinus, Trophy } from "lucide-react"
import { memo } from "react"

const ServicesSection = () => {
  return (
    <section id="services" className="pt-[400px] sm:pt-[300px] lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive professional development and business support services
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1: PMP Certification */}
          <motion.div 
            className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -3, scale: 1.01 }}
          >
            <motion.div 
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Project Management Professional (PMP) Certification
            </h3>
            <p className="text-gray-600 mb-6">
              Take your career to new heights with the globally respected PMP certification from PMI
            </p>
            <motion.button 
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE THE COURSE
            </motion.button>
          </motion.div>

          {/* Service 2: Business Services */}
          <motion.div 
            className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -3, scale: 1.01 }}
          >
            <motion.div 
              className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Business Services
            </h3>
            <p className="text-gray-600 mb-4">
              Bookkeeping, Accounting, Tax Advisory, and Business Consultancy
            </p>
            <p className="text-gray-600 mb-6">
              Let the experts handle your numbers so you can focus on building your business.
              <br />
              <span className="font-semibold">From bookkeeping to business strategy, your success is our focus.</span>
            </p>
            <motion.button 
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
           <div className="absolute -top-10 flex items-center justify-between flex-col lg:flex-row p-4">
        <div className="shadow-lg  text-black p-4 m-4 rounded-lg z-[200] lg:w-1/3 flex items-center gap-4">
        <span className="bg-amber-200 p-3 rounded-lg">
          <BookMinus size={20}/>
        </span>
        <p className="text-lg">Professionalism is doing ordinary things with extraordinary consistency.
        Grow your skills, master your craft,
        and let excellence become your habit.</p>
        
        </div>
        <div className="bg-green-50 shadow-lg text-black p-4 m-4 rounded-lg z-[200] lg:w-1/3 text-lg flex items-center gap-4">
        <span className="bg-green-300 p-3 rounded-lg"><Trophy size={20}/></span>
        <p>
          Success doesn’t come from luck, it comes from preparation.
          Learn, improve, and adapt every day.
          Your growth is your best investment.
        </p>
        </div>
      </div>
    </section>
  )
}

export default memo(ServicesSection)