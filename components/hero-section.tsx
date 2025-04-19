'use client'

import { useEffect } from 'react'
import { animate } from 'motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from 'lucide-react';
import InfoSection from './info-section';

export function HeroSection() {
  useEffect(() => {
    animate('.hero-section', { opacity: [0, 1], y: [100, 0] }, { duration: 0.5 })
  }, [])

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' }) 
    }
  }

  return (
    <section className="min-h-fit lg:h-screen p-5 mt-5 sm:mt-0 flex bg-white/70 flex-col w-full justify-center items-center bg-top text-black">
      <div className="w-full max-w-7xl hero-section opacity-0 flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-0 lg:gap-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-3 w-full h-full">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold">
	       deploy your enemy
            </h1>                                    
	    <p className='font-medium opacity-50 text-xs md:text-lg w-full lowercase'> We eliminate the enemies of modern software delivery so you don&#39;t have to.</p>
	    <div className='w-full flex'>
              <div onClick={handleScrollToServices} className="flex-row gap-1 justify-center lg:justify-start items-center w-full flex font-semibold transition-all duration-300 text-black hover:cursor-pointer">
                <span className='text-sm md:text-lg'>get started</span>
    	        <ArrowRight className='h-4 md:h-5' />
              </div>
	    </div>
          </div>
	<img className="h-fit w-full lg:w-4/6" src='hero-graphic.svg' alt='enemy.sh hero graphic'/>
      </div>
      <div className="w-full max-w-7xl relative opacity-0 hero-section mt-10">
        <InfoSection />
      </div>
    </section>
  )
}
