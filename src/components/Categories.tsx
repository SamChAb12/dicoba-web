import Image from "next/image";

const categories = [
  {
    title: "Impresión",
    description:
      "Impresoras, tóners, tintas, consumibles y equipos para oficina.",
    image: "/images/categories/categoria-impresion.jpeg",
    href: "/catalogo#impresion",
  },
  {
    title: "Equipo de cómputo",
    description:
      "Laptops, monitores, computadoras, periféricos y accesorios.",
    image: "/images/categories/categoria-computo.jpeg",
    href: "/catalogo#computo",
  },
  {
    title: "Papelería",
    description:
      "Hojas, carpetas, bolígrafos, post-it, organizadores y material de oficina.",
    image: "/images/categories/categoria-papeleria.jpeg",
    href: "/catalogo#papeleria",
  },
  {
    title: "Tecnología",
    description:
      "Pantallas, redes, almacenamiento, componentes y soluciones tecnológicas.",
    image: "/images/categories/categoria-tecnologia.jpeg",
    href: "/catalogo#tecnologia",
  },
  {
    title: "Consumibles",
    description:
      "Productos de uso diario para mantener operando tu empresa o negocio.",
    image: "/images/categories/categoria-consumibles.jpeg",
    href: "/catalogo#consumibles",
  },
  {
    title: "Entrega empresarial",
    description:
      "Atención personalizada y entrega directa en Querétaro y zonas empresariales.",
    image: "/images/categories/categoria-entrega.jpeg",
    href: "/catalogo#entrega",
  },
];

export default function Categories() {
  return (
    <section id="catalogo" className="bg-[#F4F6F8] py-28">
      <div className="mx-auto max-w-[1500px] px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#2B72C6]">
            Catálogo
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#0F3F80] sm:text-5xl">
            Explora nuestras categorías de productos.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Encuentra fácilmente los productos que buscas. Explora cada
            categoría para consultar artículos, disponibilidad y futuras
            actualizaciones del catálogo digital de DICOBA.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-[2rem] border border-[#2B72C6]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F3F80]/10"
            >
              <div className="mb-7 flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl bg-[#F4F6F8] p-3">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={160}
                  height={160}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0F3F80]">
                {category.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                {category.description}
              </p>

              <a
                href={category.href}
                className="mt-6 inline-flex rounded-full bg-[#0F3F80] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2B72C6]"
              >
                Ver catálogo
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/catalogo"
            className="rounded-full border border-[#0F3F80] px-9 py-4 text-base font-semibold text-[#0F3F80] transition hover:bg-white"
          >
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}