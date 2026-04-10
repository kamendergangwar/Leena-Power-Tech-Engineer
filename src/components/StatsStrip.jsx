import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const StatsStrip = () => {
  const { data } = useData();
  const { stats } = data;
  return (
    <section className="bg-leena-yellow py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <img src={stat.icon} alt="" className="mx-auto h-24 w-24 object-contain md:h-28 md:w-28" />
              <div className="mt-5 font-montserrat text-4xl font-bold text-leena-navy md:text-5xl">{stat.value}</div>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-leena-navy/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
