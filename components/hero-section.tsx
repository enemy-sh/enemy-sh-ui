'use client'

import { useEffect } from 'react'
import { animate } from 'motion'
import Link from 'next/link'
import Slider from 'react-slick'
import { Typewriter } from 'react-simple-typewriter'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function HeroSection() {
  useEffect(() => {
    // Animate the hero description and button
    animate('.hero-description', { opacity: [0, 1], y: [50, 0] }, { delay: 0.4, duration: 0.6 });
    animate('.hero-button', { opacity: [0, 1], y: [50, 0] }, { delay: 0.6, duration: 0.6 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow:12,
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
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="text-center px-4 z-10 mb-20">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
          From zero to{' '}
          <span className="text-gray-300">
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
        <p className="hero-description text-lg md:text-md mb-8">
          Streamline your operations with our expert DevOps solutions.
        </p>
        <Link href="#services" className="hero-button inline-flex items-center bg-purple-800 text-white px-6 py-3 font-semibold hover:bg-purple-700 transition-all duration-300">
          Explore DevOps Solutions
        </Link>
      </div>
      <div className="w-full px-4">
        <Slider {...settings}>
          {devOpsPlatforms.map((platform, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center bg-white h-32 p-4 rounded-lg border border-gray-200">
                <img src={platform.logo} alt={platform.name} className="w-full h-16 object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </section>
  )
}
