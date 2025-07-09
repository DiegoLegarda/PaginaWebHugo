import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/2.png"
        alt="Hero"
        className="w-full h-full object-contain"
      />
    </motion.section>
  )
}

export default Hero;