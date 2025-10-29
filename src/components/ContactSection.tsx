import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-sky-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100">
            Ready to start your professional journey with us?
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <motion.div 
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold mb-4">📍 LOCATION</h3>
            <p className="text-blue-100">
              Kigali, Gasabo, Kanombe kabeza<br />
              KK-276 ST, Kigali – Rwanda
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold mb-4">☎ CONTACT US</h3>
            <p className="text-blue-100">
              Phone: +250788520674<br />
              +250781833313<br />
              Email: mdsexperts5@gmail.com<br />
              P.O. Box: xxx, Kigali – Rwanda
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">🔗 Follow Us</h3>
            <div className="flex justify-center gap-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-blue-600" fill="currentColor" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
              <Facebook className="w-5 h-5 text-blue-600" fill="currentColor" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-blue-600"  />
              
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-blue-600" fill="currentColor" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 