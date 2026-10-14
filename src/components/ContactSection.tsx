import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ExternalLink, Star, CheckCircle } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export const ContactSection: React.FC = () => {
  const mapLink =
    'https://www.google.co.in/maps/place/GET+FIT+FITNESS+%26+GYM/@10.8313836,78.6933356,17z/data=!3m1!4b1!4m6!3m5!1s0x3baaf503d584f567:0x26b9c057a7468a69!8m2!3d10.8313783!4d78.6959105!16s%2Fg%2F11zxy3t262?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D';

  const facilityHighlights = [
    'Modern, clean, and hygienic interior',
    'Well-maintained equipment for all training regimens',
    'Friendly, approachable & certified trainers',
    'Motivating atmosphere for beginners & pros',
    'Shower & secure locker facilities',
    'Ample parking space at Gem Plaza',
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#090d13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-4 h-0.5 bg-amber-400" />
            <span className="text-amber-400 text-xs md:text-sm font-sub tracking-[0.25em] font-semibold uppercase">
              VISIT OUR FACILITY
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
            FIND US IN <span className="text-amber-400">TIRUCHIRAPPALLI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Conveniently situated at Gem Plaza, Sankaran Pillai Road. Stop by for
            a free walkthrough and trial session!
          </motion.p>
        </div>

        {/* 2-Column Split: Info Cards Left, Map Embed Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="rounded-3xl p-7 md:p-8 bg-slate-900/90 border border-slate-800 shadow-xl">
              {/* Rating Pill */}
              <div className="flex items-center gap-2 mb-6 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full w-fit">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-300">
                  5.0 / 5.0 (Verified Reviews)
                </span>
              </div>

              {/* Details List */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sub font-semibold tracking-wider text-slate-400 uppercase">
                      Location
                    </h4>
                    <p className="text-sm md:text-base font-semibold text-white mt-0.5 leading-snug">
                      3rd Floor, Gem Plaza, Sankaran Pillai Road,
                      <br />
                      Tiruchirappalli, Tamil Nadu 620002
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sub font-semibold tracking-wider text-slate-400 uppercase">
                      Operating Hours
                    </h4>
                    <p className="text-sm md:text-base font-semibold text-white mt-0.5">
                      Monday – Sunday: 5:00 AM – 9:00 PM
                    </p>
                    <p className="text-xs text-amber-400/90 font-medium">
                      Open 7 days a week for uninterrupted fitness
                    </p>
                  </div>
                </div>

                {/* Phone & Contact */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sub font-semibold tracking-wider text-slate-400 uppercase">
                      Phone &amp; WhatsApp
                    </h4>
                    <p className="text-sm md:text-base font-semibold text-white mt-0.5 font-mono">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sub font-semibold tracking-wider text-slate-400 uppercase">
                      Email
                    </h4>
                    <p className="text-sm md:text-base font-semibold text-white mt-0.5">
                      getfitgym@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Google Maps Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <AnimatedButton
                  variant="primary"
                  size="md"
                  fullWidth
                  href={mapLink}
                  customIcon={<ExternalLink className="w-4 h-4" />}
                  icon="custom"
                >
                  Open in Google Maps
                </AnimatedButton>
              </div>
            </div>

            {/* Highlights List */}
            <div className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800/80">
              <h4 className="text-xs font-sub uppercase tracking-wider text-amber-400 font-bold mb-3">
                Club Highlights &amp; Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {facilityHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Map Embed Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative min-h-[420px] lg:min-h-full bg-slate-950 flex flex-col"
          >
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                GET FIT FITNESS &amp; GYM · Trichy
              </span>
            </div>

            {/* Interactive Responsive Google Map iframe */}
            <iframe
              title="GET FIT FITNESS & GYM Location Map"
              src="https://maps.google.com/maps?q=10.8313783,78.6959105&hl=en&z=16&output=embed"
              className="w-full h-full min-h-[460px] border-0 filter contrast-[1.08] invert-[90%] hue-rotate-[180deg]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
