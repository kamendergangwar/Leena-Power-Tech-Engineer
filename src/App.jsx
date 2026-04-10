import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContentPage from './pages/ContentPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import CSRPage from './pages/CSRPage';
import DirectorsPage from './pages/DirectorsPage';
import AwardsPage from './pages/AwardsPage';
import MepPage from './pages/MepPage';
import TransmissionPage from './pages/TransmissionPage';
import DistributionPage from './pages/DistributionPage';
import OmPage from './pages/OmPage';
import RailwaysPage from './pages/RailwaysPage';
import SolarPage from './pages/SolarPage';
import EvcsPage from './pages/EvcsPage';
import LiftsPage from './pages/LiftsPage';
import CurrentVacancyPage from './pages/CurrentVacancyPage';
import JoinTeamPage from './pages/JoinTeamPage';
import HrInitiativesPage from './pages/HrInitiativesPage';
import NotFoundPage from './pages/NotFoundPage';
import { useData } from './context/DataContext';

function App() {
  const location = useLocation();
  const { data, loading, error } = useData();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-leena-navy"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error loading content</h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const { pageContent, routes: ROUTES, pagePaths = [] } = data;
  const staticPaths = new Set([
    ROUTES.home,
    ROUTES.about,
    ROUTES.contact,
    ROUTES.events,
    ROUTES.csr,
    ROUTES.directors,
    ROUTES.awards,
    ROUTES.mep,
    ROUTES.transmission,
    ROUTES.distribution,
    ROUTES.om,
    ROUTES.railways,
    ROUTES.solar,
    ROUTES.evcs,
    ROUTES.liftEscalators,
    ROUTES.currentVacancy,
    ROUTES.joinTeam,
    ROUTES.hrInitiatives,
  ]);
  const dynamicPages = pagePaths.filter((path) => path && !staticPaths.has(path));
  const isAboutPage = location.pathname === ROUTES.about;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {isAboutPage ? null : (
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
      )}

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
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.events} element={<EventsPage />} />
          <Route path={ROUTES.csr} element={<CSRPage />} />
          <Route path={ROUTES.directors} element={<DirectorsPage />} />
          <Route path={ROUTES.awards} element={<AwardsPage />} />
          <Route path={ROUTES.mep} element={<MepPage />} />
          <Route path={ROUTES.transmission} element={<TransmissionPage />} />
          <Route path={ROUTES.distribution} element={<DistributionPage />} />
          <Route path={ROUTES.om} element={<OmPage />} />
          <Route path={ROUTES.railways} element={<RailwaysPage />} />
          <Route path={ROUTES.solar} element={<SolarPage />} />
          <Route path={ROUTES.evcs} element={<EvcsPage />} />
          <Route path={ROUTES.liftEscalators} element={<LiftsPage />} />
          <Route path={ROUTES.currentVacancy} element={<CurrentVacancyPage />} />
          <Route path={ROUTES.joinTeam} element={<JoinTeamPage />} />
          <Route path={ROUTES.hrInitiatives} element={<HrInitiativesPage />} />
          {dynamicPages.map((path) => (
            <Route
              key={path}
              path={path}
              element={pageContent[path] ? <ContentPage page={pageContent[path]} pathKey={path} /> : <NotFoundPage />}
            />
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
        className="group fixed bottom-4 right-4 z-50 rounded-full border-2 border-leena-yellow bg-leena-navy p-2.5 text-leena-yellow shadow-2xl transition-all duration-300 hover:bg-leena-yellow hover:text-leena-navy sm:bottom-8 sm:right-8 sm:p-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-y-1 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
