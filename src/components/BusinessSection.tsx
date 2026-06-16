import Image from "next/image";

const stats = [
  {
    number: "20+",
    label: "Años de experiencia",
  },
  {
    number: "100+",
    label: "Marcas reconocidas",
  },
  {
    number: "Miles",
    label: "De productos disponibles",
  },
  {
    number: "Querétaro",
    label: "Cobertura local y empresarial",
  },
];

export default function BusinessSection() {
  return (
    <section id="nosotros" className="bg-white py-28">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#0F3F80]/10">
          <Image
            src="/images/about/nosotros-oficina-completa.jpeg"
            alt="DICOBA equipa oficinas completas"
            width={900}
            height={700}
            className="h-[560px] w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#2B72C6]">
            Nosotros
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#0F3F80] sm:text-5xl">
            Más de 20 años abasteciendo empresas en Querétaro.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700">
            En DICOBA somos especialistas en la distribución de consumibles de
            impresión, papelería, equipo de cómputo y tecnología empresarial.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
            Trabajamos con empresas, negocios y clientes particulares ofreciendo
            atención personalizada, productos de calidad y soluciones integrales
            para oficina.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-[#2B72C6]/15 bg-[#F4F6F8] p-6"
              >
                <p className="text-3xl font-bold text-[#0F3F80]">
                  {stat.number}
                </p>

                <p className="mt-2 text-sm font-semibold text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}