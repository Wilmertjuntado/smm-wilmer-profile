"use client";

import Link from "next/link";
import { Container } from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          {/* Logo / Name */}
          <Link href="/" className="text-lg font-bold tracking-tight text-black">
            Wilmer Juntado
          </Link>

          {/* Nav Links - Updated with absolute paths */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <Link href="/#framework" className="hover:text-black transition">
              Framework
            </Link>
            <Link href="/#proof" className="hover:text-black transition">
              Proof
            </Link>
            <Link href="/#portfolio" className="hover:text-black transition">
              Work
            </Link>
            <Link href="/#packages" className="hover:text-black transition">
              Packages
            </Link>
            {/* Kept as is since it points to a sub-page */}
            <Link href="/funnels" className="hover:text-black transition font-medium text-black">
              Funnels
            </Link>
          </nav>

          {/* CTA - Updated with absolute path */}
          <Link
            href="/#contact"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Book Call
          </Link>
        </div>
      </Container>
    </header>
  );
}