import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { companyInfo } from '../data/siteContent';

const TopBar = () => {
  return (
    <div className="bg-leena-yellow text-leena-navy">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 text-sm font-medium md:px-12">
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedInIcon size={16} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><TwitterIcon size={16} /></a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon size={16} /></a>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={companyInfo.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} />
            <span>Call Us : {companyInfo.phone}</span>
          </a>
          <a href={companyInfo.emailHref} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} />
            <span>Email : {companyInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
