import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
            About Success Tech Lab
          </h2>

          <p className="text-gray-500 leading-relaxed mb-4">
            Success Tech Lab Ltd is a leading Rwandan ICT solutions provider
            dedicated to empowering communities through digital innovation and
            skills development.
          </p>

          <p className="text-gray-500 leading-relaxed mb-8">
            We provide reliable digital services, comprehensive training
            programs, and youth-focused innovation initiatives that drive
            digital transformation across Rwanda.
          </p>

          <Link to="/about">
            <button className="px-6 py-3 flex font-semibold items-center gap-2 bg-[#2B8724] cursor-pointer hover:bg-green-900 text-white rounded-md shadow transition-all">
              Learn More About Us <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* Right Gradient Box */}
        <div className="flex justify-center">
          <div
            className="w-full h-64 md:h-72 flex flex-col justify-center items-center rounded-2xl shadow-sm 
            bg-gradient-to-br from-green-100 via-gray-100 to-gray-200"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-green-700">
              10+
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
