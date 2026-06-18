import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "impresion",
    title: "Impresión",
    description: "Impresoras, tóners, tintas y consumibles.",
    image: "/images/categories/categoria-impresion.jpeg",
  },
  {
    id: "computo",
    title: "Equipo de cómputo",
    description: "Laptops, monitores, computadoras y periféricos.",
    image: "/images/categories/categoria-computo.jpeg",
  },
  {
    id: "papeleria",
    title: "Papelería",
    description: "Hojas, carpetas, bolígrafos, post-it y oficina.",
    image: "/images/categories/categoria-papeleria.jpeg",
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    description: "Pantallas, redes, almacenamiento y soluciones tecnológicas.",
    image: "/images/categories/categoria-tecnologia.jpeg",
  },
  {
    id: "consumibles",
    title: "Consumibles",
    description: "Productos de uso diario para empresas y negocios.",
    image: "/images/categories/categoria-consumibles.jpeg",
  },
  {
    id: "entrega",
    title: "Entrega empresarial",
    description: "Atención personalizada y entrega directa en Querétaro.",
    image: "/images/categories/categoria-entrega.jpeg",
  },
];

const exampleProducts = [
  {
    name: "Producto de ejemplo",
    category: "Impresión",
    brand: "Marca",
    sku: "SKU-001",
  },
  {
    name: "Producto de ejemplo",
    category: "Cómputo",
    brand: "Marca",
    sku: "SKU-002",
  },
  {
    name: "Producto de ejemplo",
    category: "Papelería",
    brand: "Marca",
    sku: "SKU-003",
  },
];

export default function CatalogPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F4F6F8] pt-28">
        <section className="px-10 py-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#2B72C6]">
                Catálogo DICOBA
              </p>

              <h1 className="text-4xl font-bold leading-tight text-[#0F3F80] sm:text-6xl">
                Encuentra productos para tu empresa, oficina o negocio.
              </h1>

              <p className="mt-6 text-lg leading-8 text-zinc-700">
                Explora nuestro catálogo por categoría. Próximamente podrás
                consultar productos, marcas, disponibilidad y solicitar
                cotización directamente desde esta sección.
              </p>

              <div className="mx-auto mt-10 max-w-2xl">
                <input
                  type="text"
                  placeholder="Buscar producto, marca o SKU..."
                  className="w-full rounded-full border border-[#2B72C6]/20 bg-white px-6 py-4 text-base text-zinc-700 outline-none transition focus:border-[#0F3F80]"
                />
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group rounded-[2rem] border border-[#2B72C6]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F3F80]/10"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-[#F4F6F8] p-3">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={140}
                      height={140}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-[#0F3F80]">
                    {category.title}
                  </h2>

                  <p className="mt-3 text-base leading-7 text-zinc-600">
                    {category.description}
                  </p>

                  <span className="mt-6 inline-flex text-sm font-bold text-[#2B72C6]">
                    Ver productos →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="px-10 py-20"
          >
            <div className="mx-auto max-w-[1500px]">
              <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#2B72C6]">
                    Categoría
                  </p>

                  <h2 className="text-4xl font-bold text-[#0F3F80]">
                    {category.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
                    {category.description}
                  </p>
                </div>

                <a
                  href="https://wa.me/524422876865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0F3F80] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#2B72C6]"
                >
                  Solicitar cotización
                </a>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {exampleProducts.map((product, index) => (
                  <div
                    key={`${category.id}-${index}`}
                    className="rounded-[2rem] border border-[#2B72C6]/10 bg-white p-7 shadow-sm"
                  >
                    <div className="mb-6 flex h-40 items-center justify-center rounded-3xl bg-[#F4F6F8] text-zinc-400">
                      Imagen del producto
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2B72C6]">
                      {category.title}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[#0F3F80]">
                      {product.name}
                    </h3>

                    <div className="mt-4 space-y-2 text-sm text-zinc-600">
                      <p>Marca: {product.brand}</p>
                      <p>SKU: {product.sku}</p>
                    </div>

                    <a
                      href="https://wa.me/524422876865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex rounded-full border border-[#0F3F80] px-5 py-3 text-sm font-bold text-[#0F3F80] transition hover:bg-[#0F3F80] hover:text-white"
                    >
                      Cotizar producto
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}