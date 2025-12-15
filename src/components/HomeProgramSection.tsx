import React from "react";
import { ArrowRight } from "lucide-react";

export default function HomeProgramSection() {
  const items = [
    {
      title: "YES Program",
      desc: "Youth Entrepreneurship & Startup Program",
      link: "Learn More",
      icon: "📈",
    },
    {
      title: "Digital Accelerators",
      desc: "Rwanda Network for business growth and innovation",
      link: "Explore",
      icon: "🎖️",
    },
    {
      title: "Agereyo Initiative",
      desc: "Digital literacy and community upliftment programs",
      link: "Join Us",
      icon: "👥",
    },
    {
      title: "SmartTrade",
      desc: "myAgereyo App for digital commerce and trading",
      link: "Get Started",
      icon: "💻",
    },
  ];

  return (
    <section className="w-full bg-[#F7F0F3] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
          Our Programs
        </h2>
        <p className="text-gray-600 mt-3">
          Innovation, youth empowerment, and community impact initiatives.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-green-100 text-green-700 flex items-center justify-center rounded-lg text-2xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg text-teal-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

              <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mt-5">
                {item.link} <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
