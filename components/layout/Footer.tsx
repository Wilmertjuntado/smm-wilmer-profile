import { Container } from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          
          <p>
            © {new Date().getFullYear()} Wilmer Juntado. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Wilmertjuntado"
              target="_blank"
              className="hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
