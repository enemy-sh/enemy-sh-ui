"use client";

import React, { useEffect, useRef } from "react";
import ServicesCarousel from "./ui/services-carousel";
import { animate } from "motion";
import ContactForm from "./contact-form";

const services = [
  {
    title: "ci/cd pipeline automation",
    description:
      "we specialize in building automated ci/cd pipelines to streamline your software delivery.",
    categories: ["continuous integration", "continuous deployment"],
  },
  {
    title: "kubernetes orchestration",
    description:
      "our experts deploy and manage kubernetes clusters for efficient container management.",
    categories: ["container management", "orchestration"],
  },
  {
    title: "infrastructure as code",
    description:
      "we utilize iac tools for automated provisioning and infrastructure management.",
    categories: ["iac"],
  },
  {
    title: "cloud migration and integration",
    description:
      "seamless migration and integration of your services to the cloud with devops best practices.",
    categories: ["cloud services"],
  },
  {
    title: "devops strategy consulting",
    description:
      "tailored devops strategies to enhance your development and operations collaboration.",
    categories: ["consulting"],
  },
  {
    title: "monitoring, observability, and metrics",
    description:
      "implement comprehensive monitoring and observability to gain insights into your system's performance.",
    categories: ["observability"],
  },
  {
    title: "cloud security and compliance",
    description:
      "implementing devsecops practices to ensure cloud security and compliance.",
    categories: ["security"],
  },
  {
    title: "cost management and optimization",
    description:
      "optimize your cloud costs with our expert analysis and devops strategies.",
    categories: ["performance"],
  },
  {
    title: "serverless application development",
    description:
      "design and deploy serverless applications for scalable and cost-effective solutions.",
    categories: ["serverless"],
  },
  {
    title: "microservices architecture",
    description:
      "transition to a microservices architecture for flexibility and rapid deployment cycles.",
    categories: ["architecture"],
  },
  {
    title: "containerization and management",
    description:
      "efficiently containerize applications to enhance reliability and scalability.",
    categories: ["container management"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className=" w-full p-3 py-10 flex h-fit lg:h-[70vh] justify-center items-center">
      <div className="flex flex-col lg:flex-row max-w-7xl justify-between items-center w-full gap-8">
      <div
        className="w-full lg:w-1/2 max-w-7xl flex flex-col items-start justify-center"
      >
        <div className="flex flex-col md:flex-row items-start justify-center md:justify-start mb-8">
          <div className="flex flex-col items-start gap-2 text-left px-2">
            <p className="lg:text-4xl text-2xl md:text-3xl">
              we will focus on everything else so you can focus on whats
              important.
            </p>
              <p className="text-gray-700 sm:text-md text-sm">
                our wide range of services allows you to focus on your core
                business while we handle the rest.
              </p>
            </div>
          </div>
          <ServicesCarousel services={services} />
        </div>
	<div className="px-2 w-full md:w-fit"> 
          <ContactForm />
	</div>
      </div>
    </section>
  );
}

