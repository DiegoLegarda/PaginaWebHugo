import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion } from 'framer-motion';

function SponsorsCarousel() {
  const sponsors = [
    { name: 'Patrocinador 1', logo: '/campanario.jpg' },
    { name: 'Patrocinador 2', logo: '/Hotel.png' },
    { name: 'Patrocinador 3', logo: '/SuperGiros.png' },
    { name: 'Patrocinador 4', logo: '/sponsor4.png' },
    { name: 'Patrocinador 5', logo: '/sponsor5.png' },
    { name: 'Patrocinador 6', logo: '/sponsor6.png' },
  ];

  return (
    <section id="sponsors" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Patrocinadores</h2>
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-100 p-4 rounded shadow flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-24 object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SponsorsCarousel;

