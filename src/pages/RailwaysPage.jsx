import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackCopy = {
  title: 'Railways & Metro',
  paragraphs: [
    'Metro railways in urban areas have grown exponentially across the country and the volume of passengers continue to grow for rail transit systems for a safe, affordable, and reliable transportation service. LPTE has strategically ventured into this business vertical which shall contribute to growth of Indian infrastructure.',
    'LPTE assists in Metro Rail Electrification Projects by enabling integrated project execution with increased efficiency, stringent safety measures and higher visibility across all projects. LPTE offers its competence in Design, Engineering, Installation, Testing, and Commissioning of multi-disciplinary Metro & Rail Projects with the capability to build, power and connect substations. Our skills, experience and capability lie in power and electrification of overhead lines, including the installation of new lines, integration with multiple stake holders for common interest in the growth of nation building.',
  ],
};

const fallbackGallery = [
  { src: withApiBase('assets/pages/railways/railway-navi-mumbai-station.png'), alt: 'Navi Mumbai Railway station', caption: 'Navi Mumbai Railway station' },
  { src: withApiBase('assets/pages/railways/railway-baman-dongri-station-1.png'), alt: 'Baman Dongri Railway station', caption: 'Baman Dongri Railway station' },
  { src: withApiBase('assets/pages/railways/railway-koparkhairane-station.png'), alt: 'Koparkhairane Station', caption: 'Koparkhairane Station' },
  { src: withApiBase('assets/pages/railways/railway-baman-dongri-station-2.png'), alt: 'Baman Dongri Railway station', caption: 'Baman Dongri Railway station' },
  { src: withApiBase('assets/pages/railways/railway-mmrda-1.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
  { src: withApiBase('assets/pages/railways/railway-mmrda-2.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
  { src: withApiBase('assets/pages/railways/railway-mmrda-3.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
  { src: withApiBase('assets/pages/railways/railway-mmrda-4.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
  { src: withApiBase('assets/pages/railways/railway-mmrda-5.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
  { src: withApiBase('assets/pages/railways/railway-mmrda-6.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
];

const RailwaysPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.railways];
  const heroImage = pageImages?.[ROUTES.railways]?.hero ?? withApiBase('assets/pages/railways/railway-hero-live.jpeg');
  const gallery = pageImages?.[ROUTES.railways]?.gallery?.length ? pageImages[ROUTES.railways].gallery : fallbackGallery;
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
        <div className="absolute inset-0 bg-[#000000]/56" aria-hidden="true" />

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
            className="space-y-7 text-center text-[13px] leading-[2] text-slate-700 md:text-[15px]"
          >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <div className="mx-auto mt-10 h-px w-full max-w-4xl bg-slate-200" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.article
                key={`${item.src}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
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
                <div className="border-t border-slate-200 bg-[#f2f2f2] px-4 py-3 text-center">
                  <h2 className="text-sm font-bold text-[#102071] md:text-[15px]">
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

export default RailwaysPage;
