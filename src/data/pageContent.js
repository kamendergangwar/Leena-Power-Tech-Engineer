import { ROUTES, companyInfo } from './siteContent';

export const pageContent = {
  [ROUTES.about]: {
    title: 'About Us',
    subtitle: 'Integrated EPC expertise built over decades of execution.',
    intro:
      'Leena Powertech Engineers Pvt. Ltd. is an integrated EPC organization focused on electrical infrastructure, dependable project delivery, and long-term client relationships.',
    sections: [
      {
        heading: 'Who We Are',
        body:
          'Our teams deliver turnkey electrical engineering services across planning, execution, commissioning, and operations support for public and private infrastructure projects.',
      },
      {
        heading: 'What Drives Us',
        body:
          'We prioritize safety, quality, and transparency in every project cycle, while continuously improving processes through modern tools and disciplined project management.',
      },
    ],
  },
  [ROUTES.directors]: {
    title: 'Our Team',
    subtitle: 'Experienced leadership with a delivery-first mindset.',
    intro:
      'Our leadership group combines engineering rigor, execution depth, and field experience to deliver complex assignments with predictable outcomes.',
    sections: [
      {
        heading: 'Execution Leadership',
        body:
          'Project leaders and functional heads coordinate design, procurement, site management, and stakeholder alignment to maintain schedule and quality control.',
      },
      {
        heading: 'Culture',
        body:
          'We build teams that are accountable, collaborative, and responsive, enabling quick issue resolution and strong client confidence on live projects.',
      },
    ],
  },
  [ROUTES.awards]: {
    title: 'Awards & Recognitions',
    subtitle: 'Recognition earned through quality and consistency.',
    intro:
      'Leena Powertech has been recognized by clients and institutions for project performance, reliability, and contribution to infrastructure development.',
    sections: [
      {
        heading: 'Quality Milestones',
        body:
          'Our track record reflects dependable execution standards, repeat business, and long-term relationships with major infrastructure stakeholders.',
      },
      {
        heading: 'Operational Excellence',
        body:
          'Consistent outcomes are driven by process discipline, skilled site teams, and proactive planning for technical and delivery risks.',
      },
    ],
  },
  [ROUTES.mep]: {
    title: 'MEP Works',
    subtitle: 'End-to-end MEP delivery for modern buildings and campuses.',
    intro:
      'We execute MEP works with integrated planning across electrical systems, utility coordination, safety practices, and commissioning readiness.',
    sections: [
      {
        heading: 'Scope',
        bullets: [
          'Electrical design coordination and installation',
          'Power distribution systems and panel integration',
          'Testing, commissioning, and handover support',
        ],
      },
    ],
  },
  [ROUTES.transmission]: {
    title: 'Transmission',
    subtitle: 'Robust transmission infrastructure with execution certainty.',
    intro:
      'Our transmission capabilities cover high-voltage works, route planning support, construction management, and completion oversight.',
    sections: [
      {
        heading: 'Delivery Strength',
        bullets: [
          'Structured project sequencing and resource planning',
          'Safety-first field execution',
          'Quality checkpoints through each construction stage',
        ],
      },
    ],
  },
  [ROUTES.distribution]: {
    title: 'Distribution',
    subtitle: 'Reliable last-mile power distribution programs.',
    intro:
      'We execute distribution projects that improve supply reliability and operational resilience across urban and regional networks.',
    sections: [
      {
        heading: 'Key Activities',
        bullets: [
          'Network strengthening and augmentation',
          'Feeder and consumer-side electrical infrastructure',
          'Execution support for utility modernization goals',
        ],
      },
    ],
  },
  [ROUTES.om]: {
    title: 'O & M',
    subtitle: 'Operational continuity through disciplined maintenance.',
    intro:
      'Our operations and maintenance services are designed to maximize uptime, reduce failures, and extend asset life with predictable service models.',
    sections: [
      {
        heading: 'Service Approach',
        bullets: [
          'Preventive and corrective maintenance workflows',
          'On-call support and escalation protocols',
          'Performance monitoring and reporting',
        ],
      },
    ],
  },
  [ROUTES.railways]: {
    title: 'Railways & Metro',
    subtitle: 'Electrification and power systems for transport infrastructure.',
    intro:
      'We support rail and metro projects with focused execution on electrification-related systems, quality checks, and handover coordination.',
    sections: [
      {
        heading: 'Capabilities',
        bullets: [
          'Rail and metro electrical infrastructure packages',
          'Commissioning support under strict timelines',
          'Coordination across multi-agency stakeholders',
        ],
      },
    ],
  },
  [ROUTES.solar]: {
    title: 'Solar System Installations',
    subtitle: 'Scalable renewable energy implementation support.',
    intro:
      'Our solar project teams deliver structured execution support from site readiness and installation to commissioning and operational handover.',
    sections: [
      {
        heading: 'What We Deliver',
        bullets: [
          'Solar infrastructure installation support',
          'Electrical integration and quality validation',
          'Commissioning and documentation assistance',
        ],
      },
    ],
  },
  [ROUTES.evcs]: {
    title: 'EVCS',
    subtitle: 'Electric vehicle charging infrastructure execution.',
    intro:
      'We deliver practical EV charging deployments with electrical safety, network readiness, and operational reliability at the core.',
    sections: [
      {
        heading: 'Deployment Focus',
        bullets: [
          'Site infrastructure and charger integration',
          'Power distribution and protection configuration',
          'Commissioning and system acceptance support',
        ],
      },
    ],
  },
  [ROUTES.liftEscalators]: {
    title: 'Lift & Escalators',
    subtitle: 'Integrated electrical support for vertical mobility systems.',
    intro:
      'Our teams provide project support for power and control integration requirements around lift and escalator infrastructure.',
    sections: [
      {
        heading: 'Execution Areas',
        bullets: [
          'Electrical coordination and readiness works',
          'Installation-stage support and compliance checks',
          'Final testing and handover facilitation',
        ],
      },
    ],
  },
  [ROUTES.csr]: {
    title: 'CSR',
    subtitle: 'Responsible growth through social commitment.',
    intro:
      'Our CSR efforts focus on meaningful participation in initiatives that contribute to community development and social well-being.',
    sections: [
      {
        heading: 'Focus Areas',
        bullets: [
          'Community-oriented participation',
          'Support for local development priorities',
          'Long-term value through responsible action',
        ],
      },
    ],
  },
  [ROUTES.careers]: {
    title: 'Careers',
    subtitle: 'Build your career with a high-impact engineering team.',
    intro:
      'We offer opportunities for professionals who want to work on challenging infrastructure programs with real execution ownership.',
    sections: [
      {
        heading: 'Why Join',
        bullets: [
          'Large-scale project exposure',
          'Learning-led delivery culture',
          'Career paths across technical and managerial tracks',
        ],
      },
    ],
  },
  [ROUTES.currentVacancy]: {
    title: 'Current Vacancy',
    subtitle: 'Explore open roles across projects and functions.',
    intro:
      'We are regularly hiring for site, design, planning, and support roles aligned to active programs and growth initiatives.',
    sections: [
      {
        heading: 'Application Note',
        body:
          'Share your updated profile with role preference and experience details. Shortlisted candidates are contacted by our hiring team.',
      },
    ],
  },
  [ROUTES.joinTeam]: {
    title: 'Join the Team',
    subtitle: 'Work with people who build what matters.',
    intro:
      'Join Leena Powertech to contribute to projects that shape critical infrastructure and deliver measurable public impact.',
    sections: [
      {
        heading: 'How We Work',
        body:
          'We value accountability, collaboration, and problem-solving on live projects where quality and timelines both matter.',
      },
    ],
  },
  [ROUTES.hrInitiatives]: {
    title: 'HR Initiatives',
    subtitle: 'People practices that support long-term growth.',
    intro:
      'Our HR initiatives are designed around capability building, employee engagement, and a supportive delivery environment.',
    sections: [
      {
        heading: 'People Priorities',
        bullets: [
          'Learning and development pathways',
          'Structured onboarding and mentorship',
          'Performance support and recognition',
        ],
      },
    ],
  },
  [ROUTES.events]: {
    title: 'Events',
    subtitle: 'Milestones, participation, and industry engagement.',
    intro:
      'We participate in sector events, project milestones, and organizational activities that strengthen collaboration across teams and stakeholders.',
    sections: [
      {
        heading: 'What You Will Find',
        bullets: [
          'Project milestone highlights',
          'Industry participation snapshots',
          'Organization updates and announcements',
        ],
      },
    ],
  },
  [ROUTES.contact]: {
    title: 'Contact Us',
    subtitle: 'Connect with Leena Powertech.',
    intro:
      'Reach out to discuss project requirements, partnerships, and service opportunities. Our team will respond promptly.',
    sections: [
      {
        heading: 'Contact Details',
        bullets: [
          `Phone: ${companyInfo.phone}`,
          `Email: ${companyInfo.email}`,
          `Address: ${companyInfo.address}`,
        ],
      },
    ],
  },
};
