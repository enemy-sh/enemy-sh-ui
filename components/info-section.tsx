"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import { animate } from "motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const baseSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};

const settings = {
    ...baseSettings,
    speed: 4000,
    slidesToShow: 5,
};

const settings2 = {
    ...baseSettings,
    speed: 3500,
    slidesToShow: 5,
    rtl: true,
};

const settings3 = {
    ...baseSettings,
    speed: 4500,
    slidesToShow: 5,
    rtl: true,
};

const settings4 = {
    ...baseSettings,
    speed: 3700,
    slidesToShow: 5,
};


const painPointsOne = [
    "integration issues", 
    "deployment delays", 
    "inconsistent environments", 
    "manual processes", 
    "scalability challenges", 
    "security vulnerabilities", 
    "lack of automation", 
    "testing bottlenecks", 
    "configuration drift", 
    "slow feedback loops"
];

const painPointsTwo = [
    "insufficient monitoring", 
    "limited collaboration", 
    "fragmented toolchain", 
    "poor documentation", 
    "downtime issues", 
    "redundant tasks", 
    "limited scalability", 
    "high operational costs", 
    "change management woes", 
    "resource wastage"
];

const painPointsThree = [
    "inconsistent deployments", 
    "time-consuming reviews", 
    "lack of standardization", 
    "miscommunication", 
    "technical debt", 
    "complex architectures", 
    "unsatisfactory user experience", 
    "insufficient data analytics", 
    "inadequate testing coverage", 
    "delayed releases"
];

const painPointsFour = [
    "knowledge silos",
    "compliance issues",
    "dependency management",
    "version control conflicts",
    "infrastructure costs",
    "maintenance overhead",
    "poor error handling",
    "performance bottlenecks",
    "legacy system integration",
    "deployment failures"
];

const painPointsStyles = "bg-slate-50 p-1 rounded-full px-3 border text-sm text-center border-slate-200 drop-shadow-sm hover:bg-red-500 hover:text-white transition-all duration-300 hover:border-none hover:cursor-pointer ease-in-out";

function InfoSection() {
    const sectionRef = useRef(null);
    useEffect(() => {
        const sectionNode = sectionRef.current;
        if (sectionNode) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animate(sectionNode, { x: [100, 0], opacity: [0, 1] }, { duration: 1 });
                        observer.disconnect(); 
                    }
                },
                { threshold: 0.6 }
            );
            observer.observe(sectionNode);
            return () => observer.disconnect();
        }
    }, []);
  return (
    <div className="bg-slate-50 bg-dots bg-bottom min-h-[30vh] flex flex-col justify-center" >
        <div ref={sectionRef} className="flex flex-col items-center justify-center w-full opacity-0">
            <div className="w-full flex gap-1 flex-col mb-4 relative">
                <Slider {...settings2}>
                {painPointsOne && painPointsOne.map((painPoint, index) => (
                <div key={index}>
                    <div className="flex items-center justify-center mr-1">
                        <span className={painPointsStyles}>
                            {painPoint}
                        </span>
                    </div>
                </div>
                ))}
                </Slider>
                <Slider {...settings}>
                {painPointsTwo && painPointsTwo.map((painPoint, index) => (
                <div key={index}>
                    <div className="flex items-center justify-center mr-1">
                        <span className={painPointsStyles}>
                            {painPoint}
                        </span>
                    </div>
                </div>
                ))}
                </Slider>
                <Slider {...settings3}>
                {painPointsThree && painPointsThree.map((painPoint, index) => (
                <div key={index}>
                    <div className="flex items-center justify-center mr-1">
                        <span className={painPointsStyles}>
                            {painPoint}
                        </span>
                    </div>
                </div>
                ))}
                </Slider>
                <Slider {...settings4}>
                {painPointsFour && painPointsFour.map((painPoint, index) => (
                <div key={index}>
                    <div className="flex items-center justify-center mr-1">
                        <span className={painPointsStyles}>
                            {painPoint}
                        </span>
                    </div>
                </div>
                ))}
                </Slider>
                <div className="inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10 absolute"></div>
                <div className="inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10 absolute"></div>
            </div>
            <div className="flex flex-row items-center justify-center w-5/6 h-1/2">
                <div className="flex flex-col items-center justify-center w-full gap-2"> 
                    <p className="text-xs text-black opacity-70">(your enemies are our enemies)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection
