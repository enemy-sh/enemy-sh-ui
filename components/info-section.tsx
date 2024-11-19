"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import { animate } from "motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'react-hook-form';
import { div, p, s } from 'motion/react-client';
import { dir } from 'console';


const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: true,
}

const settings2 = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    rtl: true,
}

const settings3 = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    rtl: true,
}

const settings4 = {
    dots: false,
    infinite: true,
    speed: 3700,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    rtl: false,
}

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

const painPointsStyles = "bg-slate-50 p-1 rounded-full px-2 border text-sm text-center border-slate-200 drop-shadow-sm hover:bg-red-500 hover:text-white transition-all duration-300 hover:border-none hover:cursor-pointer ease-in-out";

function InfoSection() {
    const sectionRef = useRef(null);
    useEffect(() => {
        const sectionNode = sectionRef.current;
        if (sectionNode) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animate(sectionNode, { x: [100, 0], opacity: [0, 1] }, { duration: 1, delay: 0.5 });
                        observer.disconnect(); 
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(sectionNode);
            return () => observer.disconnect();
        }
    }, []);
  return (
    <div className="bg-slate-50 bg-dots bg-bottom min-h-[30vh] flex flex-col justify-center" >
        <div ref={sectionRef} className="flex flex-col items-center justify-center w-full">
            <div className="w-5/6 flex gap-1 flex-col mb-4">
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
            </div>
            <div className="flex flex-row items-center justify-center w-5/6 h-1/2">
                <div className="flex flex-col items-center justify-center w-1/2 gap-2"> 
                    <p className="text-sm text-gray-700">(your enemies are our enemies too.)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection
