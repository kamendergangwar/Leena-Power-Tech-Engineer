import React from 'react';
import { motion } from 'framer-motion';
import { Download, TreePine, ShieldCheck, GraduationCap, ExternalLink, Heart } from 'lucide-react';

const CSRPage = () => {
  const satpatiGallery = [
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T120627.482.png',
      caption: 'Plantation Drive at Satpati'
    },
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T120613.271.png',
      caption: 'Community Awareness'
    },
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T120606.278.png',
      caption: 'Environmental Education'
    },
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T120620.554.png',
      caption: 'Green Initative'
    }
  ];

  const safetyGallery = [
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T121129.646.png',
      caption: 'At Palghar Site'
    },
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T121136.190.png',
      caption: 'At Palghar Site'
    },
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T121122.361.png',
      caption: 'At MMRDA Site'
    },
    {
      url: 'https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-29T121115.248.png',
      caption: 'At MMRDA Site'
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative flex h-[350px] items-center overflow-hidden md:h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('https://leenapowertech.in/wp-content/uploads/2022/04/Picture50.jpg')`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(10, 25, 47, 0.4)'
          }}
        ></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white md:text-7xl uppercase tracking-wider"
          >
            CSR
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 h-1 w-24 bg-leena-yellow rounded-full origin-left"
          ></motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-leena-yellow">Our Responsibility</span>
              <h2 className="text-4xl font-bold text-leena-navy mt-4 uppercase tracking-tight">CSR @ LPTE</h2>
              <div className="mt-8 space-y-6 text-slate-600 text-lg leading-relaxed max-w-4xl">
                <p>
                  At Leena Powertech, we firmly believe in giving back to the society. Our CSR initiatives are a reflection of this philosophy. Every year, during the National Safety Week, we run safety campaign at our sites to increase awareness. We have also carried out plantation activities in multiple places to tackle global warming and become a responsible corporate citizen.
                </p>
                <p>
                  Apart from this, we have also been carried out Skill Workshops for underprivileged children to help them earn respect and lead an independent life. This is in line with our ‘Believe in People’ principle. We believe that every person is worthy and if provided with the right direction, they can break barriers and excel in any field.
                </p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block"
              >
                <a 
                  href="https://leenapowertech.in/wp-content/uploads/2022/05/company-policy.pdf" 
                  download 
                  target="_blank"
                  className="flex items-center gap-3 rounded-full bg-leena-navy px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl hover:bg-leena-yellow hover:text-leena-navy transition-all"
                >
                  <Download size={18} />
                  Download Company Policy
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Satpati Section */}
      <section className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 text-leena-navy mb-4">
              <TreePine size={32} className="text-leena-yellow" />
              <h2 className="text-3xl font-bold uppercase tracking-wide">CSR activity & plantation at Satpati</h2>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
              During our work in Satpati, our company ran a program that encouraged the people of the town to plant trees in their area. Our team visited the schools in the area to educate the children about saving our environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {satpatiGallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[300px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-leena-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold uppercase tracking-widest text-sm">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National Safety Week Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 text-leena-navy mb-4">
              <ShieldCheck size={32} className="text-leena-yellow" />
              <h2 className="text-3xl font-bold uppercase tracking-wide">National Safety Week</h2>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
              Every year in the month of March, we run campaigns on all our sites to make people aware about the SHE (Safety, Health and Environment) movement, and to motivate people to create safer workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyGallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[250px] overflow-hidden rounded-2xl shadow-md mb-4">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                </div>
                <h4 className="text-sm font-bold text-leena-navy uppercase tracking-widest text-center">{img.caption}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-leena-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
          <Heart size={300} strokeWidth={1} />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <GraduationCap className="mx-auto h-16 w-16 text-leena-yellow mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">'Believe in People'</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our CSR initiatives are not just about compliance, but about creating a lasting impact on lives and the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-leena-yellow font-bold uppercase tracking-widest text-sm bg-white/5 py-3 px-6 rounded-full">
              <TreePine size={18} /> Environment
            </div>
            <div className="flex items-center gap-2 text-leena-yellow font-bold uppercase tracking-widest text-sm bg-white/5 py-3 px-6 rounded-full">
              <GraduationCap size={18} /> Education
            </div>
            <div className="flex items-center gap-2 text-leena-yellow font-bold uppercase tracking-widest text-sm bg-white/5 py-3 px-6 rounded-full">
              <ShieldCheck size={18} /> Safety
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRPage;
