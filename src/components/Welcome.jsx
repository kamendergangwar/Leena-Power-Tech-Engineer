import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { welcomeContent } from '../data/siteContent';

const Welcome = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={welcomeContent.title} />

          <div className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            {welcomeContent.body.map((paragraph) => (
              <p key={paragraph} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={welcomeContent.ctaHref}
            className="mt-10 inline-flex rounded-full bg-leena-yellow px-10 py-3 font-bold uppercase tracking-[0.14em] text-leena-navy shadow-md transition-all hover:bg-leena-navy hover:text-white"
          >
            {welcomeContent.ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
