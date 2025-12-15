import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  index: number;
}

const timeline: TimelineItem[] = [
  {
    year: "2015",
    title: "Foundation",
    description:
      "Success Tech Lab Ltd was established with a vision to bridge digital gaps in Rwanda.",
    index: 1,
  },
  {
    year: "2017",
    title: "TobiServe Hub Launch",
    description:
      "Launched the first TobiServe Hub as a one-stop ICT and financial services center.",
    index: 2,
  },
  {
    year: "2019",
    title: "Agerayo Initiative",
    description:
      "Started the Agerayo Initiative to empower youth through skills development and entrepreneurship.",
    index: 3,
  },
  {
    year: "2023",
    title: "Expansion",
    description:
      "Expanded services across multiple locations and partnered with major financial institutions.",
    index: 4,
  },
];

export default function OurJourney() {
  return (
    <div className="w-full flex flex-col bg-slate-50 items-center py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Journey</h2>
      <p className="text-center text-gray-600 max-w-xl mb-12">
        Key milestones in our mission to transform Rwanda's digital landscape.
      </p>

      <div className="w-full max-w-3xl space-y-12">
        {timeline.map((item) => (
          <div key={item.index} className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#0D7377] text-white flex items-center justify-center font-semibold">
                {item.index}
              </div>
              <div className="w-px h-full bg-gray-300 mt-2"></div>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">{item.year}</p>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700 max-w-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
