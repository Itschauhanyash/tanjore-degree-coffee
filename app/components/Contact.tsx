'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Reach Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaPhone className="w-6 h-6 text-brown-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <a href="tel:+919003106755" className="text-gray-600 hover:text-brown-600">
                      +91 9003106755
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="w-6 h-6 text-brown-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <a href="mailto:tanjoredegreecoffee@yahoo.in" className="text-gray-600 hover:text-brown-600">
                      tanjoredegreecoffee@yahoo.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6 text-brown-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-600">
                      364, 37th Street TVS Avenue,<br />
                      Anna Nagar West Extn.,<br />
                      Chennai - 600101
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#8B4513] text-white py-3 px-6 rounded-lg hover:bg-[#8B4513]/90 transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 