import { HeroSection } from './hero-section'
import ServicesSection from './services-section'
import Footer from './footer'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen text-black">
      <main>
        <HeroSection />
        <ServicesSection />
        <Footer />
      </main>
    </div>
  )
} 
