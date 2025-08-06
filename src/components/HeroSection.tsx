import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-900 to-indigo-900 text-white">
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
            In-Person, Instructor Led
            <motion.span 
              className="block text-blue-200 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Professional Excellence
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-xl text-blue-100 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            MDS Experts Ltd is a leading Rwandan consultancy and training firm at the forefront of professional development in Africa.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.button 
              className="bg-white text-blue-600 px-8 py-3 rounded-full cursor-pointer font-semibold hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection