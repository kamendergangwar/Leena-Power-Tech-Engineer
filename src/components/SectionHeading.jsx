import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, description, centered = true, light = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={centered ? 'text-center' : ''}
    >
      <h2 className={`text-3xl md:text-4xl uppercase tracking-[0.24em] ${light ? 'text-white' : 'text-leena-navy'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 rounded-full ${centered ? 'mx-auto' : ''} ${light ? 'bg-white' : 'bg-leena-yellow'}`} />
      {description ? (
        <p className={`mt-5 text-base md:text-lg ${light ? 'text-white/80' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
