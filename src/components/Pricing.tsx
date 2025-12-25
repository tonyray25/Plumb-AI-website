"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Spot Check",
    price: "$150",
    period: "/bid",
    description: "Quick risk identification for time-sensitive bids",
    features: [
      "General Conditions review only",
      "Top 5 risk identification",
      "12-hour turnaround",
      "Risk rating summary",
      "Email delivery",
    ],
    cta: "Get Spot Check",
    popular: false,
  },
  {
    name: "Full Scope",
    price: "$450",
    period: "/bid",
    description: "Comprehensive analysis for major bids",
    features: [
      "Complete spec + plans analysis",
      "Division 23/26 scope gap detection",
      "24-hour delivery",
      "Loom video walkthrough",
      "RFI recommendations",
      "Texas law compliance check",
      "GC risk profile",
    ],
    cta: "Get Full Scope",
    popular: true,
  },
  {
    name: "Retainer",
    price: "$2,000",
    period: "/month",
    description: "Enterprise-level protection for active bidders",
    features: [
      "Up to 10 bids/month",
      "Priority 12-hour processing",
      "Addendum monitoring",
      "Custom risk profile",
      "Quarterly risk trends report",
      "Direct phone support",
      "Builds institutional memory",
    ],
    cta: "Start Retainer",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#ff6b35] text-sm uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            Built for the margins subcontractors actually work with.
          </h2>
          <p className="mt-6 text-lg text-[#8a8a8a] max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Pay only for what you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 rounded-sm border ${
                plan.popular
                  ? "bg-[#1a1a1a] border-[#ff6b35]/50"
                  : "bg-[#0f0f0f] border-[#2a2a2a]"
              } hover:border-[#ff6b35]/30 transition-all duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-[#ff6b35] text-[#0a0a0a] text-sm font-medium rounded-sm">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white font-display">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#6a6a6a] mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-white font-display">
                  {plan.price}
                </span>
                <span className="text-[#6a6a6a]">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#ff6b35] mr-3 mt-0.5 flex-shrink-0"
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
                    <span className="text-[#aaaaaa] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className={`block w-full text-center py-3 px-6 font-medium rounded-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#ff6b35] text-[#0a0a0a] hover:bg-[#ff8555]"
                    : "border border-[#3a3a3a] text-white hover:border-[#ff6b35] hover:text-[#ff6b35]"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6a6a6a]">
            All plans include secure document handling and Texas-specific legal analysis.
          </p>
          <p className="text-[#6a6a6a] mt-2">
            Need custom volume pricing?{" "}
            <a
              href="#contact"
              className="text-[#ff6b35] hover:text-[#ff8555] transition-colors"
            >
              Let&apos;s talk →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
