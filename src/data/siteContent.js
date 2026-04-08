export const SITE_URL = 'https://leenapowertech.in';
const BASE_URL = import.meta.env.BASE_URL;
const withBase = (path) => `${BASE_URL}${path.replace(/^\/+/, '')}`;

export const ROUTES = {
  home: '/',
  about: '/about',
  directors: '/directors',
  awards: '/awards-recognitions',
  mep: '/mep-works',
  transmission: '/transmission',
  distribution: '/distribution',
  om: '/o-m',
  railways: '/railways-metro',
  solar: '/solar-system-installations',
  evcs: '/evcs',
  liftEscalators: '/ift-escalators',
  csr: '/csr',
  careers: '/careers',
  currentVacancy: '/current-vacancy',
  joinTeam: '/join-the-team',
  hrInitiatives: '/hr-initiatives',
  events: '/events',
  contact: '/contact',
};

export const companyInfo = {
  name: 'Leena Powertech Engineers Pvt. Ltd.',
  phone: '022 61389100',
  phoneHref: 'tel:02261389100',
  email: 'info@lptindia.in',
  emailHref: 'mailto:info@lptindia.in',
  address: '13-15, Ground Floor, Sai Chambers, Sector-11, C.B.D Belapur, Navi Mumbai - 400614',
  logo: `${SITE_URL}/wp-content/uploads/2022/04/Untitled-design-11.png`,
  tagline: 'Connecting People and Power',
};

export const navigation = [
  { name: 'Home', href: ROUTES.home },
  {
    name: 'About Us',
    href: ROUTES.about,
    children: [
      { name: 'About Us', href: ROUTES.about },
      { name: 'Our team', href: ROUTES.directors },
      { name: 'Awards & Recognitions', href: ROUTES.awards },
    ],
  },
  {
    name: 'Verticals',
    href: ROUTES.mep,
    children: [
      { name: 'MEP works', href: ROUTES.mep },
      { name: 'Transmission', href: ROUTES.transmission },
      { name: 'Distribution', href: ROUTES.distribution },
      { name: 'O & M', href: ROUTES.om },
      { name: 'Railways & Metro', href: ROUTES.railways },
    ],
  },
  {
    name: 'New Ventures',
    href: ROUTES.solar,
    children: [
      { name: 'Solar system installations', href: ROUTES.solar },
      { name: 'EVCS', href: ROUTES.evcs },
      { name: 'Lift & Escalators', href: ROUTES.liftEscalators },
    ],
  },
  { name: 'CSR', href: ROUTES.csr },
  {
    name: 'Careers',
    href: ROUTES.careers,
    children: [
      { name: 'Current Vacancy', href: ROUTES.currentVacancy },
      { name: 'Join the Team', href: ROUTES.joinTeam },
      { name: 'HR Initiatives', href: ROUTES.hrInitiatives },
    ],
  },
  { name: 'Events', href: ROUTES.events },
  { name: 'Contact Us', href: ROUTES.contact },
];

export const heroSlides = [
  {
    desktop: `${SITE_URL}/wp-content/uploads/2022/07/1.png`,
    mobile: `${SITE_URL}/wp-content/uploads/2022/07/1-1.png`,
  },
  {
    desktop: `${SITE_URL}/wp-content/uploads/2022/07/7.png`,
    mobile: `${SITE_URL}/wp-content/uploads/2022/07/5-1.png`,
  },
  {
    desktop: `${SITE_URL}/wp-content/uploads/2022/07/5.png`,
    mobile: `${SITE_URL}/wp-content/uploads/2022/07/4-1.png`,
  },
  {
    desktop: `${SITE_URL}/wp-content/uploads/2022/07/4.png`,
    mobile: `${SITE_URL}/wp-content/uploads/2022/07/6-1.png`,
  },
  {
    desktop: `${SITE_URL}/wp-content/uploads/2022/07/6.png`,
    mobile: `${SITE_URL}/wp-content/uploads/2022/07/1-1.png`,
  },
  {
    desktop: `${SITE_URL}/wp-content/uploads/2022/07/9.png`,
    mobile: `${SITE_URL}/wp-content/uploads/2022/07/5-1.png`,
  },
];

