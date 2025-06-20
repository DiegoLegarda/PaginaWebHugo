import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative w-screen h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: 'url(/Popayan.jpg)' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Contenedor flexible centrado para la marca de agua */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.img
          src="/Logo.png"
          alt="Marca de agua"
          className="opacity-90 w-1/2 md:w-1/4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Capa de fondo oscuro semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenedor del título por encima de todo */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-50">21k Running X Popayán</h1>
        <p className="text-xl">¡Corre por un sueño, corre por tu ciudad!</p>
      </div>

    </motion.section>
  )
}

export default Hero;
