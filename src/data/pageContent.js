import { withApiBase } from '../utils/api';
import { ROUTES, companyInfo } from './siteContent';

export const pageContent = {
  [ROUTES.about]: {
    title: 'About Us',
    subtitle: 'Built on experience, expertise, and technological insight since 1995.',
    intro:
      'LPTE was started in 1995 and has grown from Navi Mumbai to a PAN-India EPC delivery footprint across power distribution, transmission, MEP projects, railways and metro infrastructure.',
    sections: [
      {
        heading: 'Our Contribution In Nation Building',
        body:
          'Over the years, our teams have supported utilities and public development authorities by executing turnkey electrical projects that connect substations, buildings, and public infrastructure across multiple states.',
      },
      {
        heading: 'Vision & Mission',
        body:
          'Our mission is to be a leading EPC company across PAN-India in Distribution, Transmission, Railway Electrification, MEP, and O&M while maintaining strong quality and safety standards.',
      },
      {
        heading: 'Company Values',
        bullets: [
          'Believe in people and build long-term capability',
          'Go beyond oneself through accountable execution',
          'Deliver quality with discipline and transparency',
          'Adopt technology and process improvement continuously',
        ],
      },
    ],
  },
  [ROUTES.directors]: {
    title: 'Our Team',
    subtitle: 'Leadership driven by the philosophy of believing in people.',
    intro:
      'Leena Powertech attributes its growth to a professionally managed leadership team that combines technical depth, execution rigor, and people-first culture across 200+ team members.',
    sections: [
      {
        heading: 'Our Directors',
        bullets: [
          'Mr. Amit Teckchandani - Founder, Chairman & Managing Director',
          'Mrs. Komal Teckchandani - Co-founder and Director of Finance',
        ],
      },
      {
        heading: 'Our Leadership',
        bullets: [
          'Mr. Natwar Jha - Chief Executive Officer',
          'Project and functional leadership with extensive EPC experience',
          'Focused execution across multi-state infrastructure programs',
        ],
      },
      {
        heading: 'Culture',
        body:
          'Our philosophy centers on people development, team ownership, and collaborative execution, enabling sustained delivery quality across challenging projects.',
      },
    ],
  },
  [ROUTES.awards]: {
    title: 'Awards & Recognitions',
    subtitle: 'Prestigious recognition for EPC contribution across India.',
    intro:
      'Our project delivery has been acknowledged by multiple government bodies including Maharashtra, Goa, Jharkhand, and national power sector leadership.',
    sections: [
      {
        heading: 'Major Recognitions',
        bullets: [
          'Maharashtra State Chief Minister recognition',
          'Governor of Goa recognition',
          'Patna SBPCL Department recognition',
          'Recognition from Power Minister of India',
          'Jharkhand State Chief Minister recognition',
        ],
      },
    ],
  },
  [ROUTES.mep]: {
    title: 'MEP Works',
    subtitle: 'Planning, design, and execution for complete MEP systems.',
    intro:
      'MEP engineering is a critical part of building infrastructure, and LPTE supports planning, design review, specification, estimation, inspection methods, and final commissioning support.',
    sections: [
      {
        heading: 'Our Expertise',
        bullets: [
          'Project reports, drawings, and MEP specifications',
          'Execution support from design to commissioning',
          '30+ major projects executed with cumulative value above 150 Cr',
          'Deliveries for clients including CIDCO, SBI, and IDBI',
        ],
      },
    ],
  },
  [ROUTES.transmission]: {
    title: 'Transmission',
    subtitle: 'Substations, lines, and high-voltage systems execution.',
    intro:
      'LPTE executes transmission infrastructure with capability across GIS, AIS, EHV substations, AC traction substations, tower and monopole lines, and EHV cable works.',
    sections: [
      {
        heading: 'Capabilities',
        bullets: [
          'Erection of GIS, AIS, and EHV substations',
          'Design of 110/220/400 KV AC traction HV substations',
          'Construction of 110/220 KV tower and monopole transmission lines',
          'EHV cable laying and integration',
        ],
      },
    ],
  },
  [ROUTES.distribution]: {
    title: 'Distribution',
    subtitle: 'End-to-end EPC for urban and regional distribution systems.',
    intro:
      'With more than two decades of execution depth in electrical infrastructure, LPTE has delivered integrated concept-to-commissioning distribution projects for utilities and urban developers.',
    sections: [
      {
        heading: 'What We Deliver',
        bullets: [
          'Turnkey EPC including civil works, erection, testing, and substations',
          'Technology-driven distribution systems including SCADA execution',
          'Single-point accountability model for better project control',
          'Support for central and state power sector programs',
        ],
      },
    ],
  },
  [ROUTES.om]: {
    title: 'Operation & Maintenance',
    subtitle: 'Periodic servicing, repair, and reliability support for operating electrical assets.',
    intro:
      'Electrical systems need to ensure continued compliance with periodic servicing and repair. Our team helps in maintaining electrical systems like substations, overhead & underground electrical distribution system, and exterior lighting system to ensure that they work without any hindrance for a long time. Such maintenance helps to prevent system and equipment failure while ensuring maximum safety and efficiency in the utilization of the facilities.',
    sections: [
      {
        heading: 'Operational Reach',
        body:
          'We have done maintenance work in numerous places in Navi Mumbai like Nerul station, Baman Dongri station, Kharghar metro, and Bhoomiputra Bhavan. We help the utilities and power companies in maximizing their efficiency and providing their consumers with uninterrupted service.',
        bullets: ['Nerul station', 'Baman Dongri station', 'Kharghar metro', 'Bhoomiputra Bhavan'],
      },
    ],
  },
  [ROUTES.railways]: {
    title: 'Railways & Metro',
    subtitle: 'Integrated rail and metro electrification for growing urban transit infrastructure.',
    intro:
      'Metro railways in urban areas have grown exponentially across the country and the volume of passengers continue to grow for rail transit systems for a safe, affordable, and reliable transportation service. LPTE has strategically ventured into this business vertical which shall contribute to growth of Indian infrastructure.',
    sections: [
      {
        heading: 'Execution Focus',
        body:
          'LPTE assists in Metro Rail Electrification Projects by enabling integrated project execution with increased efficiency, stringent safety measures and higher visibility across all projects. LPTE offers its competence in Design, Engineering, Installation, Testing, and Commissioning of multi-disciplinary Metro & Rail Projects with the capability to build, power and connect substations. Our skills, experience and capability lie in power and electrification of overhead lines, including the installation of new lines, integration with multiple stake holders for common interest in the growth of nation building.',
        bullets: ['Design', 'Engineering', 'Installation', 'Testing', 'Commissioning'],
      },
    ],
  },
  [ROUTES.solar]: {
    title: 'Solar system Installations',
    subtitle: 'Clean, renewable, and sustainable solar infrastructure delivery.',
    intro:
      'Unlike gas and coal, solar energy is renewable, clean and sustainable. Solar power does not pollute our air or contribute to global warming. For many businesses, being “green” and making environmentally-friendly decisions is important to their business goals.',
    sections: [
      {
        heading: 'Some Advantages of Solar Energy -',
        bullets: [
          'Renewable Energy Source. Among all the benefits of solar panels, the most important thing is that solar energy is a truly renewable energy source.',
          'Reduces Electricity Bills.',
          'Diverse Applications.',
          'Low Maintenance Costs.',
          'Technology Development.',
        ],
      },
      {
        heading: 'Industry Direction',
        body:
          'Compared with the approximately 15 GW of solar capacity deployed in 2020, annual solar deployment is 30 GW on average in the early 2020s and grows to 60 GW on average from 2025 to 2030. Similarly substantial solar deployment rates continue in the 2030s and beyond. Photovoltaics (PV) and concentrating solar power are likely to continue to grow rapidly. The National Renewable Energy Laboratory (NREL) projects solar energy could provide 45% of the electricity in the United States by 2050 if the energy system is fully decarbonized and technology costs are projected to continue to be lowered. The goals of this project for Solar Energy System Installations and Energy Efficiency Retrofits (SEER) is to be an efficient organization to implement these SEER activities and to do it in a way that the organization is financially profitable and therefore sustainable, so that the end users get better outcome and society as a whole gets a positive impact.',
      },
      {
        heading: 'Solar system at Bhoomiputra Bhavan Ulwe',
      },
    ],
  },
  [ROUTES.evcs]: {
    title: 'Electric Vehicle Charging Stations',
    subtitle: 'Electric mobility solutions aligned with India’s public transport future.',
    intro:
      'The challenge of increasing pollution and decreasing fuel reserves presented the opportunity to invent Electric Vehicle as an environment-friendly means of transport.',
    sections: [
      {
        heading: 'Public Transport Vision',
        body:
          'Sharing the vision of Govt of India to have Electric Vehicles for public transport by 2030, LPT is excited to offer Electric Mobility Solutions through setting up Electric Vehicle Charging Stations (EVCS).',
      },
      {
        heading: 'Partnership Direction',
        body:
          'Through joint ventures with international partners, LPT EVCS aims at re-defining the transport scenario in India.',
      },
    ],
  },
  [ROUTES.liftEscalators]: {
    title: 'Lift and Escalators',
    subtitle: 'Accessible vertical mobility solutions for modern spaces.',
    intro:
      'With increasing modernization of places across the country, our company has forayed into the business of lifts and escalators. In collaboration with our partners, we provide seamless solutions to make places more accessible.',
    sections: [
      {
        heading: 'Accessibility Support',
      },
    ],
  },
  [ROUTES.csr]: {
    title: 'CSR',
    subtitle: 'Giving back through safety, environment, and skill-building initiatives.',
    intro:
      'At LPTE, CSR is centered on responsible citizenship through environmental activity, safety awareness, and social empowerment programs.',
    sections: [
      {
        heading: 'CSR @ LPTE',
        bullets: [
          'National Safety Week awareness campaigns at project sites',
          'Plantation initiatives including community activity in Satpati',
          'Skill workshops for underprivileged children',
          'Programs inspired by our \"Believe in People\" principle',
        ],
      },
    ],
  },
  [ROUTES.careers]: {
    title: 'Careers',
    subtitle: 'Current opportunities across project and planning functions.',
    intro:
      'LPTE hires across business development, project execution, and planning teams. Opportunities are listed by role type and location with full-time openings in multiple regions.',
    sections: [
      {
        heading: 'Highlighted Openings',
        bullets: [
          'Supervisor Electrical (Project) - Kolhapur, Palghar, Ratnagiri, Vasai',
          'Estimation Engineer (Business Development) - CBD Belapur, Navi Mumbai',
          'Planning Engineer (Project Planning) - CBD Belapur, Navi Mumbai',
        ],
      },
    ],
  },
  [ROUTES.currentVacancy]: {
    title: 'Current Vacancy',
    subtitle: 'Latest open positions across LPTE functions.',
    intro:
      'Current vacancies are listed under project, business development, and planning functions with role-wise location tags and detailed descriptions.',
    sections: [
      {
        heading: 'Available Roles',
        bullets: [
          'Supervisor Electrical - Project',
          'Estimation Engineer - Business Development',
          'Planning Engineer - Project Planning',
        ],
      },
    ],
  },
  [ROUTES.joinTeam]: {
    title: 'Join the Team',
    subtitle: 'Professionally managed, people-first work culture.',
    intro:
      'LPTE follows the \"Believe in People\" principle and supports employee growth through team engagement programs, development pathways, and long-term career planning.',
    sections: [
      {
        heading: 'Opportunities In LPTE',
        body:
          'To join our team, you can share your resume with our hiring desk at careers@lptindia.in and hr@lptindia.in.',
      },
      {
        heading: 'Important Notice',
        body:
          'LPTE follows a merit-based hiring practice and does not charge any fee, deposit, or payment at any stage of recruitment. Any such request is fraudulent and not associated with LPTE.',
      },
    ],
  },
  [ROUTES.hrInitiatives]: {
    title: 'HR Initiatives',
    subtitle: 'Structured employee engagement and capability development programs.',
    intro:
      'Our HR initiatives are built to strengthen belonging, improve capability, and reward long-term commitment through structured activities and development platforms.',
    sections: [
      {
        heading: 'Salient HR Initiatives',
        bullets: [
          'Get-togethers, sports, cultural events, and festival celebrations',
          'Employee welfare trust support programs',
          'Best Employee and site-level recognition initiatives',
          'Long Service Awards for sustained contribution',
          'Learning Centre at CBD-Belapur for skill development',
        ],
      },
    ],
  },
  [ROUTES.events]: {
    title: 'Events',
    subtitle: 'Organization and team activities across the year.',
    intro:
      'LPTE events include annual team engagements and organization-wide activities designed to strengthen culture, collaboration, and recognition.',
    sections: [
      {
        heading: 'Featured',
        bullets: [
          'Annual Day highlights',
          'Employee and team celebration moments',
          'Project-community engagement snapshots',
        ],
      },
    ],
  },
  [ROUTES.contact]: {
    title: 'Contact Us',
    subtitle: 'Get in touch with Leena Powertech Engineers Pvt. Ltd.',
    intro:
      'For project discussions, partnerships, and service requests, connect with us through the details below. Our team will coordinate the next steps quickly.',
    sections: [
      {
        heading: 'Contact Details',
        bullets: [
          'Office: Sai Chambers, Sector-11, C.B.D Belapur, Navi Mumbai - 400614',
          `Phone: ${companyInfo.phone}`,
          `Email: ${companyInfo.email}`,
          `Address: ${companyInfo.address}`,
        ],
      },
    ],
  },
};

