import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Navbar = () => {
  const { data } = useData();
  const { companyInfo, navigation } = data;
  const location = useLocation();
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`z-50 w-full bg-white text-leena-navy transition-all duration-300 ${isSticky ? 'fixed left-0 right-0 top-0 shadow-lg' : 'relative'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:py-4 md:px-12">
        <div className="flex items-center">
          <Link to={navigation[0].href} className="flex items-center">
            <img src={companyInfo.logo} alt="Leena Powertech" className="h-14 w-14 object-cover sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]" />
          </Link>
        </div>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((link) => (
            <div key={link.name} className="group relative">
              <Link
                to={link.href}
                className="flex items-center text-sm font-semibold transition-colors hover:text-leena-yellow"
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
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-full p-2 transition-colors hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-4.75rem)] overflow-y-auto border-t border-slate-100 bg-white py-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2 px-4 text-sm font-semibold uppercase sm:px-6">
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
