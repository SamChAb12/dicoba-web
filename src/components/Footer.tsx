import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0F3F80] text-white">
      <div className="mx-auto max-w-[1700px] px-16 py-12">
        <div className="grid gap-16 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logos/logo-azul.png"
              alt="DICOBA"
              width={340}
              height={140}
              className="h-28 w-auto"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
              Más de 20 años ofreciendo soluciones en impresión, papelería,
              tecnología y suministros empresariales para empresas, negocios y
              clientes particulares en Querétaro.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Navegación</h3>

            <div className="flex flex-col gap-3 text-white/80">
              <a href="#inicio" className="hover:text-white">Inicio</a>
              <a href="#nosotros" className="hover:text-white">Nosotros</a>
              <a href="#productos" className="hover:text-white">Productos</a>
              <a href="#marcas" className="hover:text-white">Marcas</a>
              <a href="#contacto" className="hover:text-white">Contacto</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Contacto</h3>

            <div className="space-y-3 text-white/80">
              <p>{siteConfig.phones[0]}</p>
              <p>{siteConfig.phones[1]}</p>
              <p>{siteConfig.whatsapp}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">DICOBA</h3>

            <div className="space-y-3 text-white/80">
              <p>Impresión</p>
              <p>Papelería</p>
              <p>Tecnología</p>
              <p>Consumibles</p>
              <p>Entrega empresarial</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-white/60">
          © {new Date().getFullYear()} DICOBA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}