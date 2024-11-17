import React from "react";
import ServicesCarousel from "./ui/services-carousel";

const services = [
    { title: "CI/CD Pipeline Automation", description: "We specialize in building automated CI/CD pipelines to streamline your software delivery.", categories: ["DevOps"] },
    { title: "Kubernetes Orchestration", description: "Our experts deploy and manage Kubernetes clusters for efficient container management.", categories: ["Container Management", "DevOps"] },
    { title: "Infrastructure as Code", description: "We utilize IaC tools for automated provisioning and infrastructure management.", categories: ["DevOps"] },
    { title: "Cloud Migration and Integration", description: "Seamless migration and integration of your services to the cloud with DevOps best practices.", categories: ["DevOps", "Cloud Services"] },
    { title: "DevOps Strategy Consulting", description: "Tailored DevOps strategies to enhance your development and operations collaboration.", categories: ["Consulting", "DevOps"] },
    { title: "Monitoring, Observability, and Metrics", description: "Implement comprehensive monitoring and observability to gain insights into your system's performance.", categories: ["Operations", "DevOps"] },
    { title: "Cloud Security and Compliance", description: "Implementing DevSecOps practices to ensure cloud security and compliance.", categories: ["Security", "DevOps"] },
    { title: "Cost Management and Optimization", description: "Optimize your cloud costs with our expert analysis and DevOps strategies.", categories: ["Performance", "DevOps"] },
    { title: "Serverless Application Development", description: "Design and deploy serverless applications for scalable and cost-effective solutions.", categories: ["DevOps", "Serverless"] },
    { title: "Microservices Architecture", description: "Transition to a microservices architecture for flexibility and rapid deployment cycles.", categories: ["Architecture", "DevOps"] },
    { title: "Containerization and Management", description: "Efficiently containerize applications to enhance reliability and scalability.", categories: ["Container Management", "DevOps"] }
]
export default function ServicesSection() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 bg-dots" >
            <div className="flex flex-row items-start start w-5/6 h-1/2 mb-8">
              <div className="flex flex-col items-start justify-center w-1/2 gap-2">
                <p className="text-5xl">We will focus on everything else so you can focus on whats important.</p>
                <p className="text-gray-700">Our wide range of services allows you to focus on your core business while we handle the rest.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start w-5/6">
                <ServicesCarousel services={services} />
            </div>
        </div>
    )
}