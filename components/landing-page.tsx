import { HeroSection } from './hero-section'
import ServicesSection from './services-section'
import Nav from './nav'
import CtaSection from './cta-section'
import Footer from './footer'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen text-black">
      <main>
        <Nav />
        <HeroSection />
        <ServicesSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  )
} 