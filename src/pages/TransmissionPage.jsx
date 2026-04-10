import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';

const TransmissionPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const transmissionPath = ROUTES?.transmission || '/transmission';
  const page = pageContent?.[transmissionPath];
  const images = pageImages?.[transmissionPath] ?? {};
  const capabilities = Array.isArray(page?.sections?.[0]?.bullets) ? page.sections[0].bullets : [];
  const pageTitle = page?.title || 'Transmission';
  const pageIntro = page?.intro || 'Content for this section will be available shortly.';
  const heroBannerSrc = images.heroBanner || images.hero || null;
  const heroImageSrc = images.hero || images.heroBanner || null;

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          {heroBannerSrc ? (
            <img
              src={heroBannerSrc}
              alt={`${pageTitle} hero`}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-[#102071]" />
          )}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative mx-auto flex min-h-[250px] max-w-6xl items-center justify-center px-4 py-14 text-center md:min-h-[360px] md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="sr-only"
          >
            {pageTitle}
          </motion.h1>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-[1060px] px-4 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-[980px] text-[11px] leading-5 text-[#4d4d4d] md:text-[12px]"
          >
            {pageIntro}
          </motion.p>

          <div className="mx-auto mt-10 grid max-w-[950px] gap-8 md:grid-cols-[360px_minmax(0,1fr)] md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="overflow-hidden border border-[#d8d8d8] bg-white"
            >
              {heroImageSrc ? (
                <img
                  src={heroImageSrc}
                  alt="Navi Mumbai Substation"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="aspect-[4/3] w-full bg-slate-100" />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="pt-1 md:pl-3"
            >
              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[11px] leading-5 text-[#4d4d4d] md:text-[12px]">
                    <CheckCircle2 className="mt-[2px] h-[13px] w-[13px] flex-shrink-0 text-[#253f8d]" strokeWidth={2.6} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mx-auto mt-10 max-w-[950px] border-t border-[#e5e5e5]" />

          {images.gallery?.length ? (
            <div className="mx-auto mt-8 grid max-w-[950px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.gallery.map((item, index) => (
                <motion.article
                  key={`${item.src}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
                  className="overflow-hidden border border-[#dddddd] bg-white shadow-[0_6px_20px_-18px_rgba(0,0,0,0.45)]"
                >
                  <div className="group relative aspect-[1.22/1] overflow-hidden bg-white">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
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

export default TransmissionPage;
