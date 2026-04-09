import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Globe } from 'lucide-react';
import { useData } from '../context/DataContext';

const ContactPage = () => {
  const { data } = useData();
  const { companyInfo } = data;

  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Our Address',
      content: companyInfo.address,
      link: 'https://www.google.com/maps/place/Office+No+338,+Sai+Chambers/@19.016089,73.039651,16z/data=!4m6!3m5!1s0x3be7c33aedbd37ad:0x5e9915029446713f!8m2!3d19.0160891!4d73.0396515!16s%2Fg%2F11ghqc7mdt',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telephone',
      content: companyInfo.phone,
      link: companyInfo.phoneHref,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      content: companyInfo.email,
      link: companyInfo.emailHref,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[350px] items-center justify-center overflow-hidden md:h-[450px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-1900-%C3%97-900-px-3.png')`,
          }}
        >
          <div className="absolute inset-0 bg-leena-navy/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl font-bold text-white md:text-7xl"
          >
            Contact Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-8 h-1.5 w-24 bg-leena-yellow rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="-mt-16 relative z-20 px-4 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="group flex flex-col items-center rounded-2xl border border-white/20 bg-white/90 p-8 text-center shadow-xl backdrop-blur-md transition-all hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-leena-navy text-leena-yellow shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-leena-navy uppercase tracking-wider">{item.title}</h3>
                <a 
                  href={item.link} 
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="text-slate-600 hover:text-leena-navy transition-colors duration-300 font-medium"
                >
                  {item.content}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0c1a66] uppercase tracking-tight">Get In Touch</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-leena-yellow rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left Side: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img 
                src="https://leenapowertech.in/wp-content/uploads/2022/04/Untitled-design-2022-04-26T155056.217.png" 
                alt="Technical Illustration" 
                className="h-auto w-full max-w-[500px] object-contain"
              />
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] bg-leena-navy p-10 shadow-2xl md:p-14"
            >
              <form className="space-y-8">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest px-1">Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Name"
                    className="w-full border-b border-white/30 bg-transparent px-1 py-3 text-white placeholder-white/40 outline-none transition-all focus:border-leena-yellow"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest px-1">Phone *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone no."
                    className="w-full border-b border-white/30 bg-transparent px-1 py-3 text-white placeholder-white/40 outline-none transition-all focus:border-leena-yellow"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest px-1">Email *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Email"
                    className="w-full border-b border-white/30 bg-transparent px-1 py-3 text-white placeholder-white/40 outline-none transition-all focus:border-leena-yellow"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Message"
                    className="w-full border-b border-white/30 bg-transparent px-1 py-3 text-white placeholder-white/40 outline-none transition-all focus:border-leena-yellow resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="rounded-full bg-leena-yellow px-10 py-4 text-sm font-bold uppercase tracking-widest text-leena-navy transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 md:px-12 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0c1a66] uppercase tracking-tight">Location</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-leena-yellow rounded-full"></div>
        </div>
        <div className="h-[500px] w-full overflow-hidden grayscale contrast-125 transition-all hover:grayscale-0 border-y border-slate-200 shadow-inner bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.50361285496!2d73.03715691538355!3d19.011986558619623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39062eb1d91%3A0x8673328e67041a8e!2sLeena%20Powertech%20Engineers%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1657805244569!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Leena Powertech Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
