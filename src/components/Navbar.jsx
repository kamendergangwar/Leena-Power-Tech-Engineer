import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, navigation } from '../data/siteContent';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-white text-leena-navy transition-all duration-300 z-50 ${isSticky ? 'fixed top-0 shadow-lg' : 'relative'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-12">
        <div className="flex items-center">
          <Link to={navigation[0].href} className="flex items-center">
            <img src={companyInfo.logo} alt="Leena Powertech" className="h-16 w-16 rounded-full object-cover" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((link) => (
            <div key={link.name} className="group relative">
              <Link
                to={link.href}
                className="flex items-center text-sm font-semibold uppercase tracking-[0.14em] hover:text-leena-yellow transition-colors"
              >
                {link.name}
                {link.children ? <ChevronDown size={14} className="ml-1" /> : null}
              </Link>
              {link.children ? (
                <div className="invisible absolute left-0 top-full mt-4 w-72 rounded-2xl border border-slate-100 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-leena-navy"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute w-full border-t border-slate-100 bg-white py-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2 px-6 text-sm font-semibold uppercase">
            {navigation.map((link) => (
              <div key={link.name} className="rounded-2xl border border-slate-100 px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <Link to={link.href} className="hover:text-leena-yellow" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                  {link.children ? (
                    <button
                      type="button"
                      onClick={() => setOpenGroup(openGroup === link.name ? null : link.name)}
                      aria-label={`Toggle ${link.name}`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openGroup === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : null}
                </div>
                {link.children && openGroup === link.name ? (
                  <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-xs normal-case tracking-normal text-slate-600">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block hover:text-leena-navy"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