export const welcomeContent = {
  title: 'WELCOME TO LEENA POWERTECH',
  body: [
    'Partnering in the country’s progress in developing electrical distribution infrastructure, Leena Powertech Engineers Pvt Ltd (LPTE) is an integrated EPC company specializing in Turnkey Electrical Engineering Services.',
    'Our work spans sectors like Power Transmission, Distribution, Building Electrification, Railway Electrification, Renewable Energy (Solar), and Electric Vehicle Charging Station Systems.',
  ],
  ctaLabel: 'Read More',
  ctaHref: ROUTES.about,
};

export const reasons = [
  {
    title: 'Quality Service',
    description:
      'We work on quality solutions and timely delivery of the projects by using the latest technologies and ISO procedures. Our strengths are our qualified engineers, diversified experience, and devoted employees who believe in the company’s mission of contributors to nation building.',
  },
  {
    title: 'Super Support',
    description:
      'Our experienced project management team provides uninterrupted operational excellence. They are backed by a professional support team working 24x7 on preventive measures and maintenance.',
  },
  {
    title: 'Award Winning',
    description:
      'Our team has been recognized for their contributions by governments all over the country. We have received prestigious awards from the Government of India, the Government of Maharashtra, the Government of Jharkhand, the Government of Goa, and other noted institutions.',
  },
];

export const services = [
  {
    title: 'MEP Works',
    href: ROUTES.mep,
    image: `${SITE_URL}/wp-content/uploads/2022/04/MEP-7.png`,
  },
  {
    title: 'Transmission',
    href: ROUTES.transmission,
    image: withBase('assets/hero1.png'),
  },
  {
    title: 'Distribution',
    href: ROUTES.distribution,
    image: withBase('assets/distribution.png'),
  },
  {
    title: 'O & M',
    href: ROUTES.om,
    image: withBase('assets/om.png'),
  },
  {
    title: 'Railways & Metro',
    href: ROUTES.railways,
    image: withBase('assets/hero3.png'),
  },
];

export const stats = [
  {
    value: '25+',
    label: 'Client Associations',
    icon: `${SITE_URL}/wp-content/uploads/2022/06/Untitled-design-2022-06-29T134441.919.png`,
  },
  {
    value: '150+',
    label: 'Completed Projects',
    icon: `${SITE_URL}/wp-content/uploads/2022/06/Untitled-design-2022-06-29T135053.855.png`,
  },
  {
    value: '25+',
    label: 'Years of Experience',
    icon: `${SITE_URL}/wp-content/uploads/2022/06/Untitled-design-2022-06-29T134503.036.png`,
  },
];

export const testimonials = [
  {
    name: 'Mr. Sanjay Chotalia',
    role: 'Chief Engineer (Special Projects)',
    organization: 'CIDCO',
    image: `${SITE_URL}/wp-content/uploads/2022/07/Untitled-design-2022-07-01T115440.101.png`,
    quote:
      'LPTE is a company that has always adhered to quality standards. Out of their many distinctive features, I was highly pleased with the way they plan things and anticipate the different challenges. It was nice to work with a company which is work round the clock to satisfy the requirements of its client.',
  },
  {
    name: 'Mr. Suresh Ganeshkar',
    role: 'Chief Engineer',
    organization: 'MSEDC',
    image: `${SITE_URL}/wp-content/uploads/2022/07/Untitled-design-2022-07-01T115430.355.png`,
    quote:
      'I have worked with many a contracting company, but LPTE has always stood out. The company’s core values of integrity, accountability, and teamwork have always helped the company in challenging times. LPTE’s work has helped us improve our customer satisfaction and make a greater impact on society.',
  },
  {
    name: 'Mr. G. S. Gill',
    role: 'Managing Director',
    organization: 'CIDCO',
    image: `${SITE_URL}/wp-content/uploads/2022/07/Untitled-design-2022-07-01T115422.185.png`,
    quote:
      'I have had the pleasure to work on a few projects with LPTE. I have seen them execute the projects in a planned manner and they have delivered the desired results while sticking to the strict timelines. Its work has been instrumental in electrifying the city.',
  },
];

export const clientLogos = Array.from({ length: 12 }, (_, index) => ({
  name: `Client ${index + 1}`,
  image: `${SITE_URL}/wp-content/uploads/2022/04/${index + 1}.png`,
}));
