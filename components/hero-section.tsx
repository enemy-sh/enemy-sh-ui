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
    animate('.hero-title', { opacity: [0, 1], x: [-100, 0] }, { duration: 0.8 })
    animate('.hero-description', { opacity: [0, 1], x: [-100, 0] }, { delay: 0.2, duration: 0.8 })
    animate('.hero-button', { opacity: [0, 1], y: [50, 0] }, { delay: 0.4, duration: 0.8 })
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
    <section className="h-screen flex flex-col items-center bg-slate-50 justify-center bg-dots text-black">
      <div className="text-center px-4 z-10 mb-20 mt-40">
        <h1 className="hero-title text-5xl md:text-6xl font-normal mb-4">
          0 to{' '}
          <span className="text-gray-900">
            <Typewriter
              words={['CI/CD Pipelines', 'Infrastructure as Code', 'Containerization', 'Monitoring & Logging', 'Cloud Automation', 'Security & Compliance']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="hero-description text-gray-800 text-md md:text-md mb-8">
          From a-z, we've got you covered.
        </p>
        <Link href="#services">
          <div className="hero-button inline-flex items-center bg-slate-800 px-6 py-3 font-semibold hover:bg-slate-700 transition-all duration-300 text-white">
            Explore DevOps Solutions
          </div>
        </Link>
      </div>
      <div className="w-full relative hero-description bg-gradient-to-r from-transparent via-white to-transparent">
        <Slider {...settings}>
          {devOpsPlatforms.map((platform, index) => (
            <div key={index} className="px-2 ">
              <div className="flex items-center justify-center h-32 p-4 rounded-lg ">
                <img src={platform.logo} alt={platform.name} className="w-full h-12 object-contain" />
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
