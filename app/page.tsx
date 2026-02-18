import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Framework from "@/components/sections/Framework";
import Proof from "@/components/sections/Proof";
import Portfolio from "@/components/sections/Portfolio";
import Packages from "@/components/sections/Packages";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Funnel from "@/components/sections/Funnel";
import Contact from "@/components/sections/Contact"; // Import the new section



export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Framework />
        <Funnel />        
        <Proof />
        <Portfolio />
        <About />
        <Packages />
        <Contact />
        <CTA />
      </main>

      
    </>
  );
}




