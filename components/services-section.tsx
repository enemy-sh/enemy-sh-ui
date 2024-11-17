import React from "react";
import ServicesCarousel from "./ui/services-carousel";

const services = [
    { title: "Cloud Infrastructure Setup", description: "We design and implement scalable cloud infrastructures tailored to your business.", categories: ["Cloud Services"] },
    { title: "Continuous Integration/Continuous Deployment", description: "We set up CI/CD pipelines to automate and streamline your software delivery process.", categories: ["DevOps"] },
    { title: "Infrastructure as Code", description: "We use IaC tools to provision and manage your infrastructure efficiently.", categories: ["DevOps"] },
    { title: "Cloud Migration Services", description: "We help you migrate your existing workloads to a cloud environment with minimal downtime.", categories: ["Cloud Services"] },
    { title: "DevOps Consulting", description: "We offer tailored DevOps strategies to improve collaboration and workflow efficiency.", categories: ["Consulting", "DevOps"] },
    { title: "Monitoring and Logging", description: "We set up comprehensive monitoring and logging solutions to keep your systems healthy.", categories: ["Operations"] },
    { title: "Cloud Security Services", description: "We ensure your cloud environments are secure with the latest security best practices.", categories: ["Security", "Cloud Services"] },
    { title: "Cost Optimization", description: "We analyze and optimize your cloud spending to ensure you get the best value.", categories: ["Performance"] },
    { title: "Disaster Recovery Planning", description: "We create robust disaster recovery plans to ensure business continuity in case of failures.", categories: ["Business Continuity"] },
    { title: "Kubernetes Orchestration", description: "We deploy and manage Kubernetes clusters to automate containerized application management.", categories: ["Container Management"] }
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