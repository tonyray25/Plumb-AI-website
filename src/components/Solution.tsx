"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Semantic Analysis",
    description: "Deep neural analysis goes beyond keyword search to understand contractual intent and identify contradictions.",
  },
  {
    icon: "🎯",
    title: "Architectural Forensics",
    description: "Track design firm patterns—know which architects bury seismic requirements in aesthetic specifications.",
  },
  {
    icon: "📊",
    title: "GC Risk Profiling",
    description: "Database of habitual clause manipulators—identify which GCs consistently modify protective language.",
  },
  {
    icon: "⚖️",
    title: "Texas Law Compliance",
    description: "Automatic verification against SB 841, HB 3005, and Texas Anti-Indemnity Act requirements.",
  },
  {
    icon: "🔍",
    title: "Division 23/26 Detection",
    description: "Specialized scope gap analysis for MEP conflicts that cost $20,000+ per miss.",
  },
  {
    icon: "📈",
    title: "Competitive Intelligence",
    description: "Proprietary database builds your institutional memory with every contract analyzed.",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0f0f0f]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            That&apos;s the Plumb Intelligence System.
          </h2>
          <p className="mt-6 text-lg text-[#8a8a8a] max-w-2xl mx-auto">
            Enterprise-grade AI analysis built specifically for DFW subcontractors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#3a3a3a] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-3 font-display">
                {feature.title}
              </h3>

              <p className="text-[#8a8a8a] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
