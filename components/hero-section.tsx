'use client'

import { useEffect } from 'react'
import Slider from 'react-slick';
import { animate } from 'motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from 'lucide-react';
import InfoSection from './info-section';

export function HeroSection() {
  useEffect(() => {
    animate('.hero-title', { opacity: [0, 1], x: [-100, 0] }, { delay: 1, duration: 0.8 })
    animate('.hero-description', { opacity: [0, 1], x: [-100, 0] }, { delay: 1, duration: 0.8 })
    animate('.hero-button', { opacity: [0, 1], y: [50, 0] }, { delay: 1 , duration: 0.8 })
  }, [])

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' }) // Smooth scrolling
    }
  }

  return (
    <section className="h-screen flex bg-slate-50 flex-col w-full justify-center items-center bg-top text-black">
      <div className="w-full max-w-7xl flex flex-row-reverse justify-between items-center gap-10">
        <div className="flex flex-col items-start text-start justify-center gap-3 w-full h-full">
            <h1 className="hero-title text-xl md:text-8xl font-semibold opacity-0">
	       deploy your enemy
            </h1>                                    
	    <p className='font-medium opacity-50 text-lg lowercase'> We eliminate the enemies of modern software delivery so you don't have to.</p>
	    <div className='w-full flex justify-start'>
              <div onClick={handleScrollToServices} className="flex-row gap-1 justify-center hero-button w-fit flex items-center font-semibold transition-all duration-300 text-black opacity-0 hover:cursor-pointer">
                <span>get started</span>
    	        <ArrowRight className='h-5' />
              </div>
	    </div>
          </div>
	<img className="h-[800px]" src='hero-graphic.svg' alt='enemy.sh hero graphic'/>
      </div>
      <div className="w-full max-w-7xl relative hero-description opacity-0 mt-10">
        <InfoSection />
      </div>
      
    </section>
  )
}
