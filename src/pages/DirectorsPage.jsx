import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, X } from 'lucide-react';
import { useData } from '../context/DataContext';

function LeaderModal({ leader, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#1c86c6] hover:bg-slate-100 transition-colors z-10"
        >
          <X size={28} />
        </button>

        <div className="p-10 flex flex-col items-center">
          <img
            src={leader.detailImage || leader.image}
            alt={leader.name}
            className="w-full max-w-[250px] rounded-lg shadow-sm border border-slate-100 mb-8"
          />
          <h3 className="text-[23px] font-bold text-[#102071] font-montserrat">{leader.name}</h3>
          <h5 className="text-[14px] font-medium text-[#212121] font-montserrat mt-2 uppercase tracking-widest">{leader.role}</h5>
          <div className="mt-8 text-center">
            <p className="text-[#000000] leading-[1.6] text-[18px] font-montserrat px-4">
              {leader.fullDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const DirectorsPage = () => {
  const { data } = useData();
  const [selectedLeader, setSelectedLeader] = useState(null);
  const { pageContent, routes: ROUTES, specialPages } = data;
  const page = pageContent[ROUTES.directors];
  const teamContent = specialPages?.[ROUTES.directors] ?? {};
  const introParagraphs = teamContent.introParagraphs ?? [page.intro];
  const directors = teamContent.directors ?? [];
  const leadership = teamContent.leadership ?? [];

  return (
    <div className="flex flex-col bg-white overflow-x-hidden font-montserrat">
      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 text-[34px] font-bold font-montserrat mb-4"
          >
            <span className="text-[#102071]">{page.title}</span>
          </motion.div>
          <div className="mx-auto h-[3px] w-12 bg-[#F7B500] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 space-y-6 text-[#555] text-[14px] leading-[1.8] max-w-4xl mx-auto font-montserrat"
          >
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Directors Header Ribbon */}
      <section className="bg-[#102071] py-12 text-center text-white">
          <h2 className="text-[34px] font-bold font-montserrat text-[#F7B500] mb-4">Our Directors</h2>
          <div className="flex justify-center">
             <Briefcase className="h-8 w-8 text-white" />
          </div>
      </section>

      {/* Directors Grid */}
      <section className="py-24 px-4 md:px-12 bg-[#f4f4f4]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full p-6">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center p-6 pt-0">
                  <h3 className="text-[20px] font-bold text-[#102071] font-montserrat text-center">{director.name}</h3>
                  <h5 className="text-[12px] font-medium text-[#212121] font-montserrat mt-1 mb-4 italic text-center uppercase tracking-wider">
                    {director.role}
                  </h5>
                  <div className="text-[#555] text-[13px] text-center leading-[1.6] mb-8 max-w-[280px]">
                    <p>{director.shortDescription}</p>
                  </div>
                  <motion.button 
                    onClick={() => setSelectedLeader(director)}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-2 rounded-md text-leena-navy font-bold uppercase tracking-widest text-[12px] shadow-sm transition-all duration-200"
                    style={{
                      background: 'linear-gradient(rgb(255, 211, 30) 0px, rgb(247, 181, 0) 100%)'
                    }}
                  >
                    READ MORE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Header Ribbon */}
      <section className="bg-[#102071] py-12 text-center text-white">
          <h2 className="text-[34px] font-bold font-montserrat text-[#F7B500] mb-4">Our Leadership</h2>
          <div className="flex justify-center items-center gap-4 max-w-lg mx-auto">
             <div className="h-[1px] flex-grow bg-white/30"></div>
             <Users className="h-8 w-8 text-white" />
             <div className="h-[1px] flex-grow bg-white/30"></div>
          </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-md mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center p-10 bg-[#e3f2fd] rounded-2xl transition-all duration-500 hover:shadow-xl"
              >
                <div className="h-48 w-48 mb-6 overflow-hidden rounded-full border border-slate-100 shadow-md bg-white">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                    <h3 className="text-[20px] font-bold text-[#102071] font-montserrat">{leader.name}</h3>
                    <h4 className="text-[12px] font-medium text-[#212121] font-montserrat mt-1 mb-4 uppercase tracking-widest italic">
                    {leader.role}
                    </h4>
                </div>
                <p className="text-[#555] text-[13px] text-center leading-relaxed mb-8 max-w-[300px]">
                  {leader.shortDescription}
                </p>
                <motion.button 
                  onClick={() => setSelectedLeader(leader)}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-2 rounded-md text-leena-navy font-bold uppercase tracking-widest text-[12px] shadow-sm transition-all duration-200"
                  style={{
                    background: 'linear-gradient(rgb(255, 211, 30) 0px, rgb(247, 181, 0) 100%)'
                  }}
                >
                  READ MORE
                </motion.button>
              </motion.div>
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
