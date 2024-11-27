"use client"

import React from "react";
import{ useState } from "react";


import { Menu } from "lucide-react";



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
        <div className="flex justify-center items-center p-4 px-5 sm:px-4 text-black absolute w-full top-0 z-50">
            <div className="flex items-center gap-4 sm:w-5/6 w-full justify-between">
                <div className="text-3xl font-normal">
                    <img src="/enemy.sh.svg" alt="enemy.sh" className="h-9" />
                </div>
                <div className="hidden md:flex gap-5">
                    <p onClick={handleScrollToServices} className="hover:cursor-pointer">services</p>
                    <p onClick={() => window.open("https://github.com/enemy-sh", "_blank")} className="hover:cursor-pointer">github</p>
                    <p onClick={handleScrollToContact} className="hover:cursor-pointer">contact</p>
                </div>
                <div className="md:hidden">
                    <div className="relative">
                        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                            <Menu className="h-5 w-5" />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                <div onClick={handleScrollToServices} className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
                                    services
                                </div>
                                <div onClick={() => window.open("https://github.com/enemy-sh", "_blank")} className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
                                    github
                                </div>
                                <div onClick={handleScrollToContact} className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
                                    contact
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}