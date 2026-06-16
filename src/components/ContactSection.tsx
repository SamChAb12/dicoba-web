import { siteConfig } from "@/data/site";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-[#F4F6F8] py-28"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 px-10 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#2B72C6]">
            Contacto
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#0F3F80] sm:text-5xl">
            ¿Necesitas una cotización?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
            Nuestro equipo puede ayudarte a encontrar la mejor solución en
            impresión, papelería, equipo de cómputo, tecnología y suministros
            empresariales para tu negocio.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="font-bold text-[#0F3F80]">
                WhatsApp
              </p>

              <p className="mt-1 text-lg text-zinc-700">
                {siteConfig.whatsapp}
              </p>
            </div>

            <div>
              <p className="font-bold text-[#0F3F80]">
                Teléfonos
              </p>

              {siteConfig.phones.map((phone) => (
                <p
                  key={phone}
                  className="mt-1 text-lg text-zinc-700"
                >
                  {phone}
                </p>
              ))}
            </div>

            <div>
              <p className="font-bold text-[#0F3F80]">
                Correo electrónico
              </p>

              <p className="mt-1 text-lg text-zinc-700">
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-[#0F3F80] p-12 text-white shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/70">
            DICOBA
          </p>

          <h3 className="mt-5 text-4xl font-bold leading-tight">
            Tu mejor opción para abastecer tu empresa.
          </h3>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Más de 20 años ofreciendo atención personalizada, productos de
            calidad y entrega directa para empresas, oficinas y negocios en
            Querétaro.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-bold">20+</p>
              <p className="mt-2 text-sm text-white/70">
                Años de experiencia
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-bold">100+</p>
              <p className="mt-2 text-sm text-white/70">
                Marcas disponibles
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-bold">QRO</p>
              <p className="mt-2 text-sm text-white/70">
                Cobertura local
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/524422876865"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#0F3F80] transition hover:bg-[#F4F6F8]"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}