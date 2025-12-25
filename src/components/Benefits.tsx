"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    number: "01",
    title: "Forensic-Level Contract Intelligence",
    description: `Deep AI analysis goes beyond keyword search. Our DeepSeek R1 reasoning engine identifies contradictions between specification sections, flags non-compliant indemnity clauses under Texas Anti-Indemnity Act, and spots the Division 23/26 HVAC starter conflicts that cost $20,000+ per miss.`,
    highlight: "Beyond keyword search",
  },
  {
    number: "02",
    title: "The DFW Knowledge Moat",
    description: `Every contract analyzed builds our proprietary intelligence database. We track which architects habitually bury seismic requirements in aesthetic specs. We know which GCs modify AIA arbitration clauses. We remember which municipalities have stricter firestop inspections. This institutional memory becomes your competitive advantage.`,
    highlight: "Institutional memory",
  },
  {
    number: "03",
    title: "24-Hour Turnaround, Lawyer-Grade Precision",
    description: `Upload your bid docs via secure portal. Our AI scans General Conditions, Special Provisions, and MEP specifications. Within 24 hours, receive a Red-Line Risk Report with specific clause citations, risk ratings, and recommended RFIs—for a fraction of attorney review costs.`,
    highlight: "24-hour delivery",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
            Why Choose Plumb AI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display max-w-3xl">
            Built for the risks DFW subcontractors actually face.
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-t border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="text-6xl md:text-7xl font-bold text-[#1a1a1a] group-hover:text-[#2a2a2a] transition-colors font-display">
                    {benefit.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display leading-tight">
                    {benefit.title}
                  </h3>
                  <div className="mt-3 inline-block px-3 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-sm">
                    <span className="text-sm text-[#ff6b35]">{benefit.highlight}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-6">
                  <p className="text-[#8a8a8a] text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
