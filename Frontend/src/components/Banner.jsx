import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BannerCarrusel() {
  return (
    <section
      id="banner"
      className="absolute top-0 left-0 w-full z-50 h-[55vh] overflow-hidden pt-24"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        keyboard={{ enabled: true }}
        speed={1000}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <img
            src="/Bannermodelo1.png"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BannerCarrusel;
