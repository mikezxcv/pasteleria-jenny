"use client"

import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Pastel decorado de Pastelería Jenny"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="title-font text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
          Pastelería Jenny - Dulces Hechos a Tu Medida
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Creamos pasteles únicos que hacen de cada ocasión un momento inolvidable
        </p>
        <Link href="#cotizacion" className="cta-button text-lg font-semibold py-3 px-8 rounded-full">
          Solicita tu Cotización
        </Link>

        {/* Card de promoción vigente */}
        <div className="absolute top-8 right-8 bg-white/90 text-[var(--primary)] p-4 rounded-lg shadow-lg max-w-xs md:max-w-sm transform rotate-3 border-2 border-[var(--accent)]">
          <h3 className="title-font text-xl font-bold mb-2">¡PROMOCIÓN VIGENTE!</h3>
          <p className="text-gray-800">
            20% de descuento en pasteles temáticos de Navidad. ¡Haz tu pedido antes del 15 de diciembre!
          </p>
        </div>
      </div>
    </div>
  )
}
