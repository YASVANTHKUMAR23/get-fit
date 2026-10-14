import React from 'react';
import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';

interface AdCardsProps {
  onMembershipClick?: () => void;
  onBookSessionClick?: () => void;
}

export const AdCards: React.FC<AdCardsProps> = ({
  onMembershipClick,
  onBookSessionClick,
}) => {
  return (
    <section className="relative py-16 md:py-24 bg-[#0b0f15] overflow-hidden">
      <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Transform Your Body */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center p-8 md:p-12 border border-slate-800 hover:border-amber-500/50 shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Background Image with Zoom & Dark Scrim */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/get_fit_mapped_assets/promotions/strength-promotion.png"
                alt="Transform Your Body - Get Fit Gym"
                className="w-full h-full object-cover object-right md:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Left text gradient protection */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#090d13]/80 via-[#090d13]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d13]/60 via-transparent to-transparent opacity-40" />
            </div>

            {/* Left Positioned Content */}
            <div className="relative z-10 max-w-sm md:max-w-md flex flex-col items-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-extrabold uppercase leading-[0.95] text-white tracking-wide mb-3 select-none">
                TRANSFORM <br />
                YOUR BODY <br />
                <span className="text-amber-400">JOIN TODAY</span>
              </h3>
              <p className="font-sub text-slate-300 text-xs sm:text-sm tracking-wider uppercase mb-8">
                REAL PEOPLE. REAL RESULTS. NO EXCUSES.
              </p>
              <AnimatedButton
                variant="primary"
                size="md"
                icon="arrow"
                onClick={onMembershipClick}
              >
                Get Membership
              </AnimatedButton>
            </div>
          </motion.div>

          {/* Card 2: Personal Training Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-3xl overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center p-8 md:p-12 border border-slate-800 hover:border-amber-500/50 shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Background Image with Zoom & Dark Scrim */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/get_fit_mapped_assets/promotions/cardio-training-promotion.png"
                alt="Personal Training Challenge - Get Fit Gym"
                className="w-full h-full object-cover object-right md:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Left text gradient protection */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#090d13]/80 via-[#090d13]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d13]/60 via-transparent to-transparent opacity-40" />
            </div>

            {/* Left Positioned Content */}
            <div className="relative z-10 max-w-sm md:max-w-md flex flex-col items-start">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-extrabold uppercase leading-[0.95] text-white tracking-wide mb-3 select-none">
                PERSONAL <br />
                <span className="text-amber-400">TRAINING</span> <br />
                CHALLENGE
              </h3>
              <p className="font-sub text-slate-300 text-xs sm:text-sm tracking-wider uppercase mb-8">
                TRAIN SMART. STAY CONSISTENT. SEE THE DIFFERENCE.
              </p>
              <AnimatedButton
                variant="primary"
                size="md"
                icon="arrow"
                onClick={onBookSessionClick}
              >
                Book a Free Session
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Team Banner — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="group relative rounded-3xl overflow-hidden min-h-[260px] md:min-h-[320px] flex items-end p-8 md:p-12 border border-slate-800 hover:border-amber-500/50 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 mt-8"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/get_fit_mapped_assets/promotions/get-fit-team-banner.png"
              alt="GET FIT Expert Team Banner"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090d13]/70 via-[#090d13]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d13]/60 via-transparent to-transparent opacity-30" />
          </div>
          <div className="relative z-10 flex flex-col items-start">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-extrabold uppercase leading-[0.95] text-white tracking-wide mb-2 select-none">
              MEET THE <span className="text-amber-400">GET FIT</span> TEAM
            </h3>
            <p className="font-sub text-slate-300 text-xs sm:text-sm tracking-wider uppercase">
              EXPERT COACHES. PROVEN RESULTS. YOUR SUCCESS IS OUR MISSION.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
