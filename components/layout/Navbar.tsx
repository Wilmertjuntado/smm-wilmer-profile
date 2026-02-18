"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to detect current route
import { Container } from "./Container";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Framework", href: "/#framework" },
    { name: "Proof", href: "/#proof" },
    { name: "Work", href: "/#portfolio" },
    { name: "Packages", href: "/#packages" },
    { name: "Funnels", href: "/funnels" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          
          <Link href="/" className="text-lg font-bold tracking-tight text-black">
            Wilmer Juntado
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              // Check if the link is the current page
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive 
                      ? "text-blue-600 font-bold" 
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/#contact"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition shadow-lg shadow-black/10"
          >
            Book Call
          </Link>
        </div>
      </Container>
    </header>
  );
}