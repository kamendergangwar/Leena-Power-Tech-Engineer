import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { useData } from '../context/DataContext';

const TopBar = () => {
  const { data } = useData();
  const { companyInfo } = data;
  const socialLinks = companyInfo.socialLinks ?? {};
  const socialItems = [
    { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon },
    { key: 'twitter', label: 'Twitter', Icon: TwitterIcon },
    { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
  ];

  return (
    <div className="bg-leena-yellow text-leena-navy">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 text-sm font-medium md:px-12">
        <div className="flex items-center gap-4">
          {socialItems.map(({ key, label, Icon }) => {
            const href = socialLinks[key]?.trim();

            return href ? (
              <a
                key={key}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ) : (
              <span
                key={key}
                aria-label={label}
                className="cursor-default opacity-90"
              >
                <Icon size={16} />
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={companyInfo.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone size={14} />
            <span>Call Us : {companyInfo.phone}</span>
          </a>
          <a href={companyInfo.emailHref} className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail size={14} />
            <span>Email : {companyInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
