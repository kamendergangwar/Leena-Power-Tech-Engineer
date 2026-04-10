import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, X } from 'lucide-react';
import { useData } from '../context/DataContext';

function LeaderModal({ leader, onClose }) {
  const leaderImage = leader?.detailImage || leader?.image || null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-3 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#1c86c6] hover:bg-slate-100 transition-colors z-10"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center p-6 sm:p-8 md:p-10">
          {leaderImage ? (
            <img
              src={leaderImage}
              alt={leader.name}
              className="mb-6 w-full max-w-[210px] rounded-lg border border-slate-100 shadow-sm sm:mb-8 sm:max-w-[250px]"
            />
          ) : (
            <div className="mb-6 flex h-[260px] w-full max-w-[210px] items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-sm text-slate-500 sm:mb-8 sm:max-w-[250px]">
              No Image
            </div>
          )}
          <h3 className="text-center font-montserrat text-xl font-bold text-[#102071] sm:text-[23px]">{leader.name}</h3>
          <h5 className="mt-2 text-center font-montserrat text-xs font-medium uppercase tracking-[0.22em] text-[#212121] sm:text-[14px] sm:tracking-widest">{leader.role}</h5>
          <div className="mt-6 text-center sm:mt-8">
            <p className="px-0 font-montserrat text-base leading-[1.7] text-[#000000] sm:px-4 sm:text-[18px] sm:leading-[1.6]">
              {leader.fullDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LeaderCard({ leader, onSelect, initialAnimation }) {
  const leaderImage = leader?.image || null;

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-full p-5 sm:p-6">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          {leaderImage ? (
            <img
              src={leaderImage}
              alt={leader.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
              No Image
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center p-5 pt-0 sm:p-6 sm:pt-0">
        <h3 className="text-center font-montserrat text-lg font-bold text-[#102071] sm:text-[20px]">{leader.name}</h3>
        <h5 className="mb-4 mt-1 text-center font-montserrat text-[11px] font-medium uppercase tracking-wider text-[#212121] italic sm:text-[12px]">
          {leader.role}
        </h5>
        <div className="mb-6 max-w-[280px] text-center text-[13px] leading-[1.6] text-[#555] sm:mb-8">
          <p>{leader.shortDescription}</p>
        </div>
        <motion.button
          onClick={() => onSelect(leader)}
          whileHover={{ scale: 1.05 }}
          className="w-full rounded-md px-6 py-2 text-[12px] font-bold uppercase tracking-widest text-leena-navy shadow-sm transition-all duration-200 sm:w-auto sm:px-8"
          style={{
            background: 'linear-gradient(rgb(255, 211, 30) 0px, rgb(247, 181, 0) 100%)',
          }}
        >
          READ MORE
        </motion.button>
      </div>
    </motion.div>
  );
}

const DirectorsPage = () => {
  const { data } = useData();
  const [selectedLeader, setSelectedLeader] = useState(null);
  const { pageContent, routes: ROUTES, specialPages } = data;
  const directorsPath = ROUTES?.directors || '/directors';
  const page = pageContent?.[directorsPath];
  const teamContent = specialPages?.[directorsPath] ?? {};
  const pageTitle = page?.title || 'Our Team';
  const introParagraphs = Array.isArray(teamContent.introParagraphs) && teamContent.introParagraphs.length
    ? teamContent.introParagraphs
    : page?.intro
      ? [page.intro]
      : ['Leadership information will be available shortly.'];
  const directors = Array.isArray(teamContent.directors) ? teamContent.directors.filter((item) => item && typeof item === 'object') : [];
  const leadership = Array.isArray(teamContent.leadership) ? teamContent.leadership.filter((item) => item && typeof item === 'object') : [];

  return (
    <div className="flex flex-col bg-white overflow-x-hidden font-montserrat">
      {/* Intro Section */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex flex-wrap justify-center gap-2 text-3xl font-bold font-montserrat sm:text-[34px]"
          >
            <span className="text-[#102071]">{pageTitle}</span>
          </motion.div>
          <div className="mx-auto h-[3px] w-12 bg-[#F7B500] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-10 max-w-4xl space-y-5 font-montserrat text-sm leading-[1.8] text-[#555] sm:mt-12 sm:space-y-6 sm:text-[14px]"
          >
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Directors Header Ribbon */}
      <section className="bg-[#102071] py-10 text-center text-white sm:py-12">
          <h2 className="mb-4 text-3xl font-bold font-montserrat text-[#F7B500] sm:text-[34px]">Our Directors</h2>
          <div className="flex justify-center">
             <Briefcase className="h-7 w-7 text-white sm:h-8 sm:w-8" />
          </div>
      </section>

      {/* Directors Grid */}
      <section className="bg-[#f4f4f4] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {directors.map((director, index) => (
              <LeaderCard
                key={director.name}
                leader={director}
                onSelect={setSelectedLeader}
                initialAnimation={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Header Ribbon */}
      <section className="bg-[#102071] py-10 text-center text-white sm:py-12">
          <h2 className="mb-4 text-3xl font-bold font-montserrat text-[#F7B500] sm:text-[34px]">Our Leadership</h2>
          <div className="mx-auto flex max-w-lg items-center justify-center gap-3 sm:gap-4">
             <div className="h-[1px] flex-grow bg-white/30"></div>
             <Users className="h-7 w-7 text-white sm:h-8 sm:w-8" />
             <div className="h-[1px] flex-grow bg-white/30"></div>
          </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-[420px] mx-auto">
            {leadership.map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                onSelect={setSelectedLeader}
                initialAnimation={{ opacity: 0, y: 30 }}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedLeader && (
          <LeaderModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DirectorsPage;
