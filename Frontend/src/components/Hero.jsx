import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-black flex flex-col items-center justify-center"
      style={{ marginTop: "6rem" }}
    >
      {/* Contenedor adaptable */}
      <div className="relative w-full aspect-[4/1] sm:aspect-[3/1] md:aspect-[2.5/1] lg:aspect-[4/1]">

        {/* Imagen HORIZONTAL para pantallas medianas y grandes */}
        <img
          src="/Bannerpromocion.png"
          alt="Banner horizontal"
          className="hidden md:block w-full h-full object-contain object-center bg-black"
        />

        {/* Imagen VERTICAL para celulares */}
        <img
          src="/bannervertical.jpeg"
          alt="Banner vertical"
          className="block md:hidden w-full h-full object-contain object-center bg-black"
        />

         {/* Botón centrado pero más abajo */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end 
                        pb-[40px] md:pb-[70px] text-center px-6">
          <motion.a
            href="https://wa.me/573014554318?text=Hola%2C%20quiero%20inscribirme%20a%20la%20carrera%20RunningPopayan%2025"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-4 
                       bg-lime-500 hover:bg-lime-400
                       text-white font-bold text-2xl rounded-full 
                       shadow-lg hover:shadow-[0_0_25px_#84cc16] 
                       transition-all duration-300 mr-44"
          >
            Inscríbete
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
