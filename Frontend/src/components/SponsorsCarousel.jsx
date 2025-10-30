import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion } from 'framer-motion';

function SponsorsCarousel() {
  const sponsors = [
     { name: 'smartfit', logo: '/SmartFit.jpeg' },       
    { name: 'eurosport', logo: '/euroesport.jpeg' },
    { name: 'caucano', logo: '/Caucano.jpeg' },
    { name: 'Itel', logo: '/Itel.jpeg' }, 
    { name: 'yawuazu', logo: '/Yawazu.jpeg' },
    { name: 'Achalai', logo: '/Achalai.jpeg' },
    { name: 'Tout', logo: '/Tout.jpeg' },
    { name: 'unicauca', logo: '/Unicauca.jpeg' },
    { name: 'postobon', logo: '/Postobon.jpeg' },
    { name: 'andresbello', logo: '/Andresbello.jpeg' },
    { name: 'antioquenho', logo: '/Antioquenho.jpeg' },
    { name: 'sdeporte', logo: '/SecretariaDeporte.jpeg' },
    { name: 'byloco', logo: '/Byloco.jpeg' },
    { name: 'farmacenter', logo: '/Farmacenter.jpeg' },
    { name: 'indeprotes', logo: '/Indeportes.jpeg' },
    { name: 'paresport', logo: '/Paresport.jpeg' },
    { name: 'supergiros', logo: '/Supergiros.jpeg' },
    { name: 'reserva', logo: '/Reservacampestre.jpeg' },
    { name: 'RedesPacifico', logo: '/Redes.jpeg' }
   
  
  ];

  

  return (
    <section id="sponsors" className="p-8 bg-white">
       <h1 className="text-5xl font-extrabold text-[#082E73] mb-12 drop-shadow-lg text-center">
          Nuestros Patrocinadores
        </h1>
      
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 500 }}
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
              className="bg-gradient-to-r from-[#082E73] to-[#25C2F2] p-1 rounded shadow flex items-center justify-center"
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

