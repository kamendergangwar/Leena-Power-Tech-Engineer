import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { useData } from '../context/DataContext';

const Services = () => {
  const { data } = useData();
  const { services } = data;
  const serviceMap = Object.fromEntries(services.map((service) => [service.title.toLowerCase(), service]));
  const transmission = serviceMap['transmission'];
  const om = serviceMap['o & m'];
  const mep = serviceMap['mep works'];
  const distribution = serviceMap['distribution'];
  const railways = serviceMap['railways & metro'];

  const renderCard = (service, className = '', titleClassName = '') => {
    if (!service) return null;

    return (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`group relative overflow-hidden rounded-sm shadow-[0_20px_60px_-40px_rgba(10,23,61,0.4)] ${className}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5 transition-colors duration-500 group-hover:from-[#111c62]/80" />
        <div className="absolute inset-0 flex items-end p-8 text-center">
          <div className="w-full">
            <h3 className={`font-bold uppercase tracking-[0.14em] text-white ${titleClassName}`}>
              {service.title}
            </h3>
          </div>
        </div>
        <Link to={service.href} className="absolute inset-0" aria-label={`Go to ${service.title}`} />
      </motion.div>
    );
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading title="Our Services" />

        <div className="mt-14 grid gap-4 md:gap-6 xl:grid-cols-3">
          <div className="grid gap-6">
            {renderCard(transmission, 'min-h-[180px] md:min-h-[320px]', 'text-[1.1rem] md:text-[2.2rem]')}
            {renderCard(om, 'min-h-[160px] md:min-h-[240px]', 'text-[1rem] md:text-[1.85rem]')}
          </div>

          <div>
            {renderCard(mep, 'min-h-[340px] md:min-h-[520px] xl:h-full', 'text-[1.15rem] md:text-[2.2rem]')}
          </div>

          <div className="grid gap-6">
            {renderCard(distribution, 'min-h-[160px] md:min-h-[240px]', 'text-[0.95rem] md:text-[1.8rem]')}
            {renderCard(railways, 'min-h-[180px] md:min-h-[280px]', 'text-[0.9rem] md:text-[1.7rem]')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
