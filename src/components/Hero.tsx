import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface HeroProps {
  onJoinClick?: () => void;
  onWatchVideoClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onJoinClick,
  onWatchVideoClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#090d13]"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
      >
        <img
          src="/get_fit_mapped_assets/hero/hero-gym-background.png"
          alt="GET FIT Fitness & Gym Interior"
          className="w-full h-[120%] object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d13]/65 via-[#090d13]/35 to-[#090d13]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d13]/70 via-transparent to-[#090d13]/20" />
        <div className="absolute top-1/4 right-1/6 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[140px] pointer-events-none" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full flex-1 flex flex-col pt-28 md:pt-32"
      >
        {/* Top Section: Headline & CTAs */}
        <div className="flex-1 px-6 sm:px-10 md:px-12 lg:px-14 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-10 h-[2px] bg-amber-400 inline-block" />
              <span className="font-sub text-amber-400 text-sm md:text-base uppercase tracking-wide">
                Build A Stronger You
              </span>
              <span className="w-10 h-[2px] bg-amber-400 inline-block hidden sm:block" />
            </motion.div>

            {/* Hero Headline — Freshman */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-freshman uppercase text-white mb-6 select-none"
              style={{
                fontSize: 'clamp(3.2rem, 7.5vw, 7.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
              }}
            >
              <span className="block">STRONGER</span>
              <span className="block">FITTER</span>
              <span
                className="block italic"
                style={{
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 40%, #d97706 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                HEALTHIER
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-300/90 text-sm md:text-base max-w-md mb-8 font-body leading-relaxed"
              style={{ fontWeight: 400, lineHeight: 1.75 }}
            >
              Modern equipment. Expert trainers. Supportive community.
              Everything you need to become the best version of yourself.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-nowrap items-center gap-2 sm:gap-4"
            >
              <AnimatedButton
                variant="primary"
                size="lg"
                icon="arrow"
                onClick={onJoinClick}
                className="!px-7 !py-3 !gap-1.5 text-xs whitespace-nowrap sm:!px-7 sm:!py-3.5 sm:!gap-2.5 sm:text-base"
              >
                Join Now
              </AnimatedButton>

              <button
                type="button"
                onClick={onWatchVideoClick}
                className="group inline-flex shrink-0 items-center gap-1.5 px-7 py-3 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white text-xs sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-sm md:text-base border border-slate-600/60 hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 font-body whitespace-nowrap"
                style={{ fontWeight: 600 }}
              >
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-400/20 group-hover:bg-amber-400 flex items-center justify-center transition-colors duration-300">
                  <Play className="w-5 h-5 sm:w-4 sm:h-4 text-amber-400 group-hover:text-slate-950 fill-amber-400 group-hover:fill-slate-950 transition-colors duration-300 ml-0.5" />
                </span>
                <span>Watch Video</span>
              </button>
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
