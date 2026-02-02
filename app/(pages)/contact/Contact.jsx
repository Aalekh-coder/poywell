"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          ✓ Message sent successfully! We'll get back to you soon.
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-gradient-to-r from-[#0971CE] to-[#2e86f9] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/image/sharp-container/IMG_9304-Photoroom.webp"
            fill
            alt="background"
            className="object-cover"
          />
        </div>
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-teko mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 px-2 md:px-10 lg:px-20 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0971CE] text-white rounded-lg">
                <Mail size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@sangamplastic.com</p>
            <p className="text-gray-600">support@sangamplastic.com</p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0971CE] text-white rounded-lg">
                <Phone size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 (11) 4567-8900</p>
            <p className="text-gray-600">+91 9876-543-210</p>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0971CE] text-white rounded-lg">
                <MapPin size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Address
            </h3>
            <p className="text-gray-600">Sangam Plastic Industries Pvt Ltd</p>
            <p className="text-gray-600 text-sm">Delhi, India</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-2 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-teko">
            Send Us a Message
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0971CE] transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0971CE] transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0971CE] transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0971CE] transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0971CE] transition"
                    placeholder="What is this about?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0971CE] transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-lg font-semibold hover:bg-[#145ec0] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/image/sharp-container/IMG_9304-Photoroom.webp"
                  fill
                  alt="Contact us"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-gradient-to-br from-[#0971CE]/10 to-[#2e86f9]/10 p-6 rounded-xl border border-[#0971CE]/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Expert guidance on product selection
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Custom bulk pricing for large orders
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Technical support and specifications
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0971CE] font-bold">✓</span>
                    <span className="text-gray-700">
                      Fastest nationwide delivery
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#0971CE] to-[#2e86f9] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-teko">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of healthcare facilities that trust Sangam Plastic
            Industries for their biomedical waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911145678900"
              className="px-6 py-3 bg-white text-[#0971CE] rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@sangamplastic.com"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0971CE] transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
