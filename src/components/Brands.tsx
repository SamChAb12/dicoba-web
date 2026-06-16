const brands = [
  "HP",
  "Epson",
  "Samsung",
  "Logitech",
  "Kingston",
  "ASUS",
  "MSI",
  "TP-Link",
  "Intel",
  "Microsoft",
  "Lenovo",
  "Dell",
  "Canon",
  "Xerox",
  "LG",
];

export default function Brands() {
  return (
    <section id="marcas" className="bg-white py-28">
      <div className="mx-auto max-w-[1500px] px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#2B72C6]">
            Marcas
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#0F3F80] sm:text-5xl">
            Trabajamos con marcas reconocidas del sector.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Ofrecemos productos de marcas líderes en tecnología, impresión,
            papelería, consumibles y suministros empresariales.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-28 items-center justify-center rounded-3xl border border-[#2B72C6]/10 bg-[#F4F6F8] px-6 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#0F3F80]/10"
            >
              <span className="text-2xl font-bold tracking-wide text-[#0F3F80]">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-semibold text-zinc-600">
          Y muchas marcas más disponibles según las necesidades de tu empresa.
        </p>
      </div>
    </section>
  );
}