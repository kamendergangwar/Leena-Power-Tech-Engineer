import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { reasons } from '../data/siteContent';

const icons = [ShieldCheck, Wrench, Award];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading title="Why Choose Us ?" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(10,23,61,0.35)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leena-yellow/20 text-leena-navy">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl uppercase tracking-[0.12em] text-leena-navy">{reason.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{reason.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
