import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import NotFoundPage from './pages/NotFoundPage';
import { pageContent } from './data/pageContent';
import { ROUTES } from './data/siteContent';

function App() {
  const location = useLocation();
  const dynamicPages = Object.entries(pageContent);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-leena-yellow/10 blur-3xl"
          animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-4rem] top-[30%] h-96 w-96 rounded-full bg-sky-200/20 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 55, 0], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-5rem] left-[30%] h-80 w-80 rounded-full bg-leena-navy/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -35, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <header>
        <TopBar />
        <Navbar />
      </header>

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path={ROUTES.home} element={<HomePage />} />
          {dynamicPages.map(([path, page]) => (
            <Route key={path} path={path} element={<ContentPage page={page} pathKey={path} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.main>

      <Footer />

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.35 }}
        className="fixed bottom-8 right-8 bg-leena-navy text-leena-yellow p-3 rounded-full shadow-2xl hover:bg-leena-yellow hover:text-leena-navy transition-all duration-300 z-50 group border-2 border-leena-yellow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
