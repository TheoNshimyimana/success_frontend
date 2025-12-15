import React from "react";

const impactData = [
  { number: "5000+", label: "People Trained" },
  { number: "200+", label: "Startups Supported" },
  { number: "50+", label: "Communities Reached" },
  { number: "10+", label: "Years of Impact" },
];

const OurImpacts = () => {
  return (
    <section className="bg-[#f6f1f1] py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00485C] mb-2">
          Our Impact
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Making a real difference in communities across Rwanda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md py-6 px-4"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpacts;
