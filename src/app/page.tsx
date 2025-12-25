import {
  Navigation,
  Hero,
  ProblemStatement,
  Solution,
  Benefits,
  Trust,
  SocialProof,
  HowItWorks,
  Pricing,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemStatement />
        <Solution />
        <Benefits />
        <Trust />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
