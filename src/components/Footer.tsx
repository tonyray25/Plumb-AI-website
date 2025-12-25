"use client";

import Link from "next/link";

const footerLinks = {
  technology: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "The Plumb System", href: "#system" },
    { name: "Risk Vectors", href: "#services" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold tracking-tight font-display">
                PLUMB
              </span>
              <span className="text-[#ff6b35] text-sm font-medium">AI</span>
            </Link>
            <p className="text-[#6a6a6a] text-sm leading-relaxed">
              AI-powered bid risk analysis for DFW electrical, plumbing, and HVAC subcontractors.
            </p>

            {/* Social links placeholder */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-[#6a6a6a] hover:text-[#ff6b35] hover:border-[#ff6b35]/30 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-[#6a6a6a] hover:text-[#ff6b35] hover:border-[#ff6b35]/30 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Technology
            </h4>
            <ul className="space-y-3">
              {footerLinks.technology.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#6a6a6a] hover:text-[#aaaaaa] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#6a6a6a] hover:text-[#aaaaaa] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:risk@plumb-bids.com"
                  className="text-[#6a6a6a] hover:text-[#aaaaaa] transition-colors text-sm"
                >
                  risk@plumb-bids.com
                </a>
              </li>
              <li>
                <span className="text-[#6a6a6a] text-sm">
                  Dallas-Fort Worth, TX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#6a6a6a] text-sm">
              Copyright Plumb AI © {currentYear} | Protecting DFW Subcontractors
            </p>
            <div className="flex items-center space-x-2 text-[#6a6a6a] text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
