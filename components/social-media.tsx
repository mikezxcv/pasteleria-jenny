import { Facebook, Instagram, MessageCircle } from "lucide-react"

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

export default function SocialMedia() {
  return (
    <section className="container-custom bg-gray-50">
      <h2 className="title-font text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--primary)]">
        Conéctate con Nosotros
      </h2>

      <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
        Visita nuestras redes sociales para ver todas nuestras creaciones, mantenerte al día con nuestras promociones y
        contactarnos fácilmente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {socialNetworks.map((network) => (
          <a key={network.name} href={network.url} target="_blank" rel="noopener noreferrer" className="block group">
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

              <div className="px-6 pb-6 text-center">
                <span className="inline-block py-2 px-4 bg-[var(--primary)] text-white rounded-full font-medium group-hover:bg-[var(--secondary)]">
                  Visitar {network.name}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
