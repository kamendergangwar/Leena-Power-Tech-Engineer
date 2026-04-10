import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackCopy = {
  title: 'Lift and Escalators',
  paragraph:
    'With increasing modernization of places across the country, our company has forayed into the business of lifts and escalators. In collaboration with our partners, we provide seamless solutions to make places more accessible.',
};

const LiftsPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.liftEscalators];
  const heroImage = pageImages?.[ROUTES.liftEscalators]?.hero ?? withApiBase('assets/pages/lifts/lifts-hero-live.png');
  const paragraph = page?.intro ?? fallbackCopy.paragraph;

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/48" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[360px] max-w-[1600px] items-center justify-center px-4 py-20 text-center md:min-h-[520px] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {page?.title ?? fallbackCopy.title}
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-leena-yellow" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-center text-[13px] leading-[2] text-slate-700 md:text-[15px]"
          >
            <p>{paragraph}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LiftsPage;
