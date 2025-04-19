'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";

interface ServicesCarouselProps {
  services: {
    title: string;
    description: string;
    categories: string[];
  }[];
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease',
  pauseOnHover: true,
  arrows: true,
  centerMode: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
};

const handleScrollToContact = () => {
  const servicesSection = document.getElementById('contact');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings} className="w-full">
        {services.map((service, idx) => (
          <div key={idx} className="flex-shrink-0 w-full box-border px-2">
            <div className="flex flex-col items-start justify-start w-full gap-4 p-4 bg-white/70 border rounded-md text-gray-800">
              <div className="w-full flex justify-between items-start">
                <p className="text-lg font-semibold">{service.title}</p>
              </div>
              <p className="text-gray-700 text-sm">{service.description}</p>
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={handleScrollToContact}>
                  learn more
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {service.categories.map((cat, i) => (
                  <span key={i} className="bg-black text-slate-200 rounded-md px-4 py-1 text-xs">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

