import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{ backgroundImage: 'url(/Popayan.jpg)' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Media Maratón de Popayán</h1>
        <p className="text-xl">¡Corre por un sueño, corre por tu ciudad!</p>
      </div>
    </motion.section>
  )
}

export default Hero;


