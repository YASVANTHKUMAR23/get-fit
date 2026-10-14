import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export const SessionBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '06:00 AM - 07:00 AM',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant seamless API booking
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section id="session" className="relative py-20 md:py-28 bg-[#090d13] overflow-hidden">
      <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14">
        {/* Full Card with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-16"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/get_fit_mapped_assets/promotions/personal-training-banner.png"
              alt="Gym Session Workout"
              className="w-full h-full object-cover object-left md:object-center"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090d13]/80 via-[#090d13]/50 to-[#090d13]/30" />
            <div className="absolute inset-0 bg-radial from-transparent to-[#090d13]/40" />
          </div>

          {/* Foreground Grid: Left Text, Right Form */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-amber-400" />
                <span className="text-amber-400 text-xs md:text-sm font-sub tracking-[0.25em] font-semibold uppercase">
                  BOOK YOUR
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-extrabold uppercase tracking-wide text-white mb-4 leading-[0.92] select-none">
                SESSION NOW
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md mb-6">
                Experience a free workout session with our expert trainers. Get a
                complete fitness assessment and customized roadmap tailored to
                your body goals.
              </p>

              <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-amber-300/90 uppercase tracking-wider bg-black/40 px-4 py-2.5 rounded-full border border-amber-500/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Limited Free Intro Slots Available This Week</span>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-4">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bebas font-bold text-white tracking-wide uppercase mb-2">
                      Session Confirmed!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-sm mb-6">
                      Thank you, <span className="text-amber-300 font-semibold">{formData.fullName || 'Athlete'}</span>.
                      Our head coach will call you on <span className="text-white font-mono">{formData.phone}</span> to confirm your slot on {formData.preferredDate || 'your selected date'}.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          preferredDate: '',
                          preferredTime: '06:00 AM - 07:00 AM',
                        });
                      }}
                      className="text-xs uppercase tracking-wider text-amber-400 hover:text-amber-300 font-bold underline"
                    >
                      Book Another Session
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Date and Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredDate: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      </div>

                      <div className="relative">
                        <select
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredTime: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="05:30 AM - 06:30 AM" className="bg-slate-900 text-white">05:30 AM - 06:30 AM</option>
                          <option value="06:30 AM - 07:30 AM" className="bg-slate-900 text-white">06:30 AM - 07:30 AM</option>
                          <option value="08:00 AM - 09:00 AM" className="bg-slate-900 text-white">08:00 AM - 09:00 AM</option>
                          <option value="05:00 PM - 06:00 PM" className="bg-slate-900 text-white">05:00 PM - 06:00 PM</option>
                          <option value="06:30 PM - 07:30 PM" className="bg-slate-900 text-white">06:30 PM - 07:30 PM</option>
                          <option value="07:30 PM - 08:30 PM" className="bg-slate-900 text-white">07:30 PM - 08:30 PM</option>
                        </select>
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <AnimatedButton
                        type="submit"
                        variant="primary"
                        size="md"
                        fullWidth
                        icon="arrow"
                      >
                        {isSubmitting ? 'Booking Session...' : 'Book Now'}
                      </AnimatedButton>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
