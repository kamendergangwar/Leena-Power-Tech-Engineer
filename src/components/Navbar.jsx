import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Navbar = () => {
  const { data } = useData();
  const { companyInfo, navigation } = data;
  const navItems = Array.isArray(navigation) ? navigation.filter((item) => item && typeof item === 'object') : [];
  const homeHref = navItems[0]?.href || '/';
  const logoSrc = companyInfo.logo?.trim() || null;
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
          <Link to={homeHref} className="flex items-center">
            {logoSrc ? (
              <img src={logoSrc} alt="Leena Powertech" className="h-14 w-14 object-cover sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]" />
            ) : (
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leena-navy text-sm font-bold text-leena-yellow sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]">
                LP
              </span>
            )}
          </Link>
        </div>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((link, index) => (
            <div key={link.name || `nav-item-${index}`} className="group relative">
              <Link
                to={link.href || '/'}
                className="flex items-center text-sm font-semibold transition-colors hover:text-leena-yellow"
              >
                {link.name || 'Menu'}
                {Array.isArray(link.children) && link.children.length ? <ChevronDown size={14} className="ml-1" /> : null}
              </Link>
              {Array.isArray(link.children) && link.children.length ? (
                <div className="invisible absolute left-0 top-full mt-4 w-72 rounded-2xl border border-slate-100 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="space-y-1">
                    {link.children.filter((child) => child && typeof child === 'object').map((child, childIndex) => (
                      <Link
                        key={child.name || `child-item-${childIndex}`}
                        to={child.href || '/'}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-leena-navy"
                      >
                        {child.name || 'Details'}
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
            {navItems.map((link, index) => (
              <div key={link.name || `mobile-nav-item-${index}`} className="rounded-2xl border border-slate-100 px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <Link to={link.href || '/'} className="hover:text-leena-yellow" onClick={() => setMobileMenuOpen(false)}>
                    {link.name || 'Menu'}
                  </Link>
                  {Array.isArray(link.children) && link.children.length ? (
                    <button
                      type="button"
                      onClick={() => setOpenGroup(openGroup === link.name ? null : link.name)}
                      aria-label={`Toggle ${link.name || 'menu'}`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openGroup === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : null}
                </div>
                {Array.isArray(link.children) && link.children.length && openGroup === link.name ? (
                  <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-xs normal-case tracking-normal text-slate-600">
                    {link.children.filter((child) => child && typeof child === 'object').map((child, childIndex) => (
                      <Link
                        key={child.name || `mobile-child-item-${childIndex}`}
                        to={child.href || '/'}
                        className="block hover:text-leena-navy"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name || 'Details'}
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
