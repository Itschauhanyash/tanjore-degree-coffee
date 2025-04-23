'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/Banner-img-1.png',
    '/images/Banner-img-2.png',
    '/images/Banner-img-3.png',
    '/images/Banner-img-4.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      <Navbar />
      
      {/* Hero Section with Slideshow */}
      <section id="home" className="relative min-h-screen pt-20">
        <div className="absolute inset-0 top-20">
          {slides.map((slide, index) => (
            <motion.div
              key={slide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.1
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#8B4513]">
            About Us
          </h2>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div
            className="relative w-full h-auto aspect-[16/9] mb-6"
          >
            <Image
              src="/images/About-us.png"
              alt="About Tanjore Degree Coffee Background"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold text-[#8B4513] mb-6"
              >
                Welcome to Tanjore
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-[#5C4434] leading-relaxed"
              >
                In January 22, 2013, Shri C. Saminathan, with over 35 years of experience in the FMCG industry, laid the foundation for his coffee decoction venture under the brand name &apos;TANJORE Degree Coffee&apos;
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Best Section */}
      <section id="our-best" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#8B4513]/5 via-[#F5E6D3] to-[#F5E6D3]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#8B4513]">
              Our Best
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Quality</h3>
              <p className="text-[#5C4434] leading-relaxed mb-8">
                At Tanjore Degree Coffee, we uphold uncompromising standards to deliver a superior coffee experience. 
                From carefully selected beans to meticulous brewing techniques, we ensure that every cup meets our 
                stringent quality benchmarks. Experience excellence with every sip of Tanjore Degree Coffee.
              </p>
              <div className="flex justify-center transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/BestQualityImg.png"
                  alt="Quality Guaranteed"
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Authenticity</h3>
              <p className="text-[#5C4434] leading-relaxed mb-8">
                Our commitment to preserving the authentic taste and aroma of South Indian filter coffee 
                sets us apart from the rest. With Tanjore Degree Coffee, you can enjoy the true essence 
                of this beloved beverage in the comfort of your own home.
              </p>
              <div className="flex justify-center transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Orgauthenticimg.png"
                  alt="Authentic Original"
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5E6D3] via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] mb-6">
              Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              '/images/Gallery-img-1.png',
              '/images/Gallery-img-2.jpeg',
              '/images/Gallery-img-3.png',
              '/images/Gallery-img-4.jpeg',
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/tanjore-logo.png"
                alt="Tanjore Coffee Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-[#F5E6D3]">
                Authentic South Indian filter coffee, crafted with passion and tradition since 2013.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#F5E6D3]">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/80 hover:text-[#F5E6D3] transition-colors">Home</a></li>
                <li><a href="#our-best" className="text-white/80 hover:text-[#F5E6D3] transition-colors">Our Best</a></li>
                <li><a href="#gallery" className="text-white/80 hover:text-[#F5E6D3] transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="text-white/80 hover:text-[#F5E6D3] transition-colors">Client Testimonials</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-[#F5E6D3] transition-colors">Reach Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#F5E6D3]">Contact Us</h3>
              <ul className="space-y-2 text-white/80">
                <li>📧 tanjoredegreecoffee@yahoo.in</li>
                <li>📞 +91 9003106755</li>
                <li>
                  364, 37th Street TVS Avenue,<br />
                  Anna Nagar West Extn.,<br />
                  Chennai - 600101
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F5E6D3]/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Tanjore Degree Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 