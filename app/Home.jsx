"use client";

import Image from "next/image";
import { faqs, homeProductData, solutionSector } from "@/data";
import {
  Clock,
  ShieldCheck,
  Factory,
  Stethoscope,
  SlidersHorizontal,
  Truck,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    productInterest: "",
    quantity: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="px-2 md:px-10 lg:px-20">
      {/* success message  */}
      <AnimatePresence>
        {formSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✓ Quote request submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>


      <section className="py-5">
        <h2 className="text-center font-bold text-2xl md:text-3xl">
          Your Trusted Sharp Container & Needle Destroyer Manufacturer Since
          1988
        </h2>
        <p className="py-3 text-justify">
          Established in 1988, Sangam Industries has been a trusted Sharp
          Container Manufacturer and Needle Destroyer Manufacturer, delivering
          high-quality biomedical waste management solutions for hospitals,
          clinics, laboratories, and healthcare institutions across India. With
          decades of manufacturing excellence, we specialize in producing
          durable, safe, and regulation-compliant products designed to ensure
          secure disposal of medical sharps and needles.
        </p>
        <p className="py-3 text-justify ">
          Based in Delhi, India, our advanced manufacturing facility is equipped
          with modern machinery and quality control systems that enable us to
          meet large-scale production requirements while maintaining strict
          safety and quality standards. Over the years, we have earned the
          confidence of healthcare providers, medical professionals, and
          institutional clients by consistently delivering products that are
          reliable, hygienic, cost-effective, and built for long-term use.
        </p>
        <p className="py-3 text-justify ">
          Driven by innovation and guided by strong leadership, our experienced
          team remains committed to enhancing healthcare safety through
          continuous improvement, product development, and customer-focused
          service.
        </p>
      </section>

      {/* product section  */}
      <section className="py-5">
        <p className="font-bold text-center  text-2xl md:text-3xl">
          Our Products
        </p>
        <p className="font-medium text-lg text-center pb-2">
          Reliable Biomedical Waste Management Solutions
        </p>
        <p className="text-center">
          At <strong>Sangam Industries</strong>, we manufacture and supply a
          comprehensive range of high-quality biomedical waste management
          products designed to ensure safety, hygiene, and regulatory compliance
          in healthcare environments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  mt-6">
          {homeProductData.map(({ id, image, title }) => (
            <div
              className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              key={id}
            >
              <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>
                <button className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* counter   */}

      <section>
        <div></div>
        <div></div>
      </section>

      {/* why health leader trust  */}
      <section className="py-10 mt-8 bg-gray-50 rounded-2xl p-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
          Why Healthcare Leaders Trust Sangam Industries
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] text-white rounded-lg">
              <Clock size={24} />
            </div>
            <div>
              <p className="font-semibold">Decades of Proven Experience</p>
              <p className="text-sm">
                Since 1988, we have built a strong reputation supplying durable
                and compliant biomedical waste solutions to hospitals, clinics,
                and laboratories across India.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] text-white rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-semibold">Assured Quality Standards</p>
              <p className="text-sm">
                Products are made from premium-grade materials and undergo
                strict inspections to ensure performance, safety, and regulatory
                compliance.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] text-white rounded-lg">
              <Factory size={24} />
            </div>
            <div>
              <p className="font-semibold">Modern Manufacturing Capabilities</p>
              <p className="text-sm">
                Our state-of-the-art Delhi facility is equipped with advanced
                machinery to meet bulk production demands while maintaining
                consistent quality.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] text-white rounded-lg">
              <Stethoscope size={24} />
            </div>
            <div>
              <p className="font-semibold">Designed for Safety & Hygiene</p>
              <p className="text-sm">
                We design products to help prevent needle-stick injuries,
                minimize contamination risks, and support hygienic waste
                disposal.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] text-white rounded-lg">
              <SlidersHorizontal size={24} />
            </div>
            <div>
              <p className="font-semibold">Flexible & Custom Solutions</p>
              <p className="text-sm">
                Available in multiple sizes, capacities, and designs — we
                provide customized solutions tailored to healthcare
                requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] text-white rounded-lg">
              <Truck size={24} />
            </div>
            <div>
              <p className="font-semibold">
                Nationwide Reach & Reliable Supply
              </p>
              <p className="text-sm">
                We serve clients across India with timely delivery, dependable
                support, and long-term service reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cta  */}
      <section className="py-12 mt-8 bg-gradient-to-r from-[#0971CE] to-[#2e86f9] text-white rounded-2xl p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Need Bulk Supply for Hospitals or Healthcare Facilities?
          </h3>
          <p className="mt-4 text-lg">
            We offer large-scale production capacity, competitive pricing, and
            reliable nationwide delivery for bulk biomedical waste management
            requirements.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow hover:scale-[.99] transition-transform"
              aria-label="Contact our sales team"
            >
              Contact Our Sales Team
            </a>

            <a
              href="/contact?bulk=true"
              className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              aria-label="Request bulk pricing"
            >
              Request Bulk Pricing
            </a>
          </div>

          <p className="mt-6 text-sm opacity-90">
            Supporting Multiple Sectors with Safe Waste Solutions
          </p>
        </div>
      </section>

      {/* supporting multiple  */}
      <section className="py-5 md:py-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
          Supporting Multiple Sectors with Safe Waste Solutions
        </h3>

        <p className="text-justify py-2">
          At <strong>Sangam Industries</strong>, we cater to a wide range of
          industries by providing high-quality sharp containers, and needle
          destroyers etc. designed to meet strict safety, hygiene, and
          regulatory standards. Our products are trusted by healthcare
          providers, institutions, and commercial organizations that require
          safe, reliable, and long-lasting solutions for medical and hazardous
          waste disposal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {solutionSector.map(({ icon: IconComponent, title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-[#0971CE] text-white rounded-lg shrink-0">
                <IconComponent size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Trusted Manufacturer of Sharp  */}
      <section className="py-3">
        <p className="text-sm text-center">
          A Trusted Manufacturer of Sharp Containers & Needle Destroyers
        </p>
        <h1 className="text-center py-2 font-bold text-2xl md:text-3xl">
          Sharp Container Manufacturer in India
        </h1>
        <p className="text-justify">
          As a trusted <strong>sharp container manufacturer</strong>, Sangam
          Industries produces a wide range of durable, puncture-resistant
          containers designed for the safe disposal of needles, syringes,
          blades, and other medical sharps. Our sharp containers are suitable
          for hospitals, clinics, laboratories, and healthcare facilities,
          ensuring safe biomedical waste handling and reduced risk of
          needle-stick injuries.
        </p>

        <div className="mt-4">
          <p className="font-semibold mb-2">We focus on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Safety</strong>: Puncture-proof and leak-resistant for
              secure disposal
            </li>
            <li>
              <strong>Durability</strong>: Made from high-quality,
              impact-resistant materials
            </li>
            <li>
              <strong>Compliance</strong>: Designed to meet biomedical waste
              management regulations
            </li>
          </ul>

          <p className="mt-4">
            Whether it’s a hospital, laboratory, or medical center, our sharp
            containers provide reliable, safe, and hygienic solutions for
            medical waste disposal.
          </p>
        </div>
      </section>

      {/* faq section  */}

      <section className="py-10 mt-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Frequently Asked Questions (FAQs)
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about our products and services
        </p>

        <div className="max-w-5xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 mt-0.5"
                >
                  <ChevronDown size={20} className="text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* query form  */}
      <section className="py-10 mt-8 flex flex-col md:flex-row gap-8 md:items-center">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Request a Quote or Product Catalog Today!
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the form below and our team will get back to you shortly
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFormSubmitted(true);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                organization: "",
                productInterest: "",
                quantity: "",
                message: "",
              });
              setTimeout(() => setFormSubmitted(false), 4000);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Organization / Hospital Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Organization / Hospital Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  placeholder="Hospital or clinic name"
                />
              </div>

              {/* Product Interest Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Product Interest
                </label>
                <select
                  required
                  value={formData.productInterest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productInterest: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                >
                  <option value="">Select a product</option>
                  {homeProductData.map(({ id, title }) => (
                    <option key={id} value={title}>
                      {title}
                    </option>
                  ))}
                  <option value="all">All Products</option>
                </select>
              </div>

              {/* Quantity / Requirement */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Quantity / Requirement
                </label>
                <input
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  placeholder="e.g., 100 units per month"
                />
              </div>
            </div>

            {/* Message / Special Instructions */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Message / Special Instructions
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-xl font-semibold hover:bg-[#145ec0] transition-colors shadow-md hover:shadow-lg"
            >
              Request a Quote
            </button>
          </form>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            width={500}
            height={500}
            alt="contact"
            src={"/image/sharp-container/IMG_9304-Photoroom.webp"}
            className=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
