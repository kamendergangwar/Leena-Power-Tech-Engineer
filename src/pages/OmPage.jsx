import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackCopy = {
  title: 'Operation & Maintenance',
  paragraphs: [
    'Electrical systems need to ensure continued compliance with periodic servicing and repair. Our team helps in maintaining electrical systems like substations, overhead & underground electrical distribution system, and exterior lighting system to ensure that they work without any hindrance for a long time. Such maintenance helps to prevent system and equipment failure while ensuring maximum safety and efficiency in the utilization of the facilities.',
    'We have done maintenance work in numerous places in Navi Mumbai like Nerul station, Baman Dongri station, Kharghar metro, and Bhoomiputra Bhavan. We help the utilities and power companies in maximizing their efficiency and providing their consumers with uninterrupted service.',
  ],
};

const fallbackGallery = [
  {
    src: withApiBase('assets/pages/om/om-nerul-substation.png'),
    alt: 'Nerul Substation',
    caption: 'Nerul Substation',
  },
  {
    src: withApiBase('assets/pages/om/om-bhoomiputra-bhavan.png'),
    alt: 'Bhoomiputra Bhavan',
    caption: 'Bhoomiputra Bhavan',
  },
  {
    src: withApiBase('assets/pages/om/om-patna-substation.png'),
    alt: 'Patna Substation',
    caption: 'Patna Substation',
  },
  {
    src: withApiBase('assets/pages/om/om-navi-mumbai-metro.png'),
    alt: 'Navi Mumbai Metro',
    caption: 'Navi Mumbai Metro',
  },
  {
    src: withApiBase('assets/pages/om/om-baman-dongri-station.png'),
    alt: 'Baman Dongri Railway station',
    caption: 'Baman Dongri Railway station',
  },
];

const OmPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.om];
  const heroImage = pageImages?.[ROUTES.om]?.hero ?? withApiBase('assets/pages/om/om-hero.png');
  const gallery = pageImages?.[ROUTES.om]?.gallery?.length ? pageImages[ROUTES.om].gallery : fallbackGallery;
  const paragraphs = [
    page?.intro ?? fallbackCopy.paragraphs[0],
    page?.sections?.[0]?.body ?? fallbackCopy.paragraphs[1],
  ];

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/60" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[420px] max-w-[1600px] items-center justify-center px-4 py-24 text-center md:min-h-[620px] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              {page?.title ?? fallbackCopy.title}
            </h1>
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-leena-yellow" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-8 text-center text-[15px] leading-[2] text-slate-700 md:text-[17px]"
          >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <div className="mx-auto mt-14 h-px w-full max-w-4xl bg-slate-200" />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.article
                key={`${item.src}-${item.caption ?? item.alt}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-slate-200 bg-[#f2f2f2] px-6 py-5 text-center">
                  <h2 className="text-xl font-bold text-[#102071] md:text-[1.7rem]">
                    {item.caption ?? item.alt}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OmPage;
