import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Premiacion() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoom = (src) => setZoomedImage(src);
  const closeZoom = () => setZoomedImage(null);

  return (
    <section id="premiacion" className="p-8 bg-white">
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        {/* Título */}
        <h1 className="text-5xl font-extrabold text-[#082E73] mb-12 drop-shadow-lg text-center">
          Premiación Running Popayán
        </h1>

        {/* ==== Imagen 6K ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full mb-10"
        >
          <img
            src="/Premiacion6K.jpeg" // 🔹 agrega tu imagen en /public/
            alt="Premiación 6K"
            className="w-full max-w-4xl rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleZoom("/Premiacion6K.jpeg")}
          />
        </motion.div>

        {/* ==== Imagen 12K ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full mb-10"
        >
          <img
            src="/Premiacion12K.jpeg"
            alt="Premiación 12K"
            className="w-full max-w-4xl rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleZoom("/Premiacion12K.jpeg")}
          />
        </motion.div>

        {/* ==== Imagen 12K Damas ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full"
        >
          <img
            src="/Premiacion12kdamas.jpeg"
            alt="Premiación 12K Damas"
            className="w-full max-w-4xl rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleZoom("/Premiacion12kdamas.jpeg")}
          />
        </motion.div>

        {/* ==== Botón de inscripción ==== */}
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

      {/* ==== Overlay con animación profesional ==== */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeZoom}
          >
            <motion.div
              className="relative p-2 max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.4,
              }}
            >
              {/* Botón de cierre */}
              <button
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black rounded-full p-2 text-xl z-50 transition"
                onClick={closeZoom}
              >
                ✕
              </button>

              {/* Imagen ampliada */}
              <motion.img
                src={zoomedImage}
                alt="Premiación ampliada"
                className="rounded-xl shadow-2xl max-w-[95vw] max-h-[90vh] object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Premiacion;
