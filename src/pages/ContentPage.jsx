import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const ContentPage = ({ page, pathKey }) => {
  const { data } = useData();
  const { routes: ROUTES, pageImages } = data;
  const imageSet = pageImages[pathKey] ?? {};

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-[28px] bg-[linear-gradient(120deg,#0a173d_0%,#1f3778_60%,#2f4e98_100%)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(10,23,61,0.75)] sm:p-8 md:rounded-[32px] md:p-14"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-leena-yellow">Leena Powertech</p>
          <h1 className="mt-4 text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl sm:tracking-[0.12em] md:text-5xl md:tracking-[0.14em]">{page.title}</h1>
          <p className="mt-4 max-w-3xl text-sm text-white/85 sm:text-base md:text-lg">{page.subtitle}</p>
        </motion.div>

        {imageSet.hero ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_-45px_rgba(10,23,61,0.65)] sm:mt-8 sm:p-3 md:rounded-[28px] md:p-4"
          >
            <img src={imageSet.hero} alt={`${page.title} visual`} className="h-[220px] w-full rounded-[18px] object-cover sm:h-[280px] md:h-[360px] md:rounded-[20px]" />
          </motion.div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-45px_rgba(10,23,61,0.55)] sm:p-8 md:mt-10 md:rounded-[28px] md:p-12"
        >
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{page.intro}</p>

          <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
            {page.sections.map((section) => (
              <article key={section.heading} className="rounded-2xl bg-slate-50 p-5 sm:p-6 md:p-8">
                <h2 className="text-xl uppercase tracking-[0.1em] text-leena-navy sm:text-2xl sm:tracking-[0.12em]">{section.heading}</h2>
                {section.body ? <p className="mt-4 leading-7 text-slate-600">{section.body}</p> : null}
                {section.bullets ? (
                  <ul className="mt-4 space-y-3 text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-leena-yellow" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          {imageSet.gallery?.length ? (
            <div className="mt-10">
              <h3 className="text-xl uppercase tracking-[0.14em] text-leena-navy">Project Gallery</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {imageSet.gallery.map((item) => (
                  <div key={item.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img src={item.src} alt={item.alt} className="h-44 w-full object-cover" />
                    {item.caption ? (
                      <div className="border-t border-slate-200 bg-white px-4 py-3">
                        <p className="text-sm font-medium text-leena-navy">{item.caption}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10">
            <Link
              to={ROUTES.contact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-leena-yellow px-8 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-leena-navy transition hover:bg-leena-navy hover:text-white sm:w-auto"
            >
              Contact Team
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentPage;
