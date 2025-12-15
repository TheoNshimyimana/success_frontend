import React from "react";
import {
  FiPrinter,
  FiSmartphone,
  FiFileText,
  FiDatabase,
} from "react-icons/fi";

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
}

const services: ServiceItem[] = [
  {
    title: "Printing & Copying",
    description:
      "Professional printing, photocopying, scanning, and binding services.",
    features: ["High-quality output", "Fast turnaround", "Competitive pricing"],
    icon: <FiPrinter className="text-teal-700 text-2xl" />,
  },
  {
    title: "Mobile Money & Banking",
    description: "Secure mobile money transfers and agent banking services.",
    features: ["MTN Money", "Airtel Money", "Bank transfers"],
    icon: <FiSmartphone className="text-teal-700 text-2xl" />,
  },
  {
    title: "E-Government Services",
    description: "Irembo portal access and government service facilitation.",
    features: [
      "Irembo services",
      "Tax assistance (RRA)",
      "Document processing",
    ],
    icon: <FiFileText className="text-teal-700 text-2xl" />,
  },
  {
    title: "Data & Digital Services",
    description: "Data entry, analysis, and school fees recovery services.",
    features: ["Data entry", "Analysis", "Fee recovery"],
    icon: <FiDatabase className="text-teal-700 text-2xl" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Comprehensive solutions designed to meet all your digital and
          financial needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-50 p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <div className="bg-slate-200 p-3 rounded-lg">{service.icon}</div>
              <h3 className="font-bold text-xl mt-1">{service.title}</h3>
            </div>

            <p className="text-gray-600 mt-4">{service.description}</p>

            <ul className="mt-4 space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex text-sm items-center gap-2 text-gray-700">
                  <span className="text-teal-600 text-2xl">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
