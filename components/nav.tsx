import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-center items-center p-4 text-black absolute w-full top-0 z-50">
        <div className="flex items-center gap-4 w-5/6 justify-between">
            <div className="text-2xl font-bold">
                <p>0-a</p>
            </div>
            <div className="flex gap-5">
                <p>Services</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    </div>
  );
}