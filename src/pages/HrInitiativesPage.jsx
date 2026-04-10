import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const fallbackPage = {
  title: 'Human Resource',
  sections: [
    {
      heading: 'Salient HR Initiatives:',
      items: [
        {
          title: 'Get together / Picnic / Sports / Cultural Meets / Festival Celebration / Movie show / Birthday wishes:',
          body:
            'To promote a sense of belonging among our teams and to create an environment where employees feel at home is our aim. Moreover, these activities are also undertaken to facilitate recreation for our team. Special occasions call for special celebrations and to enjoy our team members birthdays we bring on the celebrations with birthday cakes and snacks for all every month.',
        },
        {
          title: 'Helping employees through welfare trust:',
          body:
            'All employees contribute towards LPTE welfare trust along with the regular contributions from management. The basic purpose of this trust is to assist employees in their need of hour.',
        },
        {
          title: 'Best employee performance awards:',
          body:
            'Every year we call in nominations from our employees to state their achievements and to nominate themselves as Best Employee. This activity is undertaken to promote a sense of healthy competition and to acknowledge efforts of thousands of our team members. Along with these awards for Best site and Site with best safety conditions are also presented.',
        },
        {
          title: 'Long service award:',
          body:
            'At LPTE we cherish and value the long term association of our team members and to appreciate their commitment and contributions we present them with the Long Service Awards as a token of our gratitude.',
        },
        {
          title: 'Learning and Development:',
          body:
            'To cater to the ever growing needs of the industry we have set up a state of the art learning centre at CBD-Belapur. LPTE Learning Centre caters to the learning development need of our team and moreover helps us build a highly skilled and well informed workforce. A good blend of skill development, behavioural and functional programs provide a platform for growth. In addition to this we cater to such development needs through experts at our various project sites and regional offices also.',
        },
      ],
    },
  ],
  departmentColumns: [
    ['Business Development', 'Estimation', 'Account & Finance', 'Human Resource and Admin'],
    ['Project', 'Project Planning', 'Procurement'],
  ],
};

const HrInitiativesPage = () => {
  const { data } = useData();
  const { pageContent, pageImages, routes: ROUTES } = data;
  const page = pageContent?.[ROUTES.hrInitiatives] ?? fallbackPage;
  const heroImage = pageImages?.[ROUTES.hrInitiatives]?.hero ?? withApiBase('assets/pages/hr/hr-hero-live.png');
  const supportImage =
    pageImages?.[ROUTES.hrInitiatives]?.gallery?.[0]?.src ??
    withApiBase('assets/pages/hr/hr-initiatives-photo-live.png');
  const initiatives = page.sections?.[0]?.items?.length ? page.sections[0].items : fallbackPage.sections[0].items;
  const departmentColumns = page.departmentColumns?.length ? page.departmentColumns : fallbackPage.departmentColumns;

  return (
    <div className="bg-white font-montserrat">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#000000]/45" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[360px] max-w-[1600px] items-center justify-center px-4 py-20 text-center md:min-h-[520px] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {page.title ?? fallbackPage.title}
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-leena-yellow" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
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
            className="mt-8 space-y-7"
          >
            {initiatives.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="flex items-start gap-3 text-[13px] font-semibold text-slate-900 md:text-[15px]">
                  <span className="mt-[0.15rem] text-[#1a2d73]">•</span>
                  <span>{item.title}</span>
                </div>
                <p className="pl-5 text-[12px] leading-[2] text-slate-600 md:pl-9 md:text-[14px]">
                  {item.body}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative max-w-[480px]"
            >
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-sm border-4 border-[#243b8f]" aria-hidden="true" />
              <img
                src={supportImage}
                alt={pageImages?.[ROUTES.hrInitiatives]?.gallery?.[0]?.alt ?? 'LPTE human resource initiatives'}
                className="relative z-10 w-full rounded-sm object-cover shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid gap-8 sm:grid-cols-2"
            >
              {departmentColumns.map((column, columnIndex) => (
                <ul key={`column-${columnIndex}`} className="space-y-4">
                  {column.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-slate-700 md:text-[15px]">
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#1a2d73]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HrInitiativesPage;
