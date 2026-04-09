import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const AwardsPage = () => {
  const { data } = useData();
  const { routes: ROUTES, specialPages } = data;
  const content = specialPages?.[ROUTES.awards] ?? {};
  const awards = content.awards ?? [];
  const heroImage = awards[0]?.image;

  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden py-28 text-white md:py-36">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={content.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl justify-center px-4 text-center md:px-12">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="text-4xl font-bold text-[#f7f7f7] md:text-6xl"
            >
              {content.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
              className="mx-auto mt-6 h-1.5 w-24 origin-center rounded-full bg-leena-yellow"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mx-auto max-w-4xl px-2 text-center"
          >
            <h3 className="text-2xl font-bold text-leena-navy md:text-3xl">{content.introHeading}</h3>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.intro}</p>
          </motion.div>

          <div className="mt-14 flex justify-center">
            <div className="grid w-full max-w-[1110px] grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="group w-full max-w-[350px]"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-200 shadow-[0_24px_55px_-40px_rgba(10,23,61,0.5)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#102071]/10 transition duration-300 group-hover:bg-[#102071]/0" />
                  <div className="absolute inset-0 translate-y-[-100%] bg-[rgba(16,32,113,0.8)] px-7 py-8 text-center transition duration-500 ease-out group-hover:translate-y-0">
                    <div className="flex h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold text-[#f7b500]">{item.title}</h2>
                      <div className="mt-4 h-px w-16 bg-[#fafafa]" />
                      {item.description ? (
                        <p className="mt-5 text-sm leading-7 text-[#ffffff]">{item.description}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
