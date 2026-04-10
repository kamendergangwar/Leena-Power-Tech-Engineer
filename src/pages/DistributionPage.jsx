import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

const DistributionPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const distributionPath = ROUTES?.distribution || '/distribution';
  const page = pageContent?.[distributionPath];
  const images = pageImages?.[distributionPath] ?? {};
  const introParagraphs = Array.isArray(page?.introParagraphs) && page.introParagraphs.length
    ? page.introParagraphs
    : page?.intro
      ? [page.intro]
      : ['Content for this section will be available shortly.'];
  const statsColumns = Array.isArray(page?.statsColumns) ? page.statsColumns : [];
  const pageTitle = page?.title || 'Distribution';
  const heroBannerSrc = images.heroBanner || images.hero || null;

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
        </div>
        <div className="relative mx-auto flex min-h-[220px] max-w-6xl items-center justify-center px-4 py-10 md:min-h-[300px] md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="sr-only"
          >
            {pageTitle}
          </motion.h1>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-[1080px] px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4 text-[11px] leading-[1.7] text-[#4d4d4d] md:text-[12px]"
          >
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {statsColumns.map((column, columnIndex) => (
              <motion.ul
                key={`stats-${columnIndex}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: columnIndex * 0.08, ease: 'easeOut' }}
                className="space-y-3"
              >
                {column.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[11px] leading-5 text-[#4d4d4d] md:text-[12px]">
                    <ArrowRightCircle className="mt-[2px] h-[13px] w-[13px] flex-shrink-0 text-[#253f8d]" strokeWidth={2.3} />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-[960px] border-t border-[#e5e5e5]" />

          {images.gallery?.length ? (
            <div className="mx-auto mt-8 grid max-w-[960px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.gallery.map((item, index) => (
                <motion.article
                  key={`${item.src}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: index * 0.03, ease: 'easeOut' }}
                  className="overflow-hidden border border-[#dcdcdc] bg-white shadow-[0_6px_18px_-18px_rgba(0,0,0,0.45)]"
                >
                  <div className="aspect-[1.22/1] overflow-hidden bg-white">
                    <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-h-[38px] border-t border-[#ececec] px-3 py-2 text-center">
                    <p className="text-[9px] font-semibold leading-4 text-[#1b2d72] md:text-[10px]">
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

export default DistributionPage;
