"use client";

import Link from "next/link";
import { Container } from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            Wilmer Juntado
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <Link href="#framework" className="hover:text-black transition">
              Framework
            </Link>
            <Link href="#proof" className="hover:text-black transition">
              Proof
            </Link>
            <Link href="#portfolio" className="hover:text-black transition">
              Work
            </Link>
            <Link href="#packages" className="hover:text-black transition">
              Packages
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Book Call
          </Link>
        </div>
      </Container>
    </header>
  );
}
