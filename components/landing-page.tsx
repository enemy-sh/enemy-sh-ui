import { HeroSection } from './hero-section'
import ServicesSection from './services-section'
import Nav from './nav'
import CtaSection from './cta-section'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen text-black">
      <main>
        <Nav />
        <HeroSection />
        <ServicesSection />
        <CtaSection />
      </main>
    </div>
  )
} 