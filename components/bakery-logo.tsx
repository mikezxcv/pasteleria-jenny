import Image from "next/image"
import Link from "next/link"

interface BakeryLogoProps {
  className?: string
  width?: number
  height?: number
}

export default function BakeryLogo({ className = "", width = 120, height = 80 }: BakeryLogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      <div className="relative" style={{ width, height }}>
        <Image
          src="/assets/logo.png"
          // src="/placeholder.svg?height=80&width=120"
          alt="Logo Pastelería Jenny"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}
