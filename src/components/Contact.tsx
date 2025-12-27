"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import 3D components to avoid SSR issues
const Scene3D = dynamic(() => import("./3d/Scene3D"), { ssr: false });
const GeometricAccent = dynamic(() => import("./3d/GeometricAccent"), { ssr: false });

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    trade: "",
    email: "",
    phone: "",
    projectName: "",
    bidDueDate: "",
    helpType: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, this could integrate with Tally or another form service
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

      {/* 3D Geometric Accents - Background decorations */}
      {mounted && (
        <>
          {/* Top left accent */}
          <div className="hidden lg:block absolute top-20 left-[5%] w-[150px] h-[150px] opacity-20">
            <Scene3D cameraPosition={[0, 0, 3]}>
              <GeometricAccent scale={0.5} rotationSpeed={0.2} variant="cube" />
            </Scene3D>
          </div>

          {/* Bottom right accent */}
          <div className="hidden lg:block absolute bottom-20 right-[5%] w-[180px] h-[180px] opacity-25">
            <Scene3D cameraPosition={[0, 0, 3]}>
              <GeometricAccent scale={0.6} rotationSpeed={0.25} variant="icosahedron" />
            </Scene3D>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left content */}
          <div className="relative">
            <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight">
              The risk-free bid starts today.
            </h2>
            <p className="mt-6 text-lg text-[#8a8a8a] leading-relaxed">
              Submit your current bid documents and receive a complimentary General Conditions review. See exactly how Plumb AI protects your margins before you commit.
            </p>

            {/* What you'll get */}
            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold text-white font-display">
                Your free scan includes:
              </h3>
              <ul className="space-y-3">
                {[
                  "Top 5 risk clauses identified",
                  "Texas law compliance check",
                  "Preliminary GC risk assessment",
                  "Recommended next steps",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#ff6b35] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#aaaaaa]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3D Accent near CTA text - mobile visible */}
            {mounted && (
              <div className="lg:hidden w-full h-[150px] mt-8 opacity-40">
                <Scene3D cameraPosition={[0, 0, 3]}>
                  <GeometricAccent scale={0.5} rotationSpeed={0.3} variant="octahedron" />
                </Scene3D>
              </div>
            )}

            {/* Contact info */}
            <div className="mt-10 pt-10 border-t border-[#2a2a2a]">
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#ff6b35] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:risk@plumb-bids.com"
                    className="text-[#aaaaaa] hover:text-white transition-colors"
                  >
                    risk@plumb-bids.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#ff6b35] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-[#aaaaaa]">Dallas-Fort Worth, Texas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form with 3D accent */}
          <div className="relative">
            {/* 3D accent positioned near the form */}
            {mounted && (
              <div className="hidden lg:block absolute -top-10 -right-10 w-[120px] h-[120px] opacity-30 z-0">
                <Scene3D cameraPosition={[0, 0, 3]}>
                  <GeometricAccent scale={0.4} rotationSpeed={0.35} variant="octahedron" />
                </Scene3D>
              </div>
            )}

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="relative z-10 p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm"
            >
              <h3 className="text-xl font-bold text-white mb-6 font-display">
                Request Your Free Risk Scan
              </h3>

              <div className="space-y-4">
                {/* Name and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#aaaaaa] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white placeholder-[#6a6a6a] focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#aaaaaa] mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white placeholder-[#6a6a6a] focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="Smith Electric LLC"
                    />
                  </div>
                </div>

                {/* Trade */}
                <div>
                  <label className="block text-sm text-[#aaaaaa] mb-2">
                    Trade *
                  </label>
                  <select
                    name="trade"
                    required
                    value={formData.trade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white focus:outline-none focus:border-[#ff6b35] transition-colors"
                  >
                    <option value="">Select your trade</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="hvac">HVAC</option>
                    <option value="other">Other MEP</option>
                  </select>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#aaaaaa] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white placeholder-[#6a6a6a] focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="john@smithelectric.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#aaaaaa] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white placeholder-[#6a6a6a] focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="(214) 555-0123"
                    />
                  </div>
                </div>

                {/* Project and Due Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#aaaaaa] mb-2">
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white placeholder-[#6a6a6a] focus:outline-none focus:border-[#ff6b35] transition-colors"
                      placeholder="Frisco ISD Addition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#aaaaaa] mb-2">
                      Bid Due Date
                    </label>
                    <input
                      type="date"
                      name="bidDueDate"
                      value={formData.bidDueDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                  </div>
                </div>

                {/* How can we help */}
                <div>
                  <label className="block text-sm text-[#aaaaaa] mb-2">
                    How can we help? *
                  </label>
                  <select
                    name="helpType"
                    required
                    value={formData.helpType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white focus:outline-none focus:border-[#ff6b35] transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="free-scan">Free Risk Scan</option>
                    <option value="spot-check">Spot Check ($150)</option>
                    <option value="full-scope">Full Scope Analysis ($450)</option>
                    <option value="retainer">Monthly Retainer</option>
                    <option value="demo">Schedule a Demo</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-[#aaaaaa] mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-white placeholder-[#6a6a6a] focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                    placeholder="Any specific concerns about this bid?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#ff6b35] text-[#0a0a0a] font-medium rounded-sm hover:bg-[#ff8555] transition-colors"
                >
                  Submit Request
                </button>

                <p className="text-xs text-[#6a6a6a] text-center mt-4">
                  Your documents are encrypted and never shared. We respond within 24 hours.
                </p>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
