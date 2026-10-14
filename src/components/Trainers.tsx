import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface Trainer {
  name: string;
  role: string;
  image: string;
  bullets: string[];
}

interface TrainersProps {
  onViewAllClick?: () => void;
  onBookTrainerClick?: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({
  onViewAllClick,
  onBookTrainerClick,
}) => {
  const trainers: Trainer[] = [
    {
      name: 'ARJUN',
      role: 'STRENGTH & MUSCLE',
      image: '/get_fit_mapped_assets/trainers/trainer-arjun.png',
      bullets: [
        'Certified Personal Trainer',
        'Strength Training Specialist',
        '5+ Years Experience',
      ],
    },
    {
      name: 'DIVYA',
      role: 'WEIGHT LOSS & HIIT',
      image: '/get_fit_mapped_assets/trainers/trainer-divya.png',
      bullets: [
        'Certified Fitness Coach',
        'HIIT & Cardio Specialist',
        'Nutrition Guidance',
      ],
    },
    {
      name: 'KARTHIK',
      role: 'FUNCTIONAL TRAINING',
      image: '/get_fit_mapped_assets/trainers/trainer-karthik.png',
      bullets: [
        'Certified Strength Coach',
        'Functional Training Expert',
        '4+ Years Experience',
      ],
    },
  ];

  return (
    <section id="trainers" className="relative py-20 md:py-28 bg-[#0b0f15] overflow-hidden">
      <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
          {/* Left Intro Column */}
          <div className="xl:col-span-4 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-4 h-0.5 bg-amber-400" />
              <span className="text-amber-400 text-xs md:text-sm font-sub tracking-[0.25em] font-semibold uppercase">
                MEET OUR
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bebas font-extrabold uppercase tracking-wide text-white mb-4 leading-[0.95]"
            >
              EXPERT TRAINERS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm"
            >
              Certified professionals dedicated to help you achieve your fitness
              goals with customized guidance and proven techniques.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedButton
                variant="primary"
                size="md"
                icon="arrow"
                onClick={onViewAllClick}
              >
                View All Trainers
              </AnimatedButton>
            </motion.div>
          </div>

          {/* Right 3 Trainer Cards (Half image, half text, hover lift) */}
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onClick={() => onBookTrainerClick?.(trainer.name)}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col"
              >
                {/* Top Half: Trainer Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                </div>

                {/* Bottom Half: Trainer Info & Bullets */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bebas font-extrabold uppercase tracking-wide text-white group-hover:text-amber-300 transition-colors select-none">
                      {trainer.name}
                    </h3>
                    <p className="text-[11px] font-sub font-semibold tracking-wider text-amber-400 uppercase mb-4">
                      {trainer.role}
                    </p>

                    {/* Bullet Points with Checkmarks */}
                    <div className="space-y-2 mb-2">
                      {trainer.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                    <span>Book Consultation</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
