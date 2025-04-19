import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
   <footer className="border-t border-white/20 bg-black text-white backdrop-blur-md items-center flex flex-col">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-lg font-semibold flex items-center gap-1">
	      <img src="enemy-white.svg" alt="enemy.sh logo" className="h-4"/>
              <span className="text-sm">enemy.sh</span>
            </Link>
            <p className="text-sm text-muted-foreground">deploy your enemy.</p>
          </div>
          <nav className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-black transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-black transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-black transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
         </nav>
        </div>
        <div className="border-t border-white/20 py-6 w-full max-w-7xl">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 enemy.sh. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-black transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-black transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
