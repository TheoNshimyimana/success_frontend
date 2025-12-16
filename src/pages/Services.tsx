import React, { JSX } from "react";
import {
  HiOutlinePrinter,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
} from "react-icons/hi";
import TrainingProgram from "../components/TrainingProgram";
import Footer from "../components/Footer";
import OtherInitiatives from "../components/OtherInitiatives";
import CoursesProgress from "../components/CousesProgress";
import WhyChooseUs from "../components/WhyChooseUs";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: "Printing & Copying",
    description:
      "Professional printing, photocopying, scanning, and binding services for all your document needs.",
    icon: <HiOutlinePrinter className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Mobile Money & Banking",
    description:
      "Secure mobile money transfers, agent banking services, and financial transactions.",
    icon: <HiOutlineDeviceMobile className="w-6 h-6 text-green-600" />,
  },
  {
    title: "E-Government Services",
    description:
      "Irembo portal access, tax assistance (RRA), and government service facilitation.",
    icon: <HiOutlineGlobeAlt className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Data Entry & Analysis",
    description:
      "Professional data entry, analysis, and school fees recovery services.",
    icon: <HiOutlineChartBar className="w-6 h-6 text-green-600" />,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          TobiServe Hub – ICT & Financial Services
        </h2>

        <p className="text-gray-600 mb-10">
          Your one-stop center for comprehensive digital and financial
          solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow hover:scale-105 transition flex flex-col"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-base flex-grow">
                {service.description}
              </p>

              {/* Request link */}
              <Link to="/contact" className="mt-4 text-green-600 font-semibold  flex items-center gap-1 hover:underline">
                Request Service
              </Link>
            </div>
          ))}
        </div>
      </section>
      <TrainingProgram />
      <OtherInitiatives />
      <CoursesProgress />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Services;
