"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const associations = [
  { name: "Texas Construction Association", abbr: "TCA" },
  { name: "Associated General Contractors", abbr: "AGC" },
  { name: "National Electrical Contractors", abbr: "NECA" },
  { name: "Plumbing-Heating-Cooling Contractors", abbr: "PHCC" },
  { name: "ASHRAE", abbr: "ASHRAE" },
  { name: "ABC Texas", abbr: "ABC" },
];

export default function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#0f0f0f]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left content */}
          <div>
            <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
              Built by Construction Professionals
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight">
              Built by a Navy veteran who understands operational risk.
            </h2>
            <p className="mt-6 text-lg text-[#8a8a8a] leading-relaxed">
              Our team combines military precision with deep construction industry expertise. We&apos;ve walked job sites, negotiated with GCs, and experienced firsthand the contractual traps that can sink a subcontractor.
            </p>
            <p className="mt-4 text-lg text-[#8a8a8a] leading-relaxed">
              That&apos;s why we built Plumb AI—to give every electrical, plumbing, and HVAC contractor access to the same level of contract intelligence that only the largest firms could previously afford.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <span className="text-sm text-[#aaaaaa]">DFW Based</span>
              </div>
              <div className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <span className="text-sm text-[#aaaaaa]">Veteran Owned</span>
              </div>
              <div className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <span className="text-sm text-[#aaaaaa]">Texas Focused</span>
              </div>
            </div>
          </div>

          {/* Right - Association logos */}
          <div>
            <p className="text-sm text-[#6a6a6a] uppercase tracking-wider mb-6">
              Trusted by members of
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {associations.map((assoc, index) => (
                <motion.div
                  key={assoc.abbr}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#3a3a3a] transition-colors"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#4a4a4a] font-display">
                      {assoc.abbr}
                    </div>
                    <div className="text-xs text-[#6a6a6a] mt-1">{assoc.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
