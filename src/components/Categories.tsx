import Image from "next/image";

const categories = [
  {
    title: "Impresión",
    description:
      "Impresoras, tóners, tintas, consumibles y equipos para oficina.",
    image: "/images/categories/categoria-impresion.jpeg",
  },
  {
    title: "Equipo de cómputo",
    description:
      "Laptops, monitores, computadoras, periféricos y accesorios.",
    image: "/images/categories/categoria-computo.jpeg",
  },
  {
    title: "Papelería",
    description:
      "Hojas, carpetas, bolígrafos, post-it, organizadores y material de oficina.",
    image: "/images/categories/categoria-papeleria.jpeg",
  },
  {
    title: "Tecnología",
    description:
      "Pantallas, redes, almacenamiento, componentes y soluciones tecnológicas.",
    image: "/images/categories/categoria-tecnologia.jpeg",
  },
  {
    title: "Consumibles",
    description:
      "Productos de uso diario para mantener operando tu empresa o negocio.",
    image: "/images/categories/categoria-consumibles.jpeg",
  },
  {
    title: "Entrega empresarial",
    description:
      "Atención personalizada y entrega directa en Querétaro y zonas empresariales.",
    image: "/images/categories/categoria-entrega.jpeg",
  },
];

export default function Categories() {
  return (
    <section id="productos" className="bg-[#F4F6F8] py-28">
      <div className="mx-auto max-w-[1500px] px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#2B72C6]">
            Productos
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#0F3F80] sm:text-5xl">
            Todo lo que tu empresa necesita en un solo proveedor.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            En esta sección mostramos las principales categorías que maneja
            DICOBA. El catálogo completo estará disponible en la tienda en línea,
            donde podrás consultar productos, precios y disponibilidad.
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
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-[#0F3F80] px-9 py-4 text-center text-base font-semibold text-white transition hover:bg-[#2B72C6]"
          >
            Ver tienda en línea
          </a>
        </div>
      </div>
    </section>
  );
}