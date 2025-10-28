import { motion } from "framer-motion";

function Categories() {
  return (
    <section id="categories">
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#B7E300] p-10">
        <h1 className="text-5xl font-extrabold text-[#082E73] mb-12 drop-shadow-lg text-center">
          Categorías Running Popayán
        </h1>

        {/* Contenedor de imágenes */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl justify-items-center">
          {/* Imagen categoría 6K */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center items-center w-full"
          >
            <img
              src="/categoria6k.jpeg" // 🖼️ cambia por el nombre de tu imagen
              alt="Categoría 6K"
              className="w-full md:w-[80%] max-w-md rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain"
            />
          </motion.div>

          {/* Imagen categoría 12K */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center items-center w-full"
          >
            <img
              src="/categoria12K.jpeg" // 🖼️ cambia por el nombre de tu imagen
              alt="Categoría 12K"
              className="w-full md:w-[80%] max-w-md rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] object-contain"
            />
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
