import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../data/siteContent';

const NotFoundPage = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-12">
        <h1 className="text-5xl uppercase tracking-[0.2em] text-leena-navy">404</h1>
        <p className="mt-4 text-lg text-slate-600">The page you are looking for is not available.</p>
        <Link
          to={ROUTES.home}
          className="mt-8 inline-flex rounded-full bg-leena-yellow px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-leena-navy transition hover:bg-leena-navy hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
