import React from "react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "Accessible & Affordable",
      description:
        "Quality services designed to be accessible to everyone, regardless of their financial situation.",
    },
    {
      number: 2,
      title: "Professional Team",
      description:
        "Experienced professionals dedicated to providing excellent service and support.",
    },
    {
      number: 3,
      title: "Community Focused",
      description:
        "We prioritize community impact and sustainable development over profit maximization.",
    },
    {
      number: 4,
      title: "Comprehensive Solutions",
      description:
        "One-stop center for all your ICT and financial service needs.",
    },
    {
      number: 5,
      title: "Trusted Partnerships",
      description:
        "Strategic partnerships with banks, telecom companies, and government agencies.",
    },
    {
      number: 6,
      title: "Continuous Innovation",
      description:
        "Always evolving to meet the changing needs of our communities.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Choose Success Tech Lab?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item) => (
            <div
              key={item.number}
              className="bg-slate-50 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              {/* Number badge */}
              <div className="flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-teal-700 font-bold text-2xl mb-4">
                  {item.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
