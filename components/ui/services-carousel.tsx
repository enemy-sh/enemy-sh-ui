// File: repos/0-a-lp/components/ui/services-carousel.tsx

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    variableWidth: false,
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
    return (
      <div className="w-full h-fit p-2 justify-center flex flex-col">
        <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="p-2">
                <div key={service.title} className="flex flex-col items-start h-fit text-black justify-start sm:w-auto gap-2 p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex flex-row items-start justify-between w-full">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                  <div className="flex flex-row items-center justify-start w-full gap-2">
                    <Button variant={'outline'}>Learn More</Button>
                    <Button variant={'outline'}>Button 2</Button>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full gap-2">
                    {service.categories.map((category, index) => (
                      <div key={index} className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 text-white rounded-full px-4 py-1 text-xs">{category}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    )
}