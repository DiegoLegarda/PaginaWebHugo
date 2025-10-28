import { motion } from "framer-motion";

function Premiacion() {
  return (
    <section id="premiacion">
      <div className="min-h-screen flex flex-col items-center justify-center  p-10">
        {/* Título */}
        <h1 className="text-5xl font-extrabold text-[#082E73] mb-12 drop-shadow-lg text-center">
          Premiación Running Popayán
        </h1>

        {/* Imagen centrada con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full"
        >
          <img
            src="/Premiacion12K.jpeg" 
            alt="Premiación 12K"
            className="w-full max-w-4xl rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full mt-10"
        >
            <img
            src="/Premiacion12kdamas.jpeg" 
            alt="Premiación 12K damas"
            className="w-full max-w-4xl rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain"
          />
        </motion.div>
          
        

        {/* Botón opcional */}
        <motion.a
          href="https://eventr.id/004jhRiL"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 bg-gradient-to-r from-[#082E73] to-[#25C2F2] text-white font-bold text-2xl rounded-full shadow-lg hover:shadow-[0_0_25px_#25C2F2] transition-all duration-300"
        >
          Inscríbete
        </motion.a>
      </div>
    </section>
  );
}

export default Premiacion;