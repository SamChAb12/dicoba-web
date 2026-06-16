"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const slides = [
  {
    label: "Impresión",
    image: "/carousel/slide-1-impresion.jpeg",
    title: "Soluciones de impresión para empresas y oficinas.",
    description:
      "Impresoras, consumibles, tóners y equipos de alto rendimiento para mantener la productividad de tu negocio.",
  },
  {
    label: "Cómputo",
    image: "/carousel/slide-2-computo.jpeg",
    title: "Tecnología para impulsar tu productividad.",
    description:
      "Equipos de cómputo, monitores, periféricos y accesorios para empresas, oficinas y clientes particulares.",
  },
  {
    label: "Papelería",
    image: "/carousel/slide-3-papeleria.jpeg",
    title: "Todo para tu oficina en un solo proveedor.",
    description:
      "Papelería, artículos escolares y suministros corporativos para mantener tu operación completa.",
  },
  {
    label: "Marcas",
    image: "/carousel/slide-4-marcas.jpeg",
    title: "Trabajamos con las mejores marcas.",
    description:
      "Calidad, garantía y respaldo para tu empresa con una amplia variedad de marcas reconocidas.",
  },
  {
    label: "Entrega",
    image: "/carousel/slide-5-entrega.jpeg",
    title: "Entrega y atención personalizada.",
    description:
      "Llevamos tus productos hasta donde los necesitas, con servicio confiable en Querétaro.",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F4F6F8] pt-24"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#2B72C6]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0F3F80]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1650px] items-center gap-20 px-10 py-24 md:grid-cols-[1.18fr_0.82fr]">
        <div className="max-w-5xl">
          <p className="mb-10 text-sm font-bold uppercase tracking-[0.38em] text-[#2B72C6]">
            {siteConfig.slogan}
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-[#0F3F80] sm:text-6xl lg:text-7xl">
            Tecnología, impresión y suministros para tu empresa.
          </h1>

          <p className="mt-9 max-w-4xl text-xl leading-9 text-zinc-700">
            Somos distribuidores de consumibles de impresión, papelería, equipo
            de cómputo y tecnología. Atendemos empresas, negocios y clientes
            particulares en Querétaro con más de 20 años de experiencia.
          </p>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-[#0F3F80] px-9 py-4 text-center text-base font-semibold text-white transition hover:bg-[#2B72C6]"
            >
              Solicitar cotización
            </a>

            <a
              href="#productos"
              className="rounded-full border border-[#0F3F80] px-9 py-4 text-center text-base font-semibold text-[#0F3F80] transition hover:bg-white"
            >
              Ver tienda en línea
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="relative h-[430px] w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-[#0F3F80]/10">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              priority
              className="object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F3F80]/90 via-[#0F3F80]/55 to-[#0F3F80]/10" />

            <div className="relative flex h-full flex-col justify-end p-10 text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/75">
                {currentSlide.label}
              </p>

              <h2 className="max-w-lg text-4xl font-bold leading-tight">
                {currentSlide.title}
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-white/85">
                {currentSlide.description}
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-2xl flex-wrap justify-center gap-3 md:-ml-20">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`rounded-full border px-5 py-2 text-sm font-bold shadow-sm transition ${
                  activeSlide === index
                    ? "border-[#0F3F80] bg-[#0F3F80] text-white"
                    : "border-[#2B72C6]/30 bg-white text-[#0F3F80] hover:bg-[#F4F6F8]"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}