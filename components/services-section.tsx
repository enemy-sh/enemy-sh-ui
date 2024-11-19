"use client";

import React, { useEffect, useRef } from "react";
import ServicesCarousel from "./ui/services-carousel";
import { animate } from "motion";

const services = [
    { title: "ci/cd pipeline automation", description: "we specialize in building automated ci/cd pipelines to streamline your software delivery.", categories: ["devops"] },
    { title: "kubernetes orchestration", description: "our experts deploy and manage kubernetes clusters for efficient container management.", categories: ["container management", "devops"] },
    { title: "infrastructure as code", description: "we utilize iac tools for automated provisioning and infrastructure management.", categories: ["devops"] },
    { title: "cloud migration and integration", description: "seamless migration and integration of your services to the cloud with devops best practices.", categories: ["devops", "cloud services"] },
    { title: "devops strategy consulting", description: "tailored devops strategies to enhance your development and operations collaboration.", categories: ["consulting", "devops"] },
    { title: "monitoring, observability, and metrics", description: "implement comprehensive monitoring and observability to gain insights into your system's performance.", categories: ["operations", "devops"] },
    { title: "cloud security and compliance", description: "implementing devsecops practices to ensure cloud security and compliance.", categories: ["security", "devops"] },
    { title: "cost management and optimization", description: "optimize your cloud costs with our expert analysis and devops strategies.", categories: ["performance", "devops"] },
    { title: "serverless application development", description: "design and deploy serverless applications for scalable and cost-effective solutions.", categories: ["devops", "serverless"] },
    { title: "microservices architecture", description: "transition to a microservices architecture for flexibility and rapid deployment cycles.", categories: ["architecture", "devops"] },
    { title: "containerization and management", description: "efficiently containerize applications to enhance reliability and scalability.", categories: ["container management", "devops"] }
]

export default function ServicesSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionNode = sectionRef.current;
        if (sectionNode) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animate(sectionNode, { x: [-100, 0], opacity: [0, 1] }, { duration: 1 });
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
        <div className="bg-slate-50 bg-dots bg-top" >
            <div ref={sectionRef} className="flex flex-col items-center justify-center min-h-[70vh]">
                <div className="flex flex-row items-start start w-5/6 h-1/2 mb-8">
                <div className="flex flex-col items-start justify-center w-1/2 gap-2">
                    <p className="text-5xl">we will focus on everything else so you can focus on whats important.</p>
                    <p className="text-gray-700">our wide range of services allows you to focus on your core business while we handle the rest.</p>
                </div>
                </div>
                <div className="flex flex-row items-start justify-start w-5/6">
                    <ServicesCarousel services={services} />
                </div>
            </div>
        </div>
    )
}