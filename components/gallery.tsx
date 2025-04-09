import Image from "next/image"
import Link from "next/link"

const pasteles = [
  { id: 1, src: "/assets/pastel1.jpg", alt: "Pastel de cumpleaños" },
  { id: 2, src: "/assets/pastel2.jpg", alt: "Pastel de bodas" },
  { id: 3, src: "/assets/pastel3.jpg", alt: "Pastel temático" },
  { id: 4, src: "/assets/pastel4.jpg", alt: "Cupcakes decorados" },
]

export default function Gallery() {
  return (
    <section id="galeria" className="container-custom">
      <h2 className="title-font text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--primary)]">
        Nuestras Creaciones
      </h2>

      <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
        Actualizamos nuestra galería cada semana con nuevos diseños. ¡Visita nuestras redes sociales para ver todas
        nuestras creaciones!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {pasteles.map((pastel) => (
          <div key={pastel.id} className="overflow-hidden rounded-lg shadow-md group">
            <div className="relative h-64 w-full">
              <Image
                src={pastel.src || "/placeholder.svg"}
                alt={pastel.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-lg">
          ¿Interesado en algún diseño específico?{" "}
          <Link href="#cotizacion" className="text-[var(--primary)] font-semibold hover:underline">
            Escríbenos
          </Link>{" "}
          o visita nuestras redes sociales para más inspiración.
        </p>

        <a href="/galeria-completa" className="inline-block cta-button py-2 px-6 rounded-full text-white font-medium">
          Ver Galería Completa
        </a>
      </div>
    </section>
  )
}
