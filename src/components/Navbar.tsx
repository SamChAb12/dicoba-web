"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "catalogo", label: "Catálogo" },
  { id: "marcas", label: "Marcas" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <nav className="flex items-center justify-between px-16 py-2">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/logos/logo-navbar.png"
            alt="DICOBA"
            width={300}
            height={150}
            priority
            className="h-20 w-auto"
          />
        </a>

        <div className="hidden flex-1 justify-center gap-20 text-lg font-semibold md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                activeSection === link.id
                  ? "text-[#2B72C6]"
                  : "text-[#0F3F80] hover:text-[#2B72C6]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/524422876865"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#0F3F80] px-8 py-3 text-base font-bold text-white transition hover:bg-[#2B72C6] md:inline-flex"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}