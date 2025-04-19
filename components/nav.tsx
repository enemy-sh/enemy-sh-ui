"use client"

import React from "react";
import{ useState } from "react";
import { Menu } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { LightningBoltIcon } from "@radix-ui/react-icons"

const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' }) 
    }
  }

  const handleScrollToContact = () => {
    const servicesSection = document.getElementById('contact')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' }) 
    }
  }



export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center items-center p-4 sm:px-4 text-sm font-medium bg-white/70 border-b backdrop-blur-md fixed w-full top-0 z-50">
            <div className="flex items-center gap-4 w-full max-w-7xl justify-between">
                <div className="text-3xl font-normal">
                    <img src="/enemy.svg" alt="enemy.sh" className="h-7 w-auto" />
                </div>
                <div className="hidden md:flex gap-3 items-center">
                    <p onClick={handleScrollToServices} className="hover:cursor-pointer">services</p>
                    <p onClick={handleScrollToContact} className="hover:cursor-pointer">contact</p>
                    <p onClick={() => window.open("https://github.com/enemy-sh", "_blank")} className="hover:cursor-pointer">
			<GitHubLogoIcon />
		    </p>
                    <p onClick={() => window.open("https://linkedin.com/in/ericjpolanco", "_blank")} className="hover:cursor-pointer">
		      <LinkedInLogoIcon />
		    </p>
                </div>
                <div className="md:hidden">
                    <div className="relative">
                        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                            <Menu className="h-5 w-5" />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-6 w-48 bg-white border rounded-sm px-2">
                                <div onClick={handleScrollToServices} className="block p-2 hover:bg-gray-100 hover:cursor-pointer">
                                    <span className="flex flex-row gap-2 items-center"><LightningBoltIcon />services</span>
                                </div>
                                <div onClick={handleScrollToContact} className="block border-t p-2 hover:bg-gray-100 hover:cursor-pointer">
                                    <span className="flex flex-row gap-2 items-center"><EnvelopeClosedIcon />contact</span>
                                </div>
                                <div onClick={() => window.open("https://github.com/enemy-sh", "_blank")} className="block border-t p-2 hover:bg-gray-100 hover:cursor-pointer">
                                    <span className="flex flex-row gap-2 items-center"><GitHubLogoIcon /> github</span>
                                </div>
                                <div onClick={() => window.open("https://linkedin.com/in/ericjpolanco", "_blank")} className="block border-t p-2 hover:bg-gray-100 hover:cursor-pointer">
                                    <span className="flex flex-row gap-2 items-center"><LinkedInLogoIcon /> linkedin</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
