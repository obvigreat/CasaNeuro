import React from "react";

interface MetricsBarProps {
  metrics?: {
    value: string;
    label: string;
  }[];
}

export default function MetricsBar({
  metrics = [
    { value: "100%", label: "Process Coverage" },
    { value: "24/7", label: "Uptime & Support" },
    { value: "∞", label: "Scalability" },
  ],
}: MetricsBarProps) {
  return (
    <section className="w-full bg-background py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full md:w-1/3"
            >
              <span className="text-[#00FFC2] text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {metric.value}
              </span>
              <span className="text-muted-foreground text-sm md:text-base">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
