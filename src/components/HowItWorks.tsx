"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Submit bid documents (PDF/ZIP) via our secure intake form. APFS-encrypted local processing ensures your trade secrets stay protected.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our hybrid AI system performs semantic search for 15+ risk vectors: liquidated damages, indemnification overreach, warranty traps, payment contingencies, and scope ambiguities.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert Report",
    description:
      "Receive comprehensive Red-Line Risk Report with red/yellow/green risk ratings, specific clause citations, and actionable RFI recommendations. Includes video walkthrough of top 3 risks.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#0f0f0f]">
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
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            Three steps to protected bids.
          </h2>
          <p className="mt-6 text-lg text-[#8a8a8a] max-w-2xl mx-auto">
            From upload to actionable intelligence in 24 hours or less.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#2a2a2a] via-[#ff6b35]/30 to-[#2a2a2a] -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative z-10 bg-[#0f0f0f] p-8 lg:p-10">
                  {/* Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-6xl font-bold text-[#1a1a1a] font-display">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 flex items-center justify-center bg-[#ff6b35]/10 text-[#ff6b35] rounded-sm">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {step.title}
                  </h3>
                  <p className="text-[#8a8a8a] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                    <svg
                      className="w-12 h-12 text-[#ff6b35]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical credibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-16 border-t border-[#2a2a2a]"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-display">
              Industrial-Grade AI. Construction-Specific Knowledge.
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Apple Silicon", desc: "Local Data Security" },
              { label: "DeepSeek R1", desc: "Legal Analysis Engine" },
              { label: "Semantic Search", desc: "Contextual Understanding" },
              { label: "Knowledge Graph", desc: "Institutional Memory" },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm"
              >
                <div className="text-lg font-semibold text-white font-display">
                  {tech.label}
                </div>
                <div className="text-sm text-[#6a6a6a] mt-1">{tech.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
