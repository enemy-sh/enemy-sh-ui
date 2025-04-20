"use client";

import React, { useLayoutEffect, useRef, useState } from "react";

const painPointsRows = [
  {
    items: [
      "integration issues",
      "deployment delays",
      "inconsistent environments",
      "manual processes",
      "scalability challenges",
      "security vulnerabilities",
      "lack of automation",
      "testing bottlenecks",
      "configuration drift",
      "slow feedback loops",
    ],
    speed: 30,    
    reverse: true,
  },
  {
    items: [
      "insufficient monitoring",
      "limited collaboration",
      "fragmented toolchain",
      "poor documentation",
      "downtime issues",
      "redundant tasks",
      "limited scalability",
      "high operational costs",
      "change management woes",
      "resource wastage",
    ],
    speed: 25,
    reverse: false,
  },
  {
    items: [
      "inconsistent deployments",
      "time-consuming reviews",
      "lack of standardization",
      "miscommunication",
      "technical debt",
      "complex architectures",
      "unsatisfactory user experience",
      "insufficient data analytics",
      "inadequate testing coverage",
      "delayed releases",
    ],
    speed: 35,
    reverse: true,
  },
  {
    items: [
      "knowledge silos",
      "compliance issues",
      "dependency management",
      "version control conflicts",
      "infrastructure costs",
      "maintenance overhead",
      "poor error handling",
      "performance bottlenecks",
      "legacy system integration",
      "deployment failures",
    ],
    speed: 28,
    reverse: false,
  },
];

const painPointClass = "px-1 text-xs sm:text-sm text-center text-red-500 font-medium";

function MarqueeRow({
  items,
  speed,
  reverse,
}: {
  items: string[];
  speed: number;
  reverse: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const fullWidth = trackRef.current.scrollWidth;
    setDuration((fullWidth / 2) / speed);
  }, [items, speed]);

  const displayItems = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `${
            reverse ? "marqueeReverse" : "marquee"
          } ${duration}s linear infinite`,
        }}
      >
        {displayItems.map((text, i) => (
          <div key={i} className={painPointClass}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfoSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full max-w-7xl space-y-1 p-4 border bg-black rounded-md mb-4">
          {painPointsRows.map((row, idx) => (
            <MarqueeRow
              key={idx}
              items={row.items}
              speed={row.speed}
              reverse={row.reverse}
            />
          ))}

          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black rounded-md to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black rounded-md to-transparent pointer-events-none" />
        </div>

        <p className="text-xs text-black opacity-30">
          (your enemies are our enemies)
        </p>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

