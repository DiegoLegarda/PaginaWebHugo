import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BannerCarrusel() {
  return (
    <section
      id="banner"
      className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden mt-20"
    >
      {/* Carrusel */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        keyboard={{ enabled: true }}
        speed={1000}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="/FondoFinal.png"
            alt="Banner 1"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Fondocompleto.jpg"
            alt="Banner 2"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Fondo3.jpg"
            alt="Banner 3"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>

      {/* Capa de gradiente para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      {/* Contenido centrado con animaciones */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
        {/* Frase principal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg"
        >
          ¡Corremos por el Cauca, corremos por la vida!
        </motion.h1>

        {/* Fecha con gradiente */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg 
                     bg-gradient-to-r from-[#25C2F2] to-[#B7E300] 
                     text-transparent bg-clip-text"
        >
          16 de Noviembre de 2025
        </motion.h1>

        {/* Botón con animación */}
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

export default BannerCarrusel;
