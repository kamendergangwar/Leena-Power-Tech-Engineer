import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { clientLogos } from '../data/siteContent';

const Clients = () => {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 md:px-12"
      >
        <SectionHeading title="Our Clients" description="See some of our satisfied clients over the world." />

        <div className="relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="mt-14 flex w-max items-center gap-4"
          >
            {logos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex h-24 w-32 flex-shrink-0 items-center justify-center rounded-[20px] border border-slate-200 bg-white px-4 py-3 shadow-sm md:h-28 md:w-36"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-14 max-w-[7.5rem] object-contain saturate-110 transition-transform duration-300 md:max-h-16 md:max-w-[8.5rem]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Clients;
