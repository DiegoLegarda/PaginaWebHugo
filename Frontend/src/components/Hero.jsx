import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative w-screen h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: 'url(/2.png)' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >


      
      

    </motion.section>
  )
}

export default Hero;
