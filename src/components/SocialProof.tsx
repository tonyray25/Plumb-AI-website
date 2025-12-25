"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Plumb AI caught a $47,000 scope gap in our electrical bid that we would have completely missed. The Division 26 analysis flagged motor starters that weren't in our takeoff but were clearly spec'd in the mechanical section.",
    name: "Coming Soon",
    title: "Electrical Contractor",
    company: "DFW Metro Area",
    isFuture: true,
  },
  {
    quote: "We've used attorneys for contract review for 15 years. Plumb AI delivers the same analysis in 24 hours for 10% of the cost. The GC risk profiling alone has saved us from three problematic projects.",
    name: "Coming Soon",
    title: "HVAC Contractor",
    company: "Dallas-Fort Worth",
    isFuture: true,
  },
  {
    quote: "The Texas law compliance check is invaluable. They flagged an indemnity clause that would have voided our insurance coverage. That one catch paid for a year of service.",
    name: "Coming Soon",
    title: "Plumbing Contractor",
    company: "North Texas",
    isFuture: true,
  },
];

export default function SocialProof() {
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
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            Trusted by DFW subcontractors
          </h2>
          <p className="mt-6 text-lg text-[#6a6a6a]">
            Early adopter testimonials coming soon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm ${
                testimonial.isFuture ? "opacity-70" : ""
              }`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-4xl text-[#2a2a2a]">
                &ldquo;
              </div>

              <div className="relative z-10">
                <p className="text-[#aaaaaa] leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                      <span className="text-[#6a6a6a] text-sm">?</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#6a6a6a]">
                        {testimonial.title} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future badge */}
              {testimonial.isFuture && (
                <div className="absolute top-4 left-4 px-2 py-1 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-sm">
                  <span className="text-xs text-[#ff6b35]">Preview</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#8a8a8a]">
            Be among our first success stories.{" "}
            <a
              href="#contact"
              className="text-[#ff6b35] hover:text-[#ff8555] transition-colors"
            >
              Get your free risk scan today →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
