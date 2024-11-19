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
                <div key={service.title} className="flex flex-col items-start h-fit text-gray-800 justify-start sm:w-auto gap-4 p-4 bg-gray-100">
                  <div className="flex flex-col items-start justify-between w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <p className="text-lg font-semibold">{service.title}</p>
                    </div>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full gap-2">
                  <Button variant={'ghost'}>learn more</Button>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full gap-2">
                    {service.categories.map((category, index) => (
                      <div key={index} className="bg-black transition-all  text-slate-200 px-4 py-1 text-xs">{category}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    )
}