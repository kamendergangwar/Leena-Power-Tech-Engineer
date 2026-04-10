import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { useData } from '../context/DataContext';
import { withApiBase } from '../utils/api';

const Footer = () => {
  const { data } = useData();
  const { companyInfo, navigation } = data;
  const navItems = Array.isArray(navigation) ? navigation.filter((item) => item && typeof item === 'object') : [];
  const quickLinks = navItems;
  const serviceLinks = navItems.find((item) => item.name === 'Verticals')?.children?.filter((item) => item && typeof item === 'object') ?? [];
  const footerBackground = `${withApiBase('assets/footer/mep-4.png')}?v=20260408`;
  const socialLinks = companyInfo.socialLinks ?? {};
  const logoSrc = companyInfo.logo?.trim() || null;
  const tagline = companyInfo.tagline?.trim() || 'Connecting People and Power';
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

      <div className="relative mx-auto max-w-[1260px] px-4 pb-8 pt-12 sm:px-5 md:px-8 md:pt-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_0.95fr_1.2fr] lg:gap-10">
          <div className="rounded-sm px-5 py-6 sm:px-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            {logoSrc ? (
              <img src={logoSrc} alt="Leena Powertech" className="h-24 w-24 object-cover sm:h-28 sm:w-28 md:h-32 md:w-32" />
            ) : (
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-leena-navy text-xl font-bold text-leena-yellow sm:h-28 sm:w-28 md:h-32 md:w-32">
                LP
              </span>
            )}
            <p className="mt-5 text-sm leading-relaxed text-white/95 sm:text-[16px]">&lsquo;{tagline}&rsquo;</p>
          </div>

          <div className="rounded-sm px-5 py-6 sm:px-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <h4 className="text-xl font-semibold leading-[1.2] text-leena-yellow sm:text-[23px]">Quick Links</h4>
            <ul className="mt-5 space-y-2 text-sm text-white/95 sm:text-[16px]">
              {quickLinks.map((link, index) => (
                <li key={link.name || `quick-link-${index}`}>
                  <Link to={link.href || '/'} className="transition-colors hover:text-leena-yellow">
                    {link.name || 'Menu'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm px-5 py-6 sm:px-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <h4 className="text-xl font-semibold leading-[1.2] text-leena-yellow sm:text-[23px]">Service</h4>
            <ul className="mt-5 space-y-2 text-sm text-white/95 sm:text-[16px]">
              {serviceLinks.map((link, index) => (
                <li key={link.name || `service-link-${index}`}>
                  <Link to={link.href || '/'} className="transition-colors hover:text-leena-yellow">
                    {link.name || 'Service'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm px-5 py-6 sm:px-6" style={{ backgroundColor: 'rgba(10, 23, 96, 0.32)' }}>
            <h4 className="text-xl font-semibold leading-[1.2] text-leena-yellow sm:text-[23px]">Get In Touch!</h4>
            <div className="mt-5 space-y-3 text-sm text-white/95 sm:text-[16px]">
              <a href={companyInfo.phoneHref} className="flex items-center gap-3 transition-colors hover:text-leena-yellow">
                <Phone size={16} className="text-white" />
                <span className="break-words">{companyInfo.phone}</span>
              </a>
              <a href={companyInfo.emailHref} className="flex items-center gap-3 transition-colors hover:text-leena-yellow">
                <Mail size={16} className="text-white" />
                <span className="break-all sm:break-normal">{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-white" />
                <p className="leading-7 text-white/95 sm:leading-8 md:leading-9">{companyInfo.address}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
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

        <div className="mt-10 border-t border-white/35 pt-6 text-center text-sm text-white/90 sm:mt-12 sm:pt-7 sm:text-[15px]">
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
