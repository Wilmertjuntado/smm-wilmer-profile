import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Framework from "@/components/sections/Framework";
import Proof from "@/components/sections/Proof";
import Portfolio from "@/components/sections/Portfolio";
import Packages from "@/components/sections/Packages";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Framework />
        <Proof />
        <Portfolio />
        <Packages />
        <About />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
