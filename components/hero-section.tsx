'use client'

import { useEffect } from 'react'
import { animate } from 'motion'
import Link from 'next/link'
import Slider from 'react-slick'
import { Typewriter } from 'react-simple-typewriter'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function HeroSection() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow:10,
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
  };

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
  ];

  return (
    <section className="h-screen flex flex-col items-center bg-slate-50 justify-center bg-dots text-black">
      <div className="text-center px-4 z-10 mb-20 mt-40">
        <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4">
          From zero to{' '}
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
        <p className="hero-description text-md md:text-md mb-8">
          Streamline your operations with our expert DevOps solutions.
        </p>
        <Link href="#services" className="inline-flex items-center rounded-lg bg-purple-500 px-6 py-3 font-semibold hover:bg-purple-700 transition-all duration-300 text-white">
          Explore DevOps Solutions
        </Link>
      </div>
      <div className="w-full px-4">
        <Slider {...settings}>
          {devOpsPlatforms.map((platform, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center  h-32 p-4 rounded-lg">
                <img src={platform.logo} alt={platform.name} className="w-full h-12 object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