const asset = (path) => withApiBase(path);

export const pageImages = {
  [ROUTES.about]: {
    hero: asset('assets/pages/about/hero.png'),
    gallery: [
      { src: asset('assets/pages/about/collage.jpg'), alt: 'About Leena Powertech collage' },
      { src: asset('assets/pages/about/presence.png'), alt: 'Regional presence graphic' },
    ],
  },
  [ROUTES.directors]: {
    hero: asset('assets/pages/directors/director-amit.jpg'),
    gallery: [
      { src: asset('assets/pages/directors/director-komal.png'), alt: 'Director Komal Teckchandani' },
      { src: asset('assets/pages/directors/leadership-natwar.png'), alt: 'Leadership - Natwar Jha' },
    ],
  },
  [ROUTES.awards]: {
    hero: asset('assets/pages/awards/maharashtra-cm.jpg'),
    gallery: [
      { src: asset('assets/pages/awards/goa-governor.jpg'), alt: 'Award recognition with Goa Governor' },
      { src: asset('assets/pages/awards/power-minister.jpg'), alt: 'Recognition from Power Minister' },
      { src: asset('assets/pages/awards/jharkhand-cm.jpg'), alt: 'Jharkhand recognition ceremony' },
    ],
  },
  [ROUTES.mep]: {
    heroBanner: asset('assets/pages/mep/mep-hero-live.png'),
    hero: asset('assets/pages/mep/mep-1.png'),
    gallery: [
      { src: asset('assets/pages/mep/mep-2.png'), alt: 'MEP project visual 2' },
      { src: asset('assets/pages/mep/mep-3.png'), alt: 'MEP project visual 3' },
    ],
  },
  [ROUTES.transmission]: {
    heroBanner: asset('assets/pages/transmission/transmission-hero-live.png'),
    hero: asset('assets/pages/transmission/trans-1.png'),
    gallery: [
      { src: asset('assets/pages/transmission/trans-2.png'), alt: 'Transmission project visual 2' },
      { src: asset('assets/pages/transmission/trans-3.png'), alt: 'Transmission project visual 3' },
    ],
  },
  [ROUTES.distribution]: {
    heroBanner: asset('assets/pages/distribution/distribution-hero-live.jpg'),
    hero: asset('assets/pages/distribution/ehv-substation.jpg'),
    gallery: [
      { src: asset('assets/pages/distribution/dist-1.png'), alt: 'Distribution project visual 1' },
      { src: asset('assets/pages/distribution/dist-2.png'), alt: 'Distribution project visual 2' },
      { src: asset('assets/pages/distribution/dist-3.png'), alt: 'Distribution project visual 3' },
    ],
  },
  [ROUTES.om]: {
    hero: asset('assets/pages/om/om-hero.png'),
    gallery: [
      {
        src: asset('assets/pages/om/om-nerul-substation.png'),
        alt: 'Nerul Substation',
        caption: 'Nerul Substation',
      },
      {
        src: asset('assets/pages/om/om-bhoomiputra-bhavan.png'),
        alt: 'Bhoomiputra Bhavan',
        caption: 'Bhoomiputra Bhavan',
      },
      {
        src: asset('assets/pages/om/om-patna-substation.png'),
        alt: 'Patna Substation',
        caption: 'Patna Substation',
      },
      {
        src: asset('assets/pages/om/om-navi-mumbai-metro.png'),
        alt: 'Navi Mumbai Metro',
        caption: 'Navi Mumbai Metro',
      },
      {
        src: asset('assets/pages/om/om-baman-dongri-station.png'),
        alt: 'Baman Dongri Railway station',
        caption: 'Baman Dongri Railway station',
      },
    ],
  },
  [ROUTES.railways]: {
    hero: asset('assets/pages/railways/railway-hero-live.jpeg'),
    gallery: [
      { src: asset('assets/pages/railways/railway-navi-mumbai-station.png'), alt: 'Navi Mumbai Railway station', caption: 'Navi Mumbai Railway station' },
      { src: asset('assets/pages/railways/railway-baman-dongri-station-1.png'), alt: 'Baman Dongri Railway station', caption: 'Baman Dongri Railway station' },
      { src: asset('assets/pages/railways/railway-koparkhairane-station.png'), alt: 'Koparkhairane Station', caption: 'Koparkhairane Station' },
      { src: asset('assets/pages/railways/railway-baman-dongri-station-2.png'), alt: 'Baman Dongri Railway station', caption: 'Baman Dongri Railway station' },
      { src: asset('assets/pages/railways/railway-mmrda-1.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
      { src: asset('assets/pages/railways/railway-mmrda-2.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
      { src: asset('assets/pages/railways/railway-mmrda-3.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
      { src: asset('assets/pages/railways/railway-mmrda-4.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
      { src: asset('assets/pages/railways/railway-mmrda-5.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
      { src: asset('assets/pages/railways/railway-mmrda-6.png'), alt: 'MMRDA Mumbai', caption: 'MMRDA Mumbai' },
    ],
  },
  [ROUTES.solar]: {
    hero: asset('assets/pages/solar/solar-hero-live.jpg'),
    gallery: [
      { src: asset('assets/pages/solar/solar-bhoomiputra-1.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 1' },
      { src: asset('assets/pages/solar/solar-bhoomiputra-2.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 2' },
      { src: asset('assets/pages/solar/solar-bhoomiputra-3.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 3' },
      { src: asset('assets/pages/solar/solar-bhoomiputra-4.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 4' },
      { src: asset('assets/pages/solar/solar-bhoomiputra-5.png'), alt: 'Solar system at Bhoomiputra Bhavan Ulwe view 5' },
    ],
  },
  [ROUTES.evcs]: {
    hero: asset('assets/pages/evcs/evcs-hero-live.png'),
    gallery: [{ src: asset('assets/pages/evcs/evcs-station-live.png'), alt: 'Electric vehicle charging station' }],
  },
  [ROUTES.liftEscalators]: {
    hero: asset('assets/pages/lifts/lifts-hero-live.png'),
  },
  [ROUTES.csr]: {
    hero: asset('assets/pages/csr/csr-hero.jpg'),
    gallery: [
      { src: asset('assets/pages/csr/csr-1.png'), alt: 'CSR activity visual 1' },
      { src: asset('assets/pages/csr/csr-2.png'), alt: 'CSR activity visual 2' },
    ],
  },
  [ROUTES.careers]: {
    hero: asset('assets/pages/current-vacancy/jobs-card.png'),
  },
  [ROUTES.currentVacancy]: {
    hero: asset('assets/pages/current-vacancy/jobs-card.png'),
  },
  [ROUTES.joinTeam]: {
    hero: asset('assets/pages/join-team/join-hero.png'),
  },
  [ROUTES.hrInitiatives]: {
    hero: asset('assets/pages/hr/hr-hero.png'),
    gallery: [{ src: asset('assets/pages/hr/hr-1.png'), alt: 'HR initiatives visual' }],
  },
  [ROUTES.events]: {
    hero: asset('assets/pages/events/events-hero.png'),
    gallery: [{ src: asset('assets/pages/events/events-1.jpeg'), alt: 'Events gallery visual' }],
  },
  [ROUTES.contact]: {
    hero: asset('assets/pages/contact/contact-hero.png'),
    gallery: [{ src: asset('assets/pages/contact/contact-1.png'), alt: 'Contact page office visual' }],
  },
};
