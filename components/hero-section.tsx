'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Slider from 'react-slick';
import { Typewriter } from 'react-simple-typewriter'
import { animate } from 'motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function HeroSection() {
  useEffect(() => {
    animate('.hero-title', { opacity: [0, 1], x: [-100, 0] }, { delay: 1, duration: 0.8 })
    animate('.hero-description', { opacity: [0, 1], x: [-100, 0] }, { delay: 1, duration: 0.8 })
    animate('.hero-button', { opacity: [0, 1], y: [50, 0] }, { delay: 1 , duration: 0.8 })
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const devOpsPlatforms = [
    { name: "GitLab", logo: "gitlab.png" },
    { name: "AWS", logo: "aws.png" },
    { name: "GitHub", logo: "github_actions.png" },
    { name: "Azure", logo: "azure.png" },
    { name: "Google Cloud", logo: "gcp.svg" },
    { name: "Terraform", logo: "terraform.png" },
    { name: "Docker", logo: "docker.webp" },
    { name: "Kubernetes", logo: "kubernetes.png" },
    { name: "Jenkins", logo: "jenkins.png" },
    { name: "Bitbucket", logo: "bitbucket.png" },
    { name: "Pulumi", logo: "pulumi.png" },
    { name: "Helm", logo: "helm.svg" },
  ]
  

  return (
    <section className="h-screen flex flex-col items-center bg-slate-50 justify-center bg-dots bg-top text-black">
      <div className="text-center px-4 z-10 mb-48 mt-48">
        <h1 className="hero-title text-5xl md:text-5xl font-light mb-4 opacity-0">
          <span className='text-red-600'>$ {' '}</span>
            <Typewriter
              words={['deploy your enemy']}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              delaySpeed={1000}
            />
        </h1>                                    
        <p className="hero-description text-gray-800 text-md md:text-sm mb-8 opacity-0">
          <Typewriter
            words={[
              "turning challenges into allies",
            ]}
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <Link href="#services">
          <div className="hero-button inline-flex items-center bg-black px-4 py-2 font-normal hover:bg-gray-700 transition-all duration-300 text-white opacity-0">
            get started
          </div>
        </Link>
      </div>
      <div className="w-full relative hero-description opacity-0">
        <Slider {...settings}>
          {devOpsPlatforms.map((platform, index) => (
            <div key={index} className="px-2 ">
              <div className="flex items-center justify-center h-22 p-4 rounded-lg ">
                <img src={platform.logo} alt={platform.name} className="w-full h-10 object-contain" />
              </div>
            </div>
          ))}
        </Slider>
        {/* Left gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
        {/* Right gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}
