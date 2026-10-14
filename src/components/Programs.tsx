import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';

interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ProgramsProps {
  onSelectProgram?: (program: ProgramItem) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = [
    'All',
    'Strength',
    'Cardio',
    'Flexibility',
    'Weight Loss',
    'Muscle Gain',
  ];

  const allPrograms: ProgramItem[] = [
    {
      id: 'strength',
      title: 'STRENGTH TRAINING',
      category: 'Strength',
      description: 'Build muscle and increase your strength.',
      image: '/get_fit_mapped_assets/programs/program-strength-training.jpg',
    },
    {
      id: 'cardio',
      title: 'CARDIO & HIIT',
      category: 'Cardio',
      description: 'Burn calories and improve endurance.',
      image: '/get_fit_mapped_assets/programs/program-cardio-hiit.jpg',
    },
    {
      id: 'yoga',
      title: 'YOGA & FLEXIBILITY',
      category: 'Flexibility',
      description: 'Improve mobility and reduce stress.',
      image: '/get_fit_mapped_assets/programs/program-yoga-flexibility.jpg',
    },
    {
      id: 'functional',
      title: 'FUNCTIONAL TRAINING',
      category: 'Muscle Gain',
      description: 'Real-world strength for everyday life.',
      image: '/get_fit_mapped_assets/programs/program-functional-training.jpg',
    },
    {
      id: 'weight-loss',
      title: 'METABOLIC CONDITIONING',
      category: 'Weight Loss',
      description: 'Accelerate fat loss and boost metabolism with intense circuits.',
      image: '/get_fit_mapped_assets/programs/program-cardio-hiit.jpg',
    },
    {
      id: 'hypertrophy',
      title: 'HYPERTROPHY & SCULPT',
      category: 'Muscle Gain',
      description: 'Targeted resistance protocols for peak muscle definition.',
      image: '/get_fit_mapped_assets/promotions/strength-promotion.png',
    },
  ];

  const filteredPrograms =
    activeFilter === 'All'
      ? allPrograms.slice(0, 4) // Show 4 core matching the 4 cards in design
      : allPrograms.filter(
        (p) =>
          p.category.toLowerCase() === activeFilter.toLowerCase() ||
          p.title.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section id="programs" className="relative py-20 md:py-28 bg-[#090d13] overflow-hidden">
      <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-4 h-0.5 bg-amber-400" />
            <span className="text-amber-400 text-xs md:text-sm font-sub tracking-[0.25em] font-semibold uppercase">
              OUR PROGRAMS
            </span>
            <span className="w-4 h-0.5 bg-amber-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bebas font-extrabold uppercase tracking-wide text-white mb-4"
          >
            EXERCISES FOR <span className="text-amber-400">EVERY GOAL</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            From strength training to flexibility, we offer a wide range of programs
            designed by expert trainers.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-[#e5a855] text-slate-950 shadow-[0_2px_15px_rgba(229,168,85,0.4)] font-bold scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </motion.div>

        {/* Programs Grid: 4 Cards with Down Positioned Text */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog, index) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative rounded-3xl overflow-hidden h-[420px] flex flex-col justify-end p-6 border border-slate-800/90 hover:border-amber-500/60 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer"
                onClick={() => onSelectProgram?.(prog)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark bottom gradient scrim for legible text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d13] via-[#090d13]/70 to-transparent" />
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500" />
                </div>

                {/* Down / Below Positioned Content */}
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bebas font-extrabold uppercase tracking-wide text-white group-hover:text-amber-300 transition-colors duration-300 select-none">
                      {prog.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300/90 font-normal leading-snug mt-1">
                      {prog.description}
                    </p>
                  </div>

                  {/* Circular Action Arrow with Framer Motion hover SVG */}
                  <div className="shrink-0">
                    <AnimatedButton
                      variant="circle"
                      icon="arrow"
                      onClick={() => onSelectProgram?.(prog)}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
