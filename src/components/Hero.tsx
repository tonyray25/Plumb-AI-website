"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import 3D components to avoid SSR issues
const Scene3D = dynamic(() => import("./3d/Scene3D"), { ssr: false });
const ContractDocument = dynamic(() => import("./3d/ContractDocument"), { ssr: false });
const GeometricAccent = dynamic(() => import("./3d/GeometricAccent"), { ssr: false });

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function Counter({ end, suffix = "", label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#ff6b35] font-display">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-[#8a8a8a] mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a1a]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff6b35]/5 rounded-full blur-[120px]" />

      {/* 3D Document - Left side on desktop */}
      {mounted && (
        <div className="hidden lg:block absolute left-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[400px] opacity-60">
          <Scene3D cameraPosition={[0, 0, 4]}>
            <ContractDocument scale={0.8} rotationSpeed={0.2} />
          </Scene3D>
        </div>
      )}

      {/* 3D Geometric - Right side on desktop */}
      {mounted && (
        <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[250px] h-[250px] opacity-50">
          <Scene3D cameraPosition={[0, 0, 3]}>
            <GeometricAccent scale={0.7} rotationSpeed={0.3} variant="octahedron" />
          </Scene3D>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
            <span className="text-sm text-[#aaaaaa]">AI-Powered Bid Analysis for DFW</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-display">
            We have reinvented bid review
            <br />
            <span className="text-[#ff6b35]">through artificial intelligence.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-[#aaaaaa] max-w-3xl mx-auto leading-relaxed"
          >
            AI-native technology that turns 500-page contracts into actionable risk intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-base md:text-lg text-[#6a6a6a] max-w-2xl mx-auto"
          >
            Protecting DFW subcontractors by detecting the hidden liabilities buried in specs.
          </motion.p>

          {/* CTA Buttons with 3D accents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 relative"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0a0a0a] bg-[#ff6b35] rounded-sm hover:bg-[#ff8555] transition-all duration-200 hover:shadow-lg hover:shadow-[#ff6b35]/20"
            >
              Get Your Free Risk Scan
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-[#3a3a3a] rounded-sm hover:border-[#5a5a5a] hover:bg-[#1a1a1a] transition-all duration-200"
            >
              See How It Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          <Counter end={2847} suffix="+" label="Contracts Analyzed" />
          <Counter end={15420} suffix="+" label="Risk Clauses Identified" />
          <Counter end={4} suffix="M+" label="Dollars Saved" />
        </motion.div>
      </div>

      {/* Mobile 3D element - smaller, centered below content */}
      {mounted && (
        <div className="lg:hidden absolute bottom-24 left-1/2 -translate-x-1/2 w-[120px] h-[120px] opacity-40">
          <Scene3D cameraPosition={[0, 0, 3]}>
            <GeometricAccent scale={0.5} rotationSpeed={0.4} variant="icosahedron" />
          </Scene3D>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#3a3a3a] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
