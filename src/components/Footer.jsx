import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './SocialIcons';
import { companyInfo, navigation } from '../data/siteContent';

const Footer = () => {
  const quickLinks = navigation;
  const serviceLinks = navigation.find((item) => item.name === 'Verticals')?.children ?? [];

  return (
    <footer className="bg-leena-footer pt-16 pb-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-12 lg:grid-cols-4">
        <div>
          <img src={companyInfo.logo} alt="Leena Powertech" className="h-24 w-24 rounded-full object-cover" />
          <p className="mt-6 text-gray-400 leading-relaxed italic">
            ‘{companyInfo.tagline}’
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-leena-yellow hover:text-leena-navy">
              <FacebookIcon size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-leena-yellow hover:text-leena-navy">
              <LinkedInIcon size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-leena-yellow hover:text-leena-navy">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="inline-block border-b-2 border-leena-yellow pb-1 text-lg font-bold uppercase mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="flex items-center text-gray-400 transition-colors hover:text-leena-yellow">
                  <ChevronRight size={14} className="mr-2 text-leena-yellow" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="inline-block border-b-2 border-leena-yellow pb-1 text-lg font-bold uppercase mb-6">Service</h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="flex items-center text-gray-400 transition-colors hover:text-leena-yellow">
                  <ChevronRight size={14} className="mr-2 text-leena-yellow" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="inline-block border-b-2 border-leena-yellow pb-1 text-lg font-bold uppercase mb-6">Get In Touch!</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-leena-yellow flex-shrink-0 mt-1" />
              <p className="text-gray-400 text-sm">
                {companyInfo.address}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-leena-yellow flex-shrink-0" />
              <a href={companyInfo.phoneHref} className="text-gray-400 text-sm hover:text-leena-yellow">{companyInfo.phone}</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-leena-yellow flex-shrink-0" />
              <a href={companyInfo.emailHref} className="text-gray-400 text-sm hover:text-leena-yellow">{companyInfo.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        <p>©2026 All Rights Reserved. | Powred by <a href="https://webperfecto.com/" className="hover:text-leena-yellow">webperfecto</a></p>
      </div>
    </footer>
  );
};

export default Footer;
