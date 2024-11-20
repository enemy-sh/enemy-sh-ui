import Nav from './nav'
import { HeroSection } from './hero-section'
import InfoSection from './info-section'
import ServicesSection from './services-section'
import CtaSection from './cta-section'
import Footer from './footer'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen text-black">
      <main>
        <Nav />
        <HeroSection />
        <ServicesSection />
        <InfoSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  )
} 