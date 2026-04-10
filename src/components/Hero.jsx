import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useData } from '../context/DataContext';

const Hero = () => {
  const { data } = useData();
  const { heroSlides } = data;
  return (
    <section className="relative overflow-hidden bg-slate-200">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="homepage-hero-slider h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[280px] w-full bg-[#111827] sm:h-[420px] md:h-[52vw] md:min-h-[460px] md:max-h-[900px] lg:min-h-[560px]">
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img
                  src={slide.desktop}
                  alt={`Leena Powertech banner ${index + 1}`}
                  className="h-full w-full object-contain"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
