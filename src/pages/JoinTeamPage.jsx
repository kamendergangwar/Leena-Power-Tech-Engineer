import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackPage = {
  title: 'Join the Team',
  sections: [
    {
      heading: 'Opportunities in LPTE',
      body:
        'LPTE is a professionally managed EPC company with employment policies and systems that radiate from a single principle "Believe in people". People are our most valued assets and strength. At LPTE we believe that taking care of our team and encouraging them is an important part of our culture. We regularly provide our teams the opportunity to reinvigorate themselves through various motivational programs like picnics, sports facilities, movie shows, birthday celebrations, etc. At LPTE, our HR Policies are liberal and employee friendly. We value our employees and extend all support and co-operation for their professional development and providing career growth plan. HR plays the role of catalyst and acts as a voice of employee in order to improve employee\'s contribution and achieving business goals.',
      ctaText: 'To be a part of our team, all you need to do is to send us your resume to:',
      emails: ['careers@lptindia.in', 'hr@lptindia.in'],
    },
    {
      heading: 'Important Notice',
      body:
        'LPTE has a merit-based employee selection practice. LPTE does not charge any security deposit or any kind of fees from the prospective job seekers, either fresh or experienced, at any stage of their employee selection process. Any such communication impersonating LPTE and soliciting money is misleading and it does not represent LPTE and is contrary to its company policy. LPTE shall not accept any liability for the content of any such fraudulent / unauthorized activity or for the consequences of any action taken on the basis of such communication originating from the deceptive addressers. You are advised to be vigilant against any such fraudulent communication.',
    },
  ],
};

const JoinTeamPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.joinTeam] ?? fallbackPage;
  const heroImage =
    pageImages?.[ROUTES.joinTeam]?.hero ?? withApiBase('assets/pages/join-team/join-team-hero-live.png');
  const opportunities = page.sections?.[0] ?? fallbackPage.sections[0];
  const notice = page.sections?.[1] ?? fallbackPage.sections[1];
  const emails = opportunities.emails?.length ? opportunities.emails : fallbackPage.sections[0].emails;

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/42" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[360px] max-w-[1600px] items-center px-4 py-20 md:min-h-[520px] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="ml-[6%] max-w-5xl text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {page.title ?? fallbackPage.title}
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-leena-yellow" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="space-y-10"
            >
              <div className="space-y-5">
                <h2 className="text-[2rem] font-bold text-[#1a2d73] md:text-[2.2rem]">
                  {opportunities.heading}
                </h2>
                <p className="text-[14px] leading-[2] text-slate-700 md:text-[15px]">
                  {opportunities.body}
                </p>
                <p className="text-[14px] leading-[2] text-slate-700 md:text-[15px]">
                  {opportunities.ctaText}{' '}
                  {emails.map((email, index) => (
                    <React.Fragment key={email}>
                      <a href={`mailto:${email}`} className="font-semibold text-[#2466d1] transition hover:text-leena-yellow">
                        {email}
                      </a>
                      {index < emails.length - 1 ? ' & ' : null}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="text-[2rem] font-bold text-[#ff3b30] md:text-[2.2rem]">
                  {notice.heading}
                </h2>
                <p className="text-[14px] leading-[2] text-[#ff4a3d] md:text-[15px]">
                  {notice.body}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="hidden lg:block"
            >
              <div
                aria-hidden="true"
                className="min-h-[560px] rounded-[12px] bg-gradient-to-b from-[#108ef2] via-[#1677db] to-[#1f2f8d] shadow-[0_22px_45px_-24px_rgba(31,47,141,0.55)]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinTeamPage;
