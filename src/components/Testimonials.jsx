import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/siteContent';

const Testimonials = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#0a173d_0%,#162d68_55%,#233e84_100%)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading title="Testimonials" light />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[28px] bg-white p-8 shadow-[0_25px_70px_-40px_rgba(0,0,0,0.5)]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-20 w-20 rounded-full object-cover ring-4 ring-leena-yellow/20"
              />
              <p className="mt-6 text-[15px] leading-7 text-slate-600">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="text-lg font-bold text-leena-navy">{testimonial.name}</h3>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">{testimonial.role}</p>
                <p className="mt-1 text-sm font-medium text-leena-yellow">{testimonial.organization}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
