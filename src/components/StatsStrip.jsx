import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/siteContent';

const StatsStrip = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="grid gap-8 rounded-[32px] bg-leena-navy px-8 py-10 text-white md:grid-cols-3 md:px-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-5"
            >
              <img src={stat.icon} alt="" className="h-16 w-16 rounded-full bg-white/10 object-cover p-1" />
              <div>
                <div className="font-montserrat text-4xl font-bold text-leena-yellow">{stat.value}</div>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/75">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
