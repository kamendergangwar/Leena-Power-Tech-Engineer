import React from 'react';

const base = import.meta.env.BASE_URL;
const aboutAssetVersion = '20260408-1';
const aboutAsset = (path) => `${base}${path}?v=${aboutAssetVersion}`;
const aboutHeroVideo = 'https://leenapowertech.in/wp-content/uploads/2022/07/MEP-1920-%C3%97-900-px-6.mp4';
const aboutHeroPoster = aboutAsset('assets/pages/about/hero.png');
const aboutSide = aboutAsset('assets/pages/about/about-side.png');
const aboutCollage = aboutAsset('assets/pages/about/collage.jpg');
const aboutVision = aboutAsset('assets/pages/about/vision.webp');
const aboutPresence = aboutAsset('assets/pages/about/presence-wide.png');
const financeDoc = 'https://leenapowertech.in/wp-content/uploads/2022/05/MGT7.pdf';

const values = [
  'Integrity: To be fair, honest, transparent, and ethical in our conduct.',
  'Loyalty: Building mutually beneficial relationships both internally and externally that stand the test of circumstances and time.',
  'Customer Satisfaction: Creating value for our customers and delivering solutions beyond their expectations.',
  'Teamwork: Our company is full of amazing individuals, but it is only through teamwork that we achieve excellence.',
  'Quality & Safety: We adhere to the highest standards of quality and ensure customers get the best service. All our work is carried out with safety as our main priority.',
  'Innovative: To continuously try new things and take risks to break our barriers and provide our customers with the best solutions.',
  'Performance: We strive to improve our performance and encourage individuals to push their comfort boundaries.',
];

const missionPoints = [
  'To adopt practices that strengthen our core.',
  'Setting high standards with services, reliability and integrity in our business.',
  'Identify individuals with drive who will be able to run with us during the next 6-8 years.',
  'Define processes and hierarchy to improve efficiency and make people responsible for their work.',
  'Create a positive and entrepreneurial atmosphere in the company.',
  'Define processes that are natural and people can carry out easily.',
];

const AboutPage = () => {
  return (
    <div className="bg-[#e5e5e5]">
      <section className="relative h-[320px] overflow-hidden md:h-[640px]">
        <video autoPlay loop muted playsInline poster={aboutHeroPoster} className="h-full w-full object-cover">
          <source src={aboutHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#061734]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/12" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white md:text-7xl">About Us</h1>
            <div className="mx-auto mt-4 h-1 w-24 bg-leena-yellow md:mt-6" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="overflow-hidden rounded-tl-[42px] rounded-br-[42px] border-[5px] border-[#f7b500]">
            <img src={aboutSide} alt="About Leena Powertech" className="h-full w-full object-cover" />
          </div>
          <article className="border border-[#d4d4d4] bg-[#f2f2f2] p-7 shadow-[0_7px_14px_rgba(0,0,0,0.16)] md:p-10 lg:-ml-24">
            <h2 className="text-4xl font-semibold text-[#162d7a]">About Us</h2>
            <div className="mt-3 h-1 w-24 bg-leena-yellow" />
            <p className="mt-6 text-[18px] leading-9 text-[#343434]">
              LPTE was started in 1995 and has been built on the strong foundations of experience, expertise, and
              technological insight. Our aim is to transform the landscape of Navi Mumbai and operate at a pan-India
              level. We do this by delivering end-to-end solutions in Engineering Procurement & Construction businesses
              related to power infrastructure. Over the years, we have worked in various field like Power Distribution
              & Transmission, MEP projects, Railways & Metro. We mainly work with government departments, state
              electricity departments, public development, and utilities authorities like CIDCO, Kerala State
              Electricity Board, Jharkhand Bijli Vitran Nigam Limited, and Bihar State Electricity Board to name a few.
              Having executed huge turnkey projects and amassing a vast experience of 25 years, we are now moving
              forward and expanding our services in the upcoming fields of Electric Vehicle infrastructure and Solar
              Installations.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#dfdfdf] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1260px] gap-10 px-4 md:px-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <h2 className="text-4xl font-semibold text-[#162d7a]">Our contribution in nation building</h2>
            <div className="mt-3 h-1 w-24 bg-leena-yellow" />
            <p className="mt-6 text-[18px] leading-9 text-[#1f2735]">
              Over the years we have helped bring electricity to all parts of the country. From developing substations
              to electrifying buildings, we have a versatile team with a strong work ethic. We started with Navi
              Mumbai as our target and over the years we have expanded our scope. Now, we are in different parts of
              the country and are working continuously to build world class infrastructure for our nation. Our
              infrastructure has stood the test of time and nature. Even in adverse conditions, we were able to deliver
              satisfactory services. With the focus of the nation moving towards renewable energy, our team is looking
              onto new prospects and adapting to new technology. Our company is aligned with PM&apos;s Gati Shakti Plan,
              a 100lac crore master plan to develop holistic infrastructure in the country. We truly believe in the
              vision and plan to contribute as much as we can in our field.
            </p>
            <a
              href={financeDoc}
              download
              className="mt-8 inline-block rounded bg-[#172977] px-8 py-3 text-lg font-medium text-white transition hover:bg-[#0e1d5e]"
            >
              Download Company financial document
            </a>
          </div>
          <div className="overflow-hidden border-2 border-white shadow-[0_6px_16px_rgba(0,0,0,0.14)]">
            <img src={aboutCollage} alt="Nation building collage" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1260px] gap-12 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="text-center">
            <h2 className="text-5xl font-semibold text-[#162d7a]">Vision & Mission</h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-leena-yellow" />
            <img src={aboutVision} alt="Vision illustration" className="mx-auto mt-14 w-full max-w-[430px]" />
          </div>
          <article className="rounded-[26px] border border-[#d3d3d3] bg-[#f3f3f3] p-8 shadow-[0_3px_12px_rgba(0,0,0,0.14)] md:p-10">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#172977] text-2xl text-white">
                &#9679;
              </span>
              <div>
                <h3 className="text-4xl font-semibold text-[#162d7a]">Vision</h3>
                <p className="mt-3 text-[18px] leading-9 text-[#1f2735]">
                  To become a leading EPC company across PAN-India, (Distribution, Transmission, Railway
                  Electrification, MEP and O&M).
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-start gap-4">
              <span className="mt-1 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#172977] text-2xl text-white">
                &#9878;
              </span>
              <div>
                <h3 className="text-4xl font-semibold text-[#162d7a]">Mission</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-9 text-[#1f2735]">
                  {missionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-[1260px] px-4 md:px-8">
          <h2 className="text-5xl font-semibold text-[#162d7a]">Company Values:</h2>
          <ul className="mt-8 space-y-4 text-[18px] leading-9 text-[#1f2735]">
            {values.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#172977] text-sm text-white">
                  &#10140;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white pt-14">
        <div className="mx-auto max-w-[1260px] px-4 pb-10 text-center md:px-8">
          <h2 className="text-6xl font-semibold text-[#162d7a]">Regional Presence</h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-leena-yellow" />
          <p className="mt-8 text-[22px] text-[#2e2e2e]">Maharashtra, Kerala, Bihar, Jharkhand, Goa, Uttar Pradesh, Assam</p>
        </div>
        <img src={aboutPresence} alt="Regional presence map" className="h-auto w-full object-cover" />
      </section>
    </div>
  );
};

export default AboutPage;
