import React from "react";
import Hero from "../images/Bg.png";
import ServicesSection from "../components/ServiceTobi";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials ";
import RequestServiceForm from "../components/RequestForm";
import VisitUsToday from "../components/VisitUsToday";
import { FiCheckCircle } from "react-icons/fi";


const features = [
  "One-stop center for all your needs",
  "Professional and friendly staff",
  "Competitive pricing",
];

const TobiServeHub: React.FC = () => {
    return (
      <>
        <section className="py-8 px-10 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text section */}
            <div className="">
              <span className="inline-block bg-[#FFF7D8] text-teal-700 text-sm font-semibold px-4 py-2 rounded-full">
                Your One-Stop Service Center
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
                TobiServe Hub
              </h1>

              <h2 className="text-2xl text-rose-400 font-semibold mt-1">
                Smart ICT Service Center
              </h2>

              <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
                Your complete solution for printing, financial services,
                e-government access, and digital solutions. All in one
                convenient location with professional staff ready to assist you.
              </p>

              <ul className="mt-6 space-y-4">
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FiCheckCircle className="text-teal-600 text-lg" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right image section */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={Hero}
                alt="ICT Service Center Illustration"
                className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
              />
            </div>
          </div>
        </section>
        <ServicesSection />
        <RequestServiceForm />
        <Testimonials />
        <VisitUsToday />
        <Footer />
      </>
    );
};

export default TobiServeHub;
