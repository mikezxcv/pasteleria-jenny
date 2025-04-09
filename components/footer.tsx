import Link from "next/link"
import BakeryLogo from "./bakery-logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--primary-dark)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <BakeryLogo className="mb-4" />
            <p className="text-lg font-semibold mb-2">Pastelería Jenny © {currentYear}</p>
            <p>Contacto: (123) 456-7890 | info@pasteleriajennyexample.com</p>
          </div>

          <div className="flex gap-6">
            <Link href="#galeria" className="hover:underline">
              Galería
            </Link>
            <Link href="#cotizacion" className="hover:underline">
              Cotización
            </Link>
            <Link href="/galeria-completa" className="hover:underline">
              Galería Completa
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
