import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useData } from '../context/DataContext';

const icons = [ShieldCheck, Wrench, Award];
const iconClasses = [
  'bg-[#f15a24]/15 text-[#f15a24]',
  'bg-[#f4c20d]/18 text-[#e0a400]',
  'bg-[#3cb54a]/15 text-[#2ea63c]',
];

const WhyChooseUs = () => {
  const { data } = useData();
  const { reasons } = data;
  const backgroundImage = "url('/assets/footer/mep-4.png')";
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[rgba(9,19,72,0.88)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading title="Why Choose Us ?" light />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
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
                className="rounded-sm border border-slate-200 bg-white p-7 text-center shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)]"
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${iconClasses[index]}`}>
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-leena-navy">{reason.title}</h3>
                <p className="mt-4 text-[14px] leading-7 text-slate-600">{reason.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
