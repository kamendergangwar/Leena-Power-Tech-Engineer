import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Camera, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { useData } from '../context/DataContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const EventsPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES, specialPages } = data;
  const eventsPath = ROUTES?.events || '/events';
  const page = pageContent?.[eventsPath];
  const imageSet = pageImages?.[eventsPath] ?? {};
  const eventContent = specialPages?.[eventsPath] ?? {};
  const annualDayPics = Array.isArray(eventContent.annualDayPics) ? eventContent.annualDayPics : [];
  const events = Array.isArray(eventContent.featuredEvents) ? eventContent.featuredEvents : [];
  const archiveUrl = eventContent.archiveUrl?.trim() || '';
  const pageTitle = page?.title || 'Events';
  const pageIntro = page?.intro || 'Updates and highlights from our team activities.';
  const heroSrc = imageSet.hero || null;

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative flex h-[280px] items-center overflow-hidden sm:h-[350px] md:h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: heroSrc ? `url('${heroSrc}')` : 'linear-gradient(135deg,#0b1f67 0%,#1c3f8d 100%)',
          }}
        >
          <div className="absolute inset-0 bg-leena-navy/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-12">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
          >
            {pageTitle}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 h-1 w-20 bg-leena-yellow rounded-full origin-left"
          ></motion.div>
        </div>
      </section>

      {/* Album Section: Annual Day Flipbook with Integrated Pics */}
      <section className="bg-slate-50 px-4 py-16 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-16 md:text-left">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-leena-yellow">Interactive Highlights</span>
            <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-leena-navy sm:text-4xl">
              {events[0]?.title || 'Annual Day Chronicle'}
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed">
              {pageIntro}
            </p>
          </div>

          <div className="relative">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
              className="w-full pb-12 pt-8"
            >
              {annualDayPics.map((pic, index) => (
                <SwiperSlide key={index} className="h-[320px] w-[82vw] max-w-[300px] sm:h-[400px] sm:w-[300px] md:h-[500px] md:w-[600px] md:max-w-none">
                  <div className="h-full w-full overflow-hidden rounded-[32px] shadow-2xl border-4 border-white">
                    {pic ? (
                      <img src={pic} alt={`Annual Day ${index + 1}`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-500">No Image</div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-leena-navy shadow-xl hover:bg-leena-yellow transition-colors hidden md:flex">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-leena-navy shadow-xl hover:bg-leena-yellow transition-colors hidden md:flex">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Other Ongoing Chronicles */}
      <section className="bg-white px-4 py-16 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
            {events.slice(1).map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-500">No Image</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-leena-navy to-transparent">
                     <span className="inline-block px-3 py-1 bg-leena-yellow text-[10px] font-black uppercase tracking-widest text-leena-navy rounded mb-3">{event.category}</span>
                     <h3 className="text-xl font-bold text-white uppercase tracking-wider">{event.title}</h3>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-leena-navy mb-2">
                    <Calendar size={12} className="text-leena-yellow" /> {event.date}
                  </div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {event.location}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capture Section */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-12">
          <div className="text-center md:text-left">
            <Camera className="h-10 w-10 text-leena-navy mb-4 mx-auto md:mx-0" />
            <h2 className="text-2xl font-bold text-leena-navy uppercase tracking-[0.2em]">Capture the Moment</h2>
            <p className="mt-2 text-slate-500 max-w-md">
              Discover the vibrant culture and dedicated team behind our power engineering excellence.
            </p>
          </div>
          {archiveUrl ? (
            <a 
              href={archiveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-4 rounded-full bg-leena-navy px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105 hover:bg-leena-yellow hover:text-leena-navy sm:w-auto sm:px-10 sm:py-5"
            >
              Download Event Archive (PDF)
              <ExternalLink size={18} />
            </a>
          ) : (
            <span className="inline-flex w-full items-center justify-center gap-4 rounded-full bg-slate-300 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-slate-600 sm:w-auto sm:px-10 sm:py-5">
              Archive Unavailable
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
