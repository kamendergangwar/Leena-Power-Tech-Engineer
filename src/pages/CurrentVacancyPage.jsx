import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Search } from 'lucide-react';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackPage = {
  title: 'Join us',
  sections: [{ heading: 'Jobs' }],
  jobs: [
    {
      title: 'Supervisor Electrical',
      category: 'Project',
      type: 'Full Time',
      locations: ['Kolhapur', 'Palghar', 'Ratnagiri', 'Vasai'],
      href: 'https://leenapowertech.in/jobs/supervisor-electrical/',
    },
    {
      title: 'Estimation Engineer',
      category: 'Business development',
      type: 'Full Time',
      locations: ['CBD Belapur Navi Mumbai'],
      href: 'https://leenapowertech.in/jobs/estimation-engineer/',
    },
    {
      title: 'Planning Engineer',
      category: 'Project Planning',
      type: 'Full Time',
      locations: ['CBD Belapur Navi Mumbai'],
      href: 'https://leenapowertech.in/jobs/scm-executive/',
    },
  ],
};

const CurrentVacancyPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.currentVacancy] ?? fallbackPage;
  const jobs = page.jobs?.length ? page.jobs : fallbackPage.jobs;
  const heroImage =
    pageImages?.[ROUTES.currentVacancy]?.hero ?? withApiBase('assets/pages/current-vacancy/current-vacancy-hero-live.png');

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

  const categories = useMemo(() => [...new Set(jobs.map((job) => job.category))], [jobs]);
  const jobTypes = useMemo(() => [...new Set(jobs.map((job) => job.type))], [jobs]);
  const locations = useMemo(() => [...new Set(jobs.flatMap((job) => job.locations))], [jobs]);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query) ||
        job.locations.some((item) => item.toLowerCase().includes(query));
      const matchesCategory = !category || job.category === category;
      const matchesType = !jobType || job.type === jobType;
      const matchesLocation = !location || job.locations.includes(location);

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [jobs, search, category, jobType, location]);

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/28" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[340px] max-w-[1600px] items-center justify-center px-4 py-20 text-center md:min-h-[520px] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {page.title ?? fallbackPage.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <h2 className="text-[2rem] font-bold text-[#1a2d73] md:text-[2.2rem]">
              {page.sections?.[0]?.heading ?? fallbackPage.sections[0].heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
            className="mt-6 grid gap-3 md:grid-cols-[1.35fr_1fr_0.8fr_1.1fr]"
          >
            <label className="relative block">
              <span className="sr-only">Search jobs</span>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                className="h-12 w-full rounded-sm border border-slate-200 bg-white px-4 pr-11 text-sm text-slate-700 outline-none transition focus:border-leena-yellow"
              />
              <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </label>

            <label className="sr-only" htmlFor="job-category-filter">Job category</label>
            <select
              id="job-category-filter"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 rounded-sm border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-leena-yellow"
            >
              <option value="">All Job Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label className="sr-only" htmlFor="job-type-filter">Job type</label>
            <select
              id="job-type-filter"
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
              className="h-12 rounded-sm border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-leena-yellow"
            >
              <option value="">All Job Type</option>
              {jobTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label className="sr-only" htmlFor="job-location-filter">Job location</label>
            <select
              id="job-location-filter"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="h-12 rounded-sm border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-leena-yellow"
            >
              <option value="">All Job Location</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </motion.div>

          <div className="mt-5 space-y-0 overflow-hidden rounded-sm border border-slate-200 bg-white">
            {filteredJobs.map((job, index) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
                className="grid gap-4 border-b border-slate-200 px-5 py-5 last:border-b-0 md:grid-cols-[1.2fr_0.9fr]"
              >
                <div className="flex items-start">
                  <h3 className="text-lg font-bold text-[#1a2d73] md:text-xl">{job.title}</h3>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-slate-400" />
                      <span>{job.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>{job.locations.join(', ')}</span>
                    </div>
                  </div>

                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#1a2d73] transition hover:text-leena-yellow"
                  >
                    More Details
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.article>
            ))}

            {!filteredJobs.length ? (
              <div className="px-5 py-10 text-center text-sm text-slate-500">
                No vacancies match the current filters.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentVacancyPage;
