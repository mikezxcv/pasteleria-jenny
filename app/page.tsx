import HeroSection from "@/components/hero-section"
import Gallery from "@/components/gallery"
import QuoteForm from "@/components/quote-form"
import SocialMedia from "@/components/social-media"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Gallery />
      <QuoteForm />
      <SocialMedia />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
