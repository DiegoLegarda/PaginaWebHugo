import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BannerCarrusel() {
  return (
    <section id="banner" className="mt-24 w-full max-h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        keyboard={{ enabled: true }}
        speed={1000}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Bannermodelo1.png" alt="Banner 1" className="object-contain w-full max-h-[85vh]" />
        </SwiperSlide>        
      </Swiper>
    </section>
  );
}

export default BannerCarrusel;

