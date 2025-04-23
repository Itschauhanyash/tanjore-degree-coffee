'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya',
    text: "I've been a fan of Jayam rose milk & coffee for years, and their decoction maker has truly been a game-changer for me. As someone who values both authenticity and convenience, I am able to brew authentic South Indian filter coffee at home."
  },
  {
    id: 2,
    name: 'Rajesh',
    text: 'Indulging in rose milk and filter coffee at this quaint café was an absolute delight.'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#F5E6D3] to-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#8B4513]">
            Client Testimonials
          </h2>
          <p className="text-lg text-[#5C4434] max-w-2xl mx-auto">
            What our valued customers say about their experience with Tanjore Degree Coffee
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
              className="bg-white/80 rounded-2xl shadow-lg p-8 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <p className="text-lg text-[#5C4434] mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="text-[#8B4513] font-semibold">
                  - {testimonials[currentIndex].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                index === currentIndex 
                ? 'bg-[#8B4513] scale-125' 
                : 'bg-[#8B4513]/30 hover:bg-[#8B4513]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 