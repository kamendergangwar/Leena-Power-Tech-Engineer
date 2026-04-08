export const SITE_URL = 'https://leenapowertech.in';

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
  { name: 'Home', href: `${SITE_URL}/` },
  {
    name: 'About Us',
    href: '#',
    children: [
      { name: 'About Us', href: `${SITE_URL}/about/` },
      { name: 'Our team', href: `${SITE_URL}/directors/` },
      { name: 'Awards & Recognitions', href: `${SITE_URL}/awards-recognitions/` },
    ],
  },
  {
    name: 'Verticals',
    href: '#',
    children: [
      { name: 'MEP works', href: `${SITE_URL}/mep-works/` },
      { name: 'Transmission', href: `${SITE_URL}/transmission/` },
      { name: 'Distribution', href: `${SITE_URL}/distribution/` },
      { name: 'O & M', href: `${SITE_URL}/o-m/` },
      { name: 'Railways & Metro', href: `${SITE_URL}/railways-metro/` },
    ],
  },
  {
    name: 'New Ventures',
    href: '#',
    children: [
      { name: 'Solar system installations', href: `${SITE_URL}/solar-system-installations/` },
      { name: 'EVCS', href: `${SITE_URL}/evcs/` },
      { name: 'Lift & Escalators', href: `${SITE_URL}/ift-escalators/` },
    ],
  },
  { name: 'CSR', href: `${SITE_URL}/csr/` },
  {
    name: 'Careers',
    href: `${SITE_URL}/careers/`,
    children: [
      { name: 'Current Vacancy', href: `${SITE_URL}/current-vacancy/` },
      { name: 'Join the Team', href: `${SITE_URL}/join-the-team/` },
      { name: 'HR Initiatives', href: `${SITE_URL}/hr-initiatives/` },
    ],
  },
  { name: 'Events', href: `${SITE_URL}/events/` },
  { name: 'Contact Us', href: `${SITE_URL}/contact/` },
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
  ctaHref: `${SITE_URL}/about/`,
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
    href: `${SITE_URL}/mep-works/`,
    image: `${SITE_URL}/wp-content/uploads/2022/04/MEP-7.png`,
  },
  {
    title: 'Transmission',
    href: `${SITE_URL}/transmission/`,
    image: '/assets/hero1.png',
  },
  {
    title: 'Distribution',
    href: `${SITE_URL}/distribution/`,
    image: '/assets/distribution.png',
  },
  {
    title: 'O & M',
    href: `${SITE_URL}/o-m/`,
    image: '/assets/om.png',
  },
  {
    title: 'Railways & Metro',
    href: `${SITE_URL}/railways-metro/`,
    image: '/assets/hero3.png',
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
