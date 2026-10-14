import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, CheckCircle2, ShieldCheck, Dumbbell } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wide">
                  Inside GET FIT FITNESS &amp; GYM
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video / Visual Simulation */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/src/assets/images/gym_hero_interior_1791909690048.jpg"
                alt="Gym Interior Video Preview"
                className="w-full h-full object-cover filter brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="absolute text-center p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center text-amber-300 mb-4 animate-pulse">
                  <Play className="w-8 h-8 fill-amber-400 ml-1" />
                </div>
                <h4 className="font-bebas text-3xl md:text-4xl text-white tracking-wide uppercase">
                  EXPERIENCE THE ENERGY
                </h4>
                <p className="text-slate-300 text-xs md:text-sm max-w-md mt-1">
                  Step inside Tiruchirappalli's finest training facility. Premium
                  bio-mechanic machines, Olympic lifting turf, and high-energy vibes.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-900/60 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                3rd Floor, Gem Plaza · Open Mon-Sun 5:00 AM – 9:00 PM
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300"
              >
                Book Walkthrough
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: { id: string; name: string; price: string };
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = { id: 'premium', name: 'PREMIUM', price: '₹2,499' },
}) => {
  const [activePlan, setActivePlan] = useState(selectedPlan.name);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="relative w-full max-w-md bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bebas font-bold text-white uppercase tracking-wide">
                  WELCOME TO GET FIT!
                </h3>
                <p className="text-slate-300 text-sm mt-2">
                  We've reserved your <span className="text-amber-400 font-bold">{activePlan}</span> membership pass. Our team will contact you at <span className="font-mono text-white">{phone}</span> to finalize your access badge.
                </p>
                <div className="mt-6">
                  <AnimatedButton
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={resetAndClose}
                  >
                    Done
                  </AnimatedButton>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Dumbbell className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-sub uppercase tracking-wider text-amber-400 font-bold">
                    START YOUR JOURNEY
                  </span>
                </div>
                <h3 className="text-3xl font-bebas font-extrabold text-white uppercase tracking-wide mb-2">
                  JOIN GET FIT TODAY
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Select your tier and enter your contact details. Free induction included.
                </p>

                {/* Plan Selector */}
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900 rounded-2xl mb-5 border border-slate-800">
                  {['BASIC', 'PREMIUM', 'VIP'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setActivePlan(p)}
                      className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        activePlan === p
                          ? 'bg-[#e5a855] text-slate-950 shadow-md font-extrabold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-400 font-medium block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yashwanth Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-medium block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <AnimatedButton
                      type="submit"
                      variant="primary"
                      size="md"
                      fullWidth
                      icon="arrow"
                    >
                      Confirm Membership
                    </AnimatedButton>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>No hidden charges · Free trial session included</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
