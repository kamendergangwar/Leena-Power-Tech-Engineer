import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const EventsPage = () => {
  const { data } = useData();
  const { routes: ROUTES } = data;
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

  const annualDayPics = [
    'https://leenapowertech.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-3.34.55-PM-5.jpeg',
    'https://leenapowertech.in/wp-content/uploads/2022/04/CM-of-Maharashtra-scaled.jpg',
    'https://leenapowertech.in/wp-content/uploads/2022/04/Governer-of-GOA-scaled.jpg',
    'https://leenapowertech.in/wp-content/uploads/2022/04/Powerminister.jpg',
    'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T120627.482.png',
  ];

  const rawEvents = [
    {
      title: 'Annual Day Highlights',
      date: '2023',
      location: 'Main Office',
      description: 'Celebrating our milestones and honoring the incredible people who drive Leena Powertech forward.',
      image: '/assets/pages/events/events-1.jpeg',
      category: 'Celebration'
    },
    {
      title: 'National Safety Week',
      date: '2024',
      location: 'Project Sites',
      description: 'Our commitment to safety is absolute. Celebrating National Safety Week across all our PAN-India project locations.',
      image: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T121115.248.png',
      category: 'Safety'
    },
    {
      title: 'CSR Initiatives',
      date: '2024',
      location: 'Rural Communities',
      description: 'Empowering communities through our dedicated social responsibility programs and healthcare drives.',
      image: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T120613.271.png',
      category: 'CSR'
    },
    {
      title: 'Technical Training',
      date: '2024',
      location: 'Training Centre',
      description: 'Investing in our engineers to master the latest EHV and GIS technological advancements.',
      image: 'https://leenapowertech.in/wp-content/uploads/2023/04/training.jpg',
      category: 'Learning'
    }
  ];

  const events = rawEvents.map(event => ({
    ...event,
    image: event.image.startsWith('/') ? `${API_URL}${event.image}` : event.image
  }));

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative flex h-[350px] items-center overflow-hidden md:h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://leenapowertech.in/wp-content/uploads/2023/08/events-1.png')`,
          }}
        >
          <div className="absolute inset-0 bg-leena-navy/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl font-bold text-white md:text-6xl"
          >
            Events
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
      <section className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-leena-yellow">Interactive Highlights</span>
            <h2 className="text-4xl font-bold text-leena-navy mt-2 uppercase tracking-tight">Annual Day Chronicle</h2>
            <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed">
              Explore our journeys through these integrated event photographs. A testament to our team spirit and corporate milestones.
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
                <SwiperSlide key={index} className="w-[300px] md:w-[600px] h-[400px] md:h-[500px]">
                  <div className="h-full w-full overflow-hidden rounded-[32px] shadow-2xl border-4 border-white">
                    <img src={pic} alt={`Annual Day ${index + 1}`} className="h-full w-full object-cover" />
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
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {events.slice(1).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-leena-navy to-transparent">
                     <span className="inline-block px-3 py-1 bg-leena-yellow text-[10px] font-black uppercase tracking-widest text-leena-navy rounded mb-3">{event.category}</span>
                     <h3 className="text-xl font-bold text-white uppercase tracking-wider">{event.title}</h3>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-leena-navy mb-2">
                    <Calendar size={12} className="text-leena-yellow" /> {event.date}
                  </div>
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
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Camera className="h-10 w-10 text-leena-navy mb-4 mx-auto md:mx-0" />
            <h2 className="text-2xl font-bold text-leena-navy uppercase tracking-[0.2em]">Capture the Moment</h2>
            <p className="mt-2 text-slate-500 max-w-md">
              Discover the vibrant culture and dedicated team behind our power engineering excellence.
            </p>
          </div>
          <a 
            href="https://leenapowertech.in/wp-content/uploads/2023/08/event.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 rounded-full bg-leena-navy px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-2xl hover:bg-leena-yellow hover:text-leena-navy transition-all hover:scale-105"
          >
            Download Event Archive (PDF)
            <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
