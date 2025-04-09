"use client"

import { MessageCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface FloatingWhatsAppProps {
  message?: string
  phoneNumber?: string
}

export default function FloatingWhatsApp({
  message = "Hola, estoy interesado en tus pasteles, ¿podrías darme más información?",
  phoneNumber = "1234567890",
}: FloatingWhatsAppProps) {
  const isMobile = useMobile()

  if (!isMobile) return null

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
