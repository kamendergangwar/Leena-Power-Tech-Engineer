import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useData } from '../context/DataContext';

const Testimonials = () => {
  const { data } = useData();
  const { testimonials } = data;
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading title="Testimonials" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="relative text-center md:px-6"
            >
              {index < testimonials.length - 1 ? (
                <div className="absolute right-0 top-6 hidden h-[78%] w-px bg-slate-200 md:block" aria-hidden="true" />
              ) : null}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto h-16 w-16 rounded-full object-cover ring-4 ring-leena-yellow/15"
              />
              <p className="mt-6 text-[14px] leading-7 text-slate-600">“{testimonial.quote}”</p>
              <div className="mt-6">
                <h3 className="text-base font-bold text-leena-navy">{testimonial.name}</h3>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
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
