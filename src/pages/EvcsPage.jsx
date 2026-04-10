import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackCopy = {
  title: 'Electric Vehicle Charging Stations',
  paragraphs: [
    'The challenge of increasing pollution and decreasing fuel reserves presented the opportunity to invent Electric Vehicle as an environment-friendly means of transport.',
    'Sharing the vision of Govt of India to have Electric Vehicles for public transport by 2030, LPT is excited to offer Electric Mobility Solutions through setting up Electric Vehicle Charging Stations (EVCS).',
    'Through joint ventures with international partners, LPT EVCS aims at re-defining the transport scenario in India.',
  ],
};

const EvcsPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.evcs];
  const heroImage = pageImages?.[ROUTES.evcs]?.hero ?? withApiBase('assets/pages/evcs/evcs-hero-live.png');
  const contentImage =
    pageImages?.[ROUTES.evcs]?.gallery?.[0]?.src ?? withApiBase('assets/pages/evcs/evcs-station-live.png');

  const paragraphs = [
    page?.intro ?? fallbackCopy.paragraphs[0],
    page?.sections?.[0]?.body ?? fallbackCopy.paragraphs[1],
    page?.sections?.[1]?.body ?? fallbackCopy.paragraphs[2],
  ];

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/45" aria-hidden="true" />

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

      <section className="px-4 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr] md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="overflow-hidden bg-slate-100 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
            >
              <img
                src={contentImage}
                alt={pageImages?.[ROUTES.evcs]?.gallery?.[0]?.alt ?? 'Electric vehicle charging station'}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-6 text-left text-[14px] leading-[2] text-slate-700 md:text-[15px]"
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvcsPage;
