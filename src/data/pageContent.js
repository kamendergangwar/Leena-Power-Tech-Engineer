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
    title: 'O & M',
    subtitle: 'Long-term reliability through structured maintenance programs.',
    intro:
      'Our O&M services maintain substations, overhead and underground distribution systems, and exterior lighting networks to ensure safe and uninterrupted operations.',
    sections: [
      {
        heading: 'Service Coverage',
        bullets: [
          'Preventive and corrective maintenance planning',
          'System reliability and safety compliance checks',
          'Operational support in locations such as Nerul, Baman Dongri, Kharghar Metro, and Bhoomiputra Bhavan',
        ],
      },
    ],
  },
  [ROUTES.railways]: {
    title: 'Railways & Metro',
    subtitle: 'Integrated power and electrification solutions for urban transit.',
    intro:
      'LPTE has strategically expanded into rail and metro electrification to support safe, affordable, and reliable transportation infrastructure in rapidly growing urban corridors.',
    sections: [
      {
        heading: 'Capabilities',
        bullets: [
          'Design, engineering, installation, testing, and commissioning support',
          'Powering and connecting substations for metro and rail systems',
          'Electrification of overhead line systems and related integration',
          'Coordination with multiple stakeholders for large public programs',
        ],
      },
    ],
  },
  [ROUTES.solar]: {
    title: 'Solar System Installations',
    subtitle: 'Renewable energy delivery aligned to sustainable growth.',
    intro:
      'Solar energy is renewable, clean, and sustainable. LPTE supports solar implementation for organizations that are scaling green energy adoption and modern infrastructure practices.',
    sections: [
      {
        heading: 'Delivery Focus',
        bullets: [
          'Site-level solar system implementation and integration',
          'Execution support for long-term renewable energy transition goals',
          'Project support aligned to national sustainability priorities',
          'Experience in deployments such as Bhoomiputra Bhavan, Ulwe',
        ],
      },
    ],
  },
  [ROUTES.evcs]: {
    title: 'EVCS',
    subtitle: 'Electric vehicle charging infrastructure for future mobility.',
    intro:
      'To address rising pollution and evolving mobility demand, LPTE offers electric mobility solutions through EV charging station infrastructure aligned with India’s EV vision.',
    sections: [
      {
        heading: 'EV Mobility Direction',
        bullets: [
          'Electric Vehicle Charging Station (EVCS) setup support',
          'Infrastructure planning for scalable charging networks',
          'Collaboration-led deployment with technology partners',
        ],
      },
    ],
  },
  [ROUTES.liftEscalators]: {
    title: 'Lift & Escalators',
    subtitle: 'Vertical mobility support for modern infrastructure.',
    intro:
      'As cities modernize, LPTE has expanded into lift and escalator business solutions, partnering to provide reliable accessibility-oriented infrastructure.',
    sections: [
      {
        heading: 'Service Scope',
        bullets: [
          'Power and electrical readiness for lift/escalator systems',
          'Integration support with partner OEMs',
          'Execution coordination for public and private facilities',
        ],
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

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

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
    hero: asset('assets/pages/mep/mep-1.png'),
    gallery: [
      { src: asset('assets/pages/mep/mep-2.png'), alt: 'MEP project visual 2' },
      { src: asset('assets/pages/mep/mep-3.png'), alt: 'MEP project visual 3' },
    ],
  },
  [ROUTES.transmission]: {
    hero: asset('assets/pages/transmission/trans-1.png'),
    gallery: [
      { src: asset('assets/pages/transmission/trans-2.png'), alt: 'Transmission project visual 2' },
      { src: asset('assets/pages/transmission/trans-3.png'), alt: 'Transmission project visual 3' },
    ],
  },
  [ROUTES.distribution]: {
    hero: asset('assets/pages/distribution/ehv-substation.jpg'),
    gallery: [
      { src: asset('assets/pages/distribution/dist-1.png'), alt: 'Distribution project visual 1' },
      { src: asset('assets/pages/distribution/dist-2.png'), alt: 'Distribution project visual 2' },
      { src: asset('assets/pages/distribution/dist-3.png'), alt: 'Distribution project visual 3' },
    ],
  },
  [ROUTES.om]: {
    hero: asset('assets/pages/om/om-1.png'),
    gallery: [
      { src: asset('assets/pages/om/om-2.png'), alt: 'Operations and maintenance visual 2' },
      { src: asset('assets/pages/om/om-3.png'), alt: 'Operations and maintenance visual 3' },
    ],
  },
  [ROUTES.railways]: {
    hero: asset('assets/pages/railways/railway-hero.jpeg'),
    gallery: [
      { src: asset('assets/pages/railways/railway-1.png'), alt: 'Railways and metro visual 1' },
      { src: asset('assets/pages/railways/railway-2.png'), alt: 'Railways and metro visual 2' },
    ],
  },
  [ROUTES.solar]: {
    hero: asset('assets/pages/solar/solar-hero.jpg'),
    gallery: [
      { src: asset('assets/pages/solar/solar-1.png'), alt: 'Solar installations visual 1' },
      { src: asset('assets/pages/solar/solar-2.png'), alt: 'Solar installations visual 2' },
    ],
  },
  [ROUTES.evcs]: {
    hero: asset('assets/pages/evcs/evcs-hero.png'),
    gallery: [{ src: asset('assets/pages/evcs/evcs-1.png'), alt: 'EVCS project visual' }],
  },
  [ROUTES.liftEscalators]: {
    hero: asset('assets/pages/lifts/lifts-hero.png'),
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
