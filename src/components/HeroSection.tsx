import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import bussiness from "../assets/f-business.svg"

const HeroSection = () => {
  const router = useRouter()
  return (
    <section id="home" className="relative overflow-hidden text-white rounded-b-4xl pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl md:text-7xl w-full font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* In-Person, Instructor Led */}
            In-Person, Expert-Led 
            <motion.span 
              className="block text-blue- w-full text-3xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
             Professional Course
            </motion.span>
            <motion.span 
              className="block text-blue- w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
             Training for Lasting Impact
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-xl  mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            MDS Experts Ltd is a leading Rwandan firm specializing in tax consultancy, bookkeeping, and professional training courses (PMP, PBA, ACP), driving development across Africa.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.button 
              className="bg-white w-fit text-blue-600 px-8 py-3 rounded-full cursor-pointer font-semibold hover:bg-blue-50 transition-colors duration-200 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/program")}
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-6 lg:top-1/2 right-24 opacity-80 animate-pulse w-[50px] h-[50px]"
        style={{
          backgroundImage: `url(${bussiness.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div 
        className="absolute top-16 lg:bottom-1/2 left-24 w-[50px] h-[50px] opacity-80 animate-pulse"
        style={{
          backgroundImage: `url(${bussiness.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </section>
  )
}

export default HeroSection