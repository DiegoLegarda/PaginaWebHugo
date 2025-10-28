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
          <a
            href="https://eventr.id/004jhRiL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center items-center w-full"
            >
              <img
                src="/categoria6k.jpeg"
                alt="Categoría 6K"
                className="w-full md:w-[80%] max-w-md rounded-2xl shadow-[0_10px_30px_rgba(8,46,115,0.4)] object-contain cursor-pointer"
              />
            </motion.div>
          </a>

          {/* Imagen categoría 12K */}
          <a
            href="https://eventr.id/004jhRiL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center items-center w-full"
            >
              <img
                src="/categoria12K.jpeg"
                alt="Categoría 12K"
                className="w-full md:w-[80%] max-w-md rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] object-contain cursor-pointer"
              />
            </motion.div>
          </a>
        </div>
  
      </div>
    </section>
  );
}

export default Categories;
