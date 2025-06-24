import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative w-screen min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4"
      style={{ backgroundImage: 'url(/2.png)' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     
    </motion.section>
  );
}

export default Hero;
