import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const Footer = () => {
  const { data } = useData();
  const { companyInfo, navigation } = data;
  const quickLinks = navigation;
  const serviceLinks = navigation.find((item) => item.name === 'Verticals')?.children ?? [];
  const footerBackground = `${withApiBase('assets/footer/mep-4.png')}?v=20260408`;
  const socialLinks = companyInfo.socialLinks ?? {};
  const socialItems = [
    { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
    { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon },
    { key: 'twitter', label: 'Twitter', Icon: TwitterIcon },
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBackground})`, backgroundPosition: 'center center' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(4, 9, 76, 0.88)' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1260px] px-4 pb-10 pt-14 md:px-8 md:pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_0.95fr_1.2fr]">
          <div className="rounded-sm px-8 py-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <img src={companyInfo.logo} alt="Leena Powertech" className="h-28 w-28 object-cover md:h-32 md:w-32" />
            <p className="mt-6 text-[16px] leading-relaxed text-white/95">&lsquo;{companyInfo.tagline}&rsquo;</p>
          </div>

          <div className="rounded-sm px-8 py-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <h4 className="text-[23px] font-semibold leading-[1.2] text-leena-yellow">Quick Links</h4>
            <ul className="mt-5 space-y-2 text-[16px] text-white/95">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="transition-colors hover:text-leena-yellow">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm px-8 py-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <h4 className="text-[23px] font-semibold leading-[1.2] text-leena-yellow">Service</h4>
            <ul className="mt-5 space-y-2 text-[16px] text-white/95">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="transition-colors hover:text-leena-yellow">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm px-8 py-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <h4 className="text-[23px] font-semibold leading-[1.2] text-leena-yellow">Get In Touch!</h4>
            <div className="mt-5 space-y-3 text-[16px] text-white/95">
              <a href={companyInfo.phoneHref} className="flex items-center gap-3 transition-colors hover:text-leena-yellow">
                <Phone size={16} className="text-white" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={companyInfo.emailHref} className="flex items-center gap-3 transition-colors hover:text-leena-yellow">
                <Mail size={16} className="text-white" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-white" />
                <p className="max-w-[28ch] leading-8 text-white/95 md:leading-9">{companyInfo.address}</p>
              </div>
            </div>
            <div className="mt-7 flex items-center gap-3">
              {socialItems.map(({ key, label, Icon }) => {
                const href = socialLinks[key]?.trim();

                const commonClassName =
                  'flex h-10 w-10 items-center justify-center rounded-full bg-leena-yellow text-[#111c62] transition-transform hover:scale-105';

                return href ? (
                  <a
                    key={key}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClassName}
                  >
                    <Icon size={18} />
                  </a>
                ) : (
                  <span
                    key={key}
                    aria-label={label}
                    className={`${commonClassName} cursor-default`}
                  >
                    <Icon size={18} />
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/35 pt-7 text-center text-[15px] text-white/90">
          <p>
            ©2026 All Rights Reserved. | Powred by{' '}
            <a href="https://heliosadvisory.com/" className="transition-colors hover:text-leena-yellow" target="_blank" rel="noopener noreferrer">
              Helios Advisory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
