import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { GymLogo } from './GymLogo';
import { AnimatedButton } from './AnimatedButton';

interface NavbarProps {
  onJoinClick?: () => void;
  isDarkTheme?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onJoinClick,
  isDarkTheme = true,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Trainers', href: '#trainers', id: 'trainers' },
    { name: 'Membership', href: '#membership', id: 'membership' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll threshold detection: > 40px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-1500 ease-[cubic-bezier(0.4,0,0.2,1)] flex justify-center px-4 md:px-6 pointer-events-none ${isScrolled ? 'top-3 md:top-4' : 'top-0'
        }`}
    >
      <div
        className={`pointer-events-auto transition-all duration-1500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between w-full ${isScrolled
          ? isDarkTheme
            ? 'h-[84px] max-w-7xl rounded-full px-5 md:px-7 bg-slate-950/75 backdrop-blur-xl shadow-2xl shadow-black/40 text-slate-100'
            : 'h-[84px] max-w-7xl rounded-full px-5 md:px-7 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-900/10 text-slate-800'
          : 'h-[88px] w-full px-8 sm:px-10 md:px-12 lg:px-16 bg-transparent border border-transparent shadow-none'
          }`}
      >
        {/* Brand Logo Zone */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="-ml-4 sm:ml-0 flex items-center gap-2 group transition-transform duration-300 hover:scale-102 outline-none"
        >
          <GymLogo size={isScrolled ? 'md' : 'lg'} showText={false} />
        </a>

        {/* Desktop Nav Links */}
        <nav className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'gap-1 xl:gap-2' : 'gap-2 xl:gap-3'}`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'px-3.5 py-1.5 text-[15px]' : 'px-4 py-2 text-base'} ${isActive
                  ? isDarkTheme
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'bg-slate-900/10 text-slate-950 font-bold shadow-sm'
                  : isDarkTheme
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-900/5'
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border border-amber-400/30 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls Zone */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-full transition-colors duration-200 border ${isDarkTheme
                ? 'border-slate-700/60 text-amber-400 hover:bg-white/10 hover:border-amber-400/50'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-amber-600'
                }`}
              title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkTheme ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* Desktop Join Now Button */}
          <div className="hidden sm:block">
            <AnimatedButton
              variant="primary"
              size="sm"
              icon="arrow"
              onClick={onJoinClick}
              className="text-xs md:text-sm font-bold uppercase tracking-wider !px-4.5 !py-2 font-body"
            >
              Join Now
            </AnimatedButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border transition-colors ${isDarkTheme
              ? 'border-slate-700 text-slate-200 hover:bg-white/10'
              : 'border-slate-300 text-slate-800 hover:bg-slate-100'
              }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl border ${isDarkTheme
              ? 'bg-slate-950/95 border-slate-800 text-slate-100'
              : 'bg-white/95 border-slate-200 text-slate-800'
              }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold flex items-center justify-between transition-colors ${isActive
                      ? isDarkTheme
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-amber-500/15 text-amber-700 border border-amber-500/30'
                      : isDarkTheme
                        ? 'text-slate-300 hover:bg-white/5'
                        : 'text-slate-700 hover:bg-slate-100'
                      }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
                <AnimatedButton
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onJoinClick?.();
                  }}
                >
                  Join Now
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
