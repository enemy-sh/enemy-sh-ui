import React from "react";



export default function Nav() {
  return (
    <div className="flex justify-center items-center p-4 text-black absolute w-full top-0 z-50">
        <div className="flex items-center gap-4 w-5/6 justify-between">
            <div className="text-3xl font-normal">
                <img src="/enemy.sh.svg" alt="enemy.sh" className="h-10" />
            </div>
            <div className="flex gap-5">
                <p>services</p>
                <p>about</p>
                <p>contact</p>
            </div>
        </div>
    </div>
  );
}