import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  duration: string;
  avatar: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        '“The trainers are amazing and the facilities are top-notch. I’ve never felt stronger and more confident!”',
      author: 'Arjun Kumar',
      duration: 'Member for 1 year',
      avatar: '/src/assets/images/trainer_arjun_1791909774472.jpg',
      rating: 5,
    },
    {
      id: 2,
      quote:
        '“A great community and motivating environment. The best gym in town with top equipment!”',
      author: 'Priya Sharma',
      duration: 'Member for 6 months',
      avatar: '/src/assets/images/trainer_divya_1791909775845.jpg',
      rating: 5,
    },
    {
      id: 3,
      quote:
        '“Flexible plans, expert guidance and visible results. Highly recommend to both beginners and regular lifters!”',
      author: 'Rahul Mehta',
      duration: 'Member for 8 months',
      avatar: '/src/assets/images/trainer_karthik_1791909776149.jpg',
      rating: 5,
    },
    {
      id: 4,
      quote:
        '“Workout ambience is incredibly motivating. Extremely neat and clean facilities with all workout equipment available.”',
      author: 'Sneha Reddy',
      duration: 'Member for 1.5 years',
      avatar: '/src/assets/images/gym_ad_woman_fit_1791909691150.jpg',
      rating: 5,
    },
    {
      id: 5,
      quote:
        '“Very kind coaching. All materials workout gym available. Super coaching centre. Master gives very inspiring guidance.”',
      author: 'Vigneshwaran K',
      duration: 'Member for 2 years',
      avatar: '/src/assets/images/gym_ad_man_curl_1791909689541.jpg',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-[#0b0f15] overflow-hidden">
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
              TESTIMONIALS
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
            WHAT OUR MEMBERS SAY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Real stories from our fitness community in Tiruchirappalli.
          </motion.p>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="hidden sm:flex absolute -left-4 md:-left-6 z-20 w-12 h-12 rounded-full bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-white hover:text-amber-400 items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Display Window */}
          <div className="w-full overflow-hidden py-4 px-2">
            <motion.div
              className="flex gap-6 transition-all"
              animate={{
                x: `-${currentIndex * (100 / 3 > 33.33 ? 33.33 : 100)}%`,
              }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
              style={{
                // Responsive sliding width
                transform: `translateX(-${currentIndex * 320}px)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[350px] md:w-[380px] shrink-0 rounded-3xl p-7 bg-[#dbe2ea] text-slate-900 shadow-xl border border-white/40 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-800 text-sm md:text-[15px] font-medium leading-relaxed mb-6">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author Lockup */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-300/80">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-950 uppercase leading-none">
                        {item.author}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium mt-1">
                        {item.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="hidden sm:flex absolute -right-4 md:-right-6 z-20 w-12 h-12 rounded-full bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-white hover:text-amber-400 items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-amber-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
