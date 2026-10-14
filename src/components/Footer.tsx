import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  Check,
} from 'lucide-react';
import { GymLogo } from './GymLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#070a0e] text-slate-300 pt-16 pb-8 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Social Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="mb-4">
              <GymLogo size="lg" showText={false} />
            </a>

            <p className="text-slate-400 text-sm font-medium mb-6">
              Stronger People. Healthier Communities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              >
                {/* Custom WhatsApp SVG icon */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.3-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.785-1.674-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.35.452-.526.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.234-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.513 1.079 2.915 1.23 3.116c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2 22l4.982-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.64 0-3.17-.49-4.46-1.33l-.32-.21-2.96.84.85-2.88-.23-.34A8.17 8.17 0 013.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-sub font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-sub font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  3rd Floor, Gem Plaza, Sankaran Pillai Road, Tiruchirappalli, TN
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">getfitgym@example.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Mon - Sun : 5:00 AM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-sm font-sub font-bold uppercase tracking-wider text-white mb-2">
              Subscribe
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Get fitness tips, member transformation stories, and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="w-full">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 p-3 rounded-xl border border-amber-500/30">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <div className="relative flex items-center w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-2.5 rounded-full bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 w-8 h-8 rounded-full bg-[#e5a855] hover:bg-[#f3b562] text-slate-950 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GET FIT FITNESS &amp; GYM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
