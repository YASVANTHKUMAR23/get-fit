import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  annualOriginal?: string;
  annualBilled: string;
  monthlyBilled: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  features: Feature[];
  buttonText: string;
  isCenter?: boolean;
}

interface PricingProps {
  onSelectPlan?: (planId: string, planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'BASIC',
      monthlyPrice: '₹1,799',
      annualPrice: '₹1,499',
      annualOriginal: '₹1,799',
      annualBilled: '₹17,988 billed yearly',
      monthlyBilled: '₹1,799 billed monthly',
      badge: 'Starter',
      badgeColor: 'bg-slate-700 text-slate-200',
      description: 'Get started with essential gym access. Ideal for individuals with basic fitness needs.',
      features: [
        { text: 'Full gym floor access', included: true },
        { text: 'Basic equipment usage', included: true },
        { text: 'Locker facility', included: true },
        { text: 'Fitness assessment', included: true },
        { text: 'All training programs', included: false },
        { text: 'Personalized workout plan', included: false },
        { text: 'Nutrition guidance', included: false },
        { text: 'Personal trainer sessions', included: false },
        { text: 'Guest passes', included: false },
      ],
      buttonText: 'Get Started',
      isCenter: false,
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      monthlyPrice: '₹2,999',
      annualPrice: '₹2,499',
      annualOriginal: '₹2,999',
      annualBilled: '₹29,988 billed yearly',
      monthlyBilled: '₹2,999 billed monthly',
      badge: 'Save 17%',
      badgeColor: 'bg-amber-500 text-slate-950',
      description: 'A comprehensive plan for serious fitness enthusiasts with expert guidance and full access.',
      features: [
        { text: 'Full gym floor access', included: true },
        { text: 'Basic equipment usage', included: true },
        { text: 'Locker & shower facility', included: true },
        { text: 'Fitness assessment', included: true },
        { text: 'All training programs', included: true },
        { text: 'Personalized workout plan', included: true },
        { text: 'Nutrition guidance', included: true },
        { text: 'Personal trainer sessions', included: false },
        { text: 'Guest passes', included: false },
      ],
      buttonText: 'Start Free Trial',
      isCenter: true,
    },
    {
      id: 'vip',
      name: 'VIP ELITE',
      monthlyPrice: '₹4,499',
      annualPrice: '₹3,999',
      annualBilled: '₹47,988 billed yearly',
      monthlyBilled: '₹4,499 billed monthly',
      badge: 'Popular',
      badgeColor: 'bg-amber-400/20 text-amber-400 border border-amber-400/40',
      description: 'Maximize results with premium tools, personal trainer, and full VIP perks.',
      features: [
        { text: 'Full gym floor access', included: true },
        { text: 'Basic equipment usage', included: true },
        { text: 'Locker & shower facility', included: true },
        { text: 'Fitness assessment', included: true },
        { text: 'All training programs', included: true },
        { text: 'Personalized workout plan', included: true },
        { text: 'Nutrition guidance', included: true },
        { text: 'Personal trainer sessions', included: true },
        { text: 'Guest passes (2/month)', included: true },
      ],
      buttonText: 'Start Free Trial',
      isCenter: false,
    },
  ];

  return (
    <section id="membership" className="relative py-20 md:py-28 bg-[#090d13] overflow-hidden">
      <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-4 h-0.5 bg-amber-400" />
            <span className="text-amber-400 text-xs md:text-sm font-sub tracking-[0.25em] font-semibold uppercase">
              MEMBERSHIP PLANS
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
            CHOOSE YOUR <span className="text-amber-400">PLAN</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Flexible plans for every fitness goal. No hidden charges.
          </motion.p>
        </div>

        {/* Annual / Monthly Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center bg-slate-900/90 border border-slate-700/80 rounded-full p-1 shadow-lg">
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${isAnnual
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'bg-transparent text-slate-400 hover:text-white'
                }`}
            >
              Annual
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${!isAnnual
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'bg-transparent text-slate-400 hover:text-white'
                }`}
            >
              Monthly
            </button>
          </div>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const billed = isAnnual ? plan.annualBilled : plan.monthlyBilled;
            const showOriginal = isAnnual && plan.annualOriginal;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative flex flex-col justify-between transition-all duration-300 ${plan.isCenter
                    ? 'bg-slate-950 border-2 border-amber-500/60 rounded-3xl md:-my-4 z-10 shadow-[0_20px_60px_rgba(245,158,11,0.2)] px-8 pt-10 pb-8'
                    : index === 0
                      ? 'bg-slate-900/50 border border-slate-800 rounded-3xl md:rounded-r-none px-8 pt-10 pb-8'
                      : 'bg-slate-900/50 border border-slate-800 rounded-3xl md:rounded-l-none px-8 pt-10 pb-8'
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md select-none ${plan.badgeColor}`}>
                    {plan.badge} ●
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="mb-6">
                    <h3 className={`font-bebas text-2xl font-extrabold tracking-wide uppercase ${plan.isCenter ? 'text-white' : 'text-slate-200'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 mb-1">
                    {showOriginal && (
                      <span className="text-2xl font-bebas font-bold text-slate-500 line-through decoration-2">
                        {plan.annualOriginal}
                      </span>
                    )}
                    <span className={`text-5xl sm:text-6xl font-bebas font-extrabold tracking-tight ${plan.isCenter ? 'text-amber-400' : 'text-white'}`}>
                      {price}
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-medium text-slate-400">/ month (INR)</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-5">{billed}</p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-8 ${plan.isCenter ? 'text-slate-300' : 'text-slate-400'}`}>
                    {plan.description}
                  </p>

                  {/* Dotted Divider */}
                  <div className={`border-t border-dashed mb-6 ${plan.isCenter ? 'border-amber-500/30' : 'border-slate-700/60'}`} />

                  {/* Feature List with Check/X */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-center gap-3 text-sm ${feature.included
                            ? plan.isCenter ? 'text-slate-200' : 'text-slate-300'
                            : 'text-slate-600'
                          }`}
                      >
                        {feature.included ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isCenter
                              ? 'bg-amber-500 text-slate-950'
                              : 'bg-amber-400/15 border border-amber-400/30 text-amber-400'
                            }`}>
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-800/60 border border-slate-700/40 flex items-center justify-center shrink-0">
                            <X className="w-3 h-3 text-slate-600" strokeWidth={2.5} />
                          </div>
                        )}
                        <span className={feature.included ? 'font-normal' : 'font-normal'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-8">
                  <AnimatedButton
                    variant={plan.isCenter ? 'primary' : 'secondary'}
                    size="md"
                    fullWidth
                    icon={plan.isCenter ? 'arrow' : 'none'}
                    onClick={() => onSelectPlan?.(plan.id, plan.name)}
                  >
                    {plan.buttonText}
                  </AnimatedButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
