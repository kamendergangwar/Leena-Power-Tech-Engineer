import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackCopy = {
  title: 'Solar system Installations',
  intro:
    'Unlike gas and coal, solar energy is renewable, clean and sustainable. Solar power does not pollute our air or contribute to global warming. For many businesses, being “green” and making environmentally-friendly decisions is important to their business goals.',
  advantagesHeading: 'Some Advantages of Solar Energy -',
  advantages: [
    'Renewable Energy Source. Among all the benefits of solar panels, the most important thing is that solar energy is a truly renewable energy source.',
    'Reduces Electricity Bills.',
    'Diverse Applications.',
    'Low Maintenance Costs.',
    'Technology Development.',
  ],
  body:
    'Compared with the approximately 15 GW of solar capacity deployed in 2020, annual solar deployment is 30 GW on average in the early 2020s and grows to 60 GW on average from 2025 to 2030. Similarly substantial solar deployment rates continue in the 2030s and beyond. Photovoltaics (PV) and concentrating solar power are likely to continue to grow rapidly. The National Renewable Energy Laboratory (NREL) projects solar energy could provide 45% of the electricity in the United States by 2050 if the energy system is fully decarbonized and technology costs are projected to continue to be lowered. The goals of this project for Solar Energy System Installations and Energy Efficiency Retrofits (SEER) is to be an efficient organization to implement these SEER activities and to do it in a way that the organization is financially profitable and therefore sustainable, so that the end users get better outcome and society as a whole gets a positive impact.',
  galleryHeading: 'Solar system at Bhoomiputra Bhavan Ulwe',
};

const fallbackGallery = [
  { src: withApiBase('assets/pages/solar/solar-bhoomiputra-1.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 1' },
  { src: withApiBase('assets/pages/solar/solar-bhoomiputra-2.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 2' },
  { src: withApiBase('assets/pages/solar/solar-bhoomiputra-3.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 3' },
  { src: withApiBase('assets/pages/solar/solar-bhoomiputra-4.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 4' },
  { src: withApiBase('assets/pages/solar/solar-bhoomiputra-5.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 5' },
];

const SolarPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.solar];
  const heroImage = pageImages?.[ROUTES.solar]?.hero ?? withApiBase('assets/pages/solar/solar-hero-live.jpg');
  const gallery = pageImages?.[ROUTES.solar]?.gallery?.length ? pageImages[ROUTES.solar].gallery : fallbackGallery;
  const advantagesSection = page?.sections?.[0];
  const bodySection = page?.sections?.[1];
  const gallerySection = page?.sections?.[2];

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/42" aria-hidden="true" />

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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-6 text-left text-[13px] leading-[2] text-slate-700 md:text-[15px]"
          >
            <p>{page?.intro ?? fallbackCopy.intro}</p>
            <div className="space-y-4">
              <p className="font-semibold text-slate-800">
                {advantagesSection?.heading ?? fallbackCopy.advantagesHeading}
              </p>
              <ul className="list-disc space-y-2 pl-6">
                {(advantagesSection?.bullets?.length ? advantagesSection.bullets : fallbackCopy.advantages).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p>{bodySection?.body ?? fallbackCopy.body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-14"
          >
            <h2 className="text-center text-2xl font-bold text-[#102071] md:text-[2rem]">
              {gallerySection?.heading ?? fallbackCopy.galleryHeading}
            </h2>
            <div className="mx-auto mt-6 h-px w-full max-w-4xl bg-slate-200" />
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.article
                key={`${item.src}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                className="overflow-hidden border border-slate-200 bg-white shadow-[0_18px_38px_-24px_rgba(15,23,42,0.32)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarPage;
