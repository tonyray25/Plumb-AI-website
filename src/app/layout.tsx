import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plumb AI | AI-Powered Bid Risk Analysis for DFW Subcontractors",
  description: "Protecting DFW electrical, plumbing, and HVAC subcontractors with AI-powered contract analysis. Turn 500-page bid documents into actionable risk intelligence.",
  keywords: ["bid risk analysis", "construction contracts", "DFW subcontractors", "electrical contractors", "plumbing contractors", "HVAC contractors", "Texas construction law", "contract review", "AI construction"],
  authors: [{ name: "Plumb AI" }],
  openGraph: {
    title: "Plumb AI | AI-Powered Bid Risk Analysis",
    description: "AI-native technology that turns 500-page contracts into actionable risk intelligence for DFW subcontractors.",
    type: "website",
    locale: "en_US",
    siteName: "Plumb AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumb AI | AI-Powered Bid Risk Analysis",
    description: "Protecting DFW subcontractors with AI-powered contract analysis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
