import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { services } from '../data/siteContent';

const Services = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading title="Our Services" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] h-[320px] cursor-pointer shadow-[0_20px_60px_-40px_rgba(10,23,61,0.4)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent group-hover:from-leena-navy/80 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center transition-all duration-500">
                <h3 className="text-2xl font-bold uppercase tracking-[0.18em] text-white">
                  {service.title}
                </h3>
                <div className="mx-auto mt-4 h-0.5 w-12 bg-leena-yellow" />
                <a
                  href={service.href}
                  className="mt-6 inline-flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full border border-white/70 px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] text-white"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
          <div className="hidden rounded-[28px] bg-leena-navy p-12 text-center text-white lg:flex lg:items-center lg:justify-center">
            <div>
              <h4 className="text-xl font-bold uppercase tracking-[0.18em] mb-4">Need an Expert?</h4>
              <p className="mb-6 opacity-80">We provide integrated solutions for power, electrification, and infrastructure delivery.</p>
              <a href="https://leenapowertech.in/contact/" className="rounded-full bg-leena-yellow px-6 py-2 font-bold uppercase text-sm text-leena-navy hover:bg-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
