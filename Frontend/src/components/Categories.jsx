import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Categories() {
   return (
     <section id="categories">
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#B7E300] p-10">
      <h1 className="text-5xl font-extrabold text-[#082E73] mb-12 drop-shadow-lg">
        Categorías Running Popayán
      </h1>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Categoría 6K */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#25C2F2] text-[#082E73] rounded-2xl p-10 text-center font-bold text-5xl shadow-[0_10px_30px_rgba(8,46,115,0.4)]"
        >
          6K <span className="block text-2xl mt-2 text-[#1487C9]">RUta verde</span>
        </motion.div>

        {/* Categoría 12K */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#1487C9] text-white rounded-2xl p-10 text-center font-bold text-5xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          12K <span className="block text-2xl mt-2 text-[#B7E300]">Ruta del barranquero</span>
        </motion.div>
      </div>
        {/* Botón de inscripción */}
      <motion.a
        href="https://eventr.id/004jhRiL"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 px-10 py-4 bg-gradient-to-r from-[#082E73] to-[#25C2F2] text-white font-bold text-2xl rounded-full shadow-lg hover:shadow-[0_0_25px_#25C2F2] transition-all duration-300"
      >
        Inscríbete
      </motion.a>
    </div>
    </section>
  );
}

export default Categories;