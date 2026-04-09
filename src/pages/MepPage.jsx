import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useData } from '../context/DataContext';

const MepPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent[ROUTES.mep];
  const images = pageImages[ROUTES.mep] ?? {};
  const expertise = page.sections.find((section) => section.heading === 'Our Expertise');
  const trackRecord = page.sections.find((section) => section.heading === 'Project Track Record');

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.heroBanner || images.hero}
            alt={`${page.title} hero`}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="relative mx-auto flex min-h-[320px] max-w-6xl items-center justify-center px-4 py-24 text-center md:min-h-[420px] md:px-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl font-bold tracking-[0.06em] text-white md:text-6xl"
            >
              {page.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
              className="mx-auto mt-6 h-1 w-16 origin-center bg-leena-yellow"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-5xl text-[12px] leading-6 text-[#4d4d4d] md:text-[13px]"
          >
            {page.intro}
          </motion.p>

          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="overflow-hidden rounded-[10px] border border-[#dedede] bg-white"
            >
              <img
                src={images.hero}
                alt="Spaghetti Housing Kharghar"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="pt-1"
            >
              <h2 className="text-[26px] font-bold text-[#142b76] md:text-[30px]">Our Expertise</h2>
              <ul className="mt-5 space-y-3">
                {expertise?.bullets?.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] leading-5 text-[#4d4d4d] md:text-[13px]">
                    <ChevronRight className="mt-[2px] h-4 w-4 flex-shrink-0 text-[#6c6c6c]" strokeWidth={2.3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {trackRecord?.body ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="mt-8 text-[12px] leading-6 text-[#4d4d4d] md:text-[13px]"
            >
              {trackRecord.body}
            </motion.p>
          ) : null}

          <div className="mt-8 border-t border-[#e5e5e5]" />

          {images.gallery?.length ? (
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {images.gallery.map((item, index) => (
                <motion.article
                  key={`${item.src}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                  className="overflow-hidden border border-[#e4e4e4] bg-white"
                >
                  <div className="aspect-[1.18/1] bg-white">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-h-[42px] border-t border-[#ececec] px-3 py-2 text-center">
                    <p className="text-[10px] font-semibold leading-4 text-[#1a2d73] md:text-[11px]">
                      {item.caption || item.alt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default MepPage;
