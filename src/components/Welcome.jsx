import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Welcome = () => {
  const { data } = useData();
  const { welcomeContent } = data;
  const titleParts = welcomeContent.title.replace(/\s+/g, ' ').trim().split('LEENA POWERTECH');

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase tracking-[0.14em] text-leena-navy md:text-[2.55rem]">
              <span className="text-[#1a2d73]">{titleParts[0]?.trim() || 'WELCOME TO'}</span>{' '}
              <span className="text-leena-yellow">LEENA POWERTECH</span>
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-leena-yellow" />
          </div>

          <div className="mx-auto mt-8 max-w-4xl text-[15px] leading-[2] text-slate-600 md:text-[16px]">
            {welcomeContent.body.map((paragraph) => (
              <p key={paragraph} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            to={welcomeContent.ctaHref}
            className="mt-8 inline-flex rounded-sm bg-leena-yellow px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-leena-navy shadow-md transition-all hover:bg-leena-navy hover:text-white"
          >
            {welcomeContent.ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
