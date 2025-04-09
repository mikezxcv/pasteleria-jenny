import Image from "next/image"
import Link from "next/link"
import BakeryLogo from "@/components/bakery-logo"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

// Ampliamos la lista de pasteles para la galería completa
const pasteles = [
  { id: 1, src: "/assets/pastel1.jpg", alt: "Pastel de cumpleaños" },
  { id: 2, src: "/assets/pastel2.jpg", alt: "Pastel de bodas" },
  { id: 3, src: "/assets/pastel3.jpg", alt: "Pastel temático" },
  { id: 4, src: "/assets/pastel4.jpg", alt: "Cupcakes decorados" },
  { id: 5, src: "/assets/pastel5.jpg", alt: "Pastel de chocolate" },
  { id: 6, src: "/assets/pastel6.jpg", alt: "Pastel de frutas" },
  { id: 7, src: "/assets/pastel7.jpg", alt: "Pastel infantil" },
  { id: 8, src: "/assets/pastel8.jpg", alt: "Pastel de aniversario" },
  { id: 9, src: "/assets/pastel9.jpg", alt: "Pastel de graduación" },
  { id: 10, src: "/assets/pastel10.jpg", alt: "Pastel de Halloween" },
  { id: 11, src: "/assets/pastel11.jpg", alt: "Pastel de Navidad" },
  { id: 12, src: "/assets/pastel12.jpg", alt: "Pastel de San Valentín" },
]

const socialNetworks = [
  {
    name: "Facebook",
    icon: <Facebook size={40} />,
    color: "#1877F2",
    url: "https://facebook.com",
    description: "Síguenos en Facebook para ver nuestras últimas creaciones y promociones especiales.",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle size={40} />,
    color: "#25D366",
    url: "https://wa.me/1234567890",
    description: "Contáctanos directamente por WhatsApp para consultas rápidas y cotizaciones personalizadas.",
  },
  {
    name: "Instagram",
    icon: <Instagram size={40} />,
    color: "#E1306C",
    url: "https://instagram.com",
    description: "Visita nuestro Instagram para inspirarte con nuestra galería completa de diseños y novedades.",
  },
]

export default function GaleriaCompleta() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Imagen de fondo estacional */}
      {/* <div className="relative bg-[var(--primary)] py-8 mb-8"> */}
      <div className="relative py-8 mb-8">
        <div className="absolute inset-0">
          <Image src="/assets/gradi.png" alt="Fondo estacional" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <BakeryLogo width={150} height={100} />
            <div className="text-white mt-4 md:mt-0">
              <h2 className="title-font text-2xl md:text-3xl font-bold mb-2">¡Especial de Temporada!</h2>
              <p className="text-lg">
                Descubre nuestros pasteles navideños con 20% de descuento hasta el 15 de diciembre.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="title-font text-4xl md:text-5xl font-bold mb-4 text-[var(--primary)]">Galería Completa</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explora nuestra colección completa de creaciones. Actualizamos nuestra galería semanalmente con nuevos
            diseños.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {pasteles.map((pastel) => (
            <div key={pastel.id} className="overflow-hidden rounded-lg shadow-md group bg-white">
              <div className="relative h-64 w-full">
                <Image
                  src={pastel.src || "/placeholder.svg"}
                  alt={pastel.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{pastel.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tarjetas de redes sociales */}
        <section className="mb-12">
          <h2 className="title-font text-3xl font-bold text-center mb-8 text-[var(--primary)]">
            Síguenos en Redes Sociales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {socialNetworks.map((network) => (
              <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
                  <div className="p-6" style={{ backgroundColor: network.color }}>
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[var(--primary)]">
                      {network.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-center">{network.name}</h3>
                    <p className="text-gray-600 text-center">{network.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="text-center space-y-6">
          <p className="text-lg">¿Te gustaría un diseño personalizado? Contáctanos para hacer realidad tu idea.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="py-2 px-6 bg-[var(--primary)] text-white rounded-full font-medium hover:bg-[var(--secondary)]"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--primary-dark)] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <BakeryLogo className="mb-4" />
              <p className="text-lg font-semibold mb-2">Pastelería Jenny © {new Date().getFullYear()}</p>
              <p>Contacto: (123) 456-7890 | info@pasteleriajennyexample.com</p>
            </div>

            <div className="flex gap-6">
              <Link href="/#galeria" className="hover:underline">
                Galería
              </Link>
              <Link href="/#cotizacion" className="hover:underline">
                Cotización
              </Link>
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />
    </main>
  )
}
