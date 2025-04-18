import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 bg-dots">
        <div className="flex flex-col items-center justify-center min-h-2.5">
            <div className="flex flex-col items-center text-xs justify-center w-5/6 h-1/2">
              <div className="flex flex-row items-center gap-2">
                  <img src="/enemy.svg" alt="enemy.sh" className="h-5" />
                  <div className="flex flex-col">
                    <span className="text-gray-700">© 2025 enemy.sh</span>
                    <span className="text-gray-700">all rights reserved.</span>
                  </div>
              </div>
            </div>
        </div>
    </footer>
  )
}
