/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdCards } from './components/AdCards';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { SessionBooking } from './components/SessionBooking';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoTourModal, MembershipModal } from './components/Modals';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    id: string;
    name: string;
    price: string;
  }>({
    id: 'premium',
    name: 'PREMIUM',
    price: '₹2,499',
  });

  // Toggle dark/light mode for glassmorphism shaders preview
  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
      return next;
    });
  };

  useEffect(() => {
    // Default to dark mode matching the gym brand aesthetic
    document.documentElement.classList.add('dark');
  }, []);

  const handleOpenMembership = (
    planId: string = 'premium',
    planName: string = 'PREMIUM'
  ) => {
    const prices: Record<string, string> = {
      basic: '₹1,499',
      premium: '₹2,499',
      vip: '₹3,999',
    };
    setSelectedPlan({
      id: planId,
      name: planName,
      price: prices[planId] || '₹2,499',
    });
    setIsMembershipModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkTheme ? 'bg-[#090d13] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Dynamic Shrinking Glassmorphism Pill Navbar */}
      <Navbar
        onJoinClick={() => handleOpenMembership('premium', 'PREMIUM')}
        isDarkTheme={isDarkTheme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Website Sections */}
      <main>
        {/* 1. Full Screen Hero (with Parallax and Stats Strip) */}
        <Hero
          onJoinClick={() => handleOpenMembership('premium', 'PREMIUM')}
          onWatchVideoClick={() => setIsVideoModalOpen(true)}
        />

        {/* 2. Programs Section (BG image cards with bottom text & animated circle SVG button) */}
        <Programs
          onSelectProgram={(prog) => {
            scrollToSection('session');
          }}
        />

        {/* 3. Gallery Section (Mixed sized card grid with top centered text & lightbox) */}
        <Gallery />

        {/* 4. Pricing Cards (Border hover effect, fixed Most Popular badge) */}
        <Pricing
          onSelectPlan={(planId, planName) =>
            handleOpenMembership(planId, planName)
          }
        />

        {/* 5. Advertisement Cards (2 BG image cards with left positioned text) */}
        <AdCards
          onMembershipClick={() => handleOpenMembership('premium', 'PREMIUM')}
          onBookSessionClick={() => scrollToSection('session')}
        />

        {/* 6. Trainers Section (Hover lift cards with half image half text) */}
        <Trainers
          onViewAllClick={() => scrollToSection('programs')}
          onBookTrainerClick={(trainerName) => {
            scrollToSection('session');
          }}
        />

        {/* 7. Session Section (Background image card along with the working form) */}
        <SessionBooking />

        {/* Testimonials Section (kept in the page after the requested sections) */}
        <Testimonials />

        {/* 8. Contact Us Section (Tiruchirappalli gym location, hours, facilities, map) */}
        <ContactSection />
      </main>

      {/* 9. Footer Section (Brand, links, newsletter form, copyright) */}
      <Footer />

      {/* Interactive Modals */}
      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <MembershipModal
        isOpen={isMembershipModalOpen}
        onClose={() => setIsMembershipModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
