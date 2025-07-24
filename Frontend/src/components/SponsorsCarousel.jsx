import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion } from 'framer-motion';

function SponsorsCarousel() {
  const sponsors = [
    { name: 'Itel', logo: '/LogoItel.png' },
    { name: 'RedesPacifico', logo: '/LogoRyT.png' },
   
  
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

