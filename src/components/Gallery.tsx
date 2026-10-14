import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Static gallery items loaded from the public folder
  const galleryItems = [
    {
      id: 1,
      title: 'Screenshot 2026-10-11 175026',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175026.png',
      colSpan: 'md:col-span-8',
      height: 'h-64 sm:h-72 md:h-80',
    },
    {
      id: 2,
      title: 'Screenshot 2026-10-11 175037',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175037.png',
      colSpan: 'md:col-span-4',
      height: 'h-64 sm:h-72 md:h-72',
    },
    {
      id: 3,
      title: 'Screenshot 2026-10-11 175048',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175048.png',
      colSpan: 'md:col-span-4',
      height: 'h-64 sm:h-72 md:h-72',
    },
    {
      id: 4,
      title: 'Screenshot 2026-10-11 175057',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175057.png',
      colSpan: 'md:col-span-4',
      height: 'h-64 sm:h-72 md:h-72',
    },
    {
      id: 5,
      title: 'Screenshot 2026-10-11 175109',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175109.png',
      colSpan: 'md:col-span-8',
      height: 'h-64 sm:h-72 md:h-80',
    },
    {
      id: 6,
      title: 'Screenshot 2026-10-11 175119',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175119.png',
      colSpan: 'md:col-span-4',
      height: 'h-64 sm:h-72 md:h-72',
    },
    {
      id: 7,
      title: 'Screenshot 2026-10-11 175131',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175131.png',
      colSpan: 'md:col-span-4',
      height: 'h-64 sm:h-72 md:h-72',
    },
    {
      id: 8,
      title: 'Screenshot 2026-10-11 175140',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175140.png',
      colSpan: 'md:col-span-4',
      height: 'h-64 sm:h-72 md:h-72',
    },
    {
      id: 9,
      title: 'Screenshot 2026-10-11 175150',
      caption: '',
      image: '/get_fit_mapped_assets/Gallery/Screenshot%202026-10-11%20175150.png',
      colSpan: 'md:col-span-8',
      height: 'h-64 sm:h-72 md:h-80',
    },
  ];

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-[#0b0f15] overflow-hidden">
      <div className="w-full px-8 sm:px-10 md:px-12 lg:px-14">
        {/* Top Centered Text Header */}
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
              OUR GALLERY
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
            MOMENTS THAT INSPIRE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed mb-6"
          >
            Take a look inside our gym – real people, real progress, real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <AnimatedButton
              variant="primary"
              size="md"
              icon="arrow"
              onClick={() => setSelectedImage(galleryItems[0].image)}
            >
              View Gallery
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Mixed-Sized Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item.image)}
              className={`group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer ${item.colSpan} ${item.height}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:brightness-105 group-hover:scale-106 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Title & icon info on hover */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between transition-transform duration-300">
                <div>
                  <h4 className="text-lg md:text-xl font-bebas tracking-wide text-white group-hover:text-amber-300 transition-colors uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 opacity-80 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gym Gallery Full View"
                className="w-full h-full max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
