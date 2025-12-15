import React from "react";
import MissionVisionValues from "../components/MissionVisionValues";
import OurTeam from "../components/OurTeam";
import JoinOurMission from "../components/JoinOurMission";
import Footer from "../components/Footer";

export default function AboutPageSections() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#00485C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            About Us
          </h1>
          <p className="max-w-2xl text-gray-200 text-sm md:text-base font-light leading-relaxed">
            Learn about our mission, vision, and the team dedicated to
            empowering Rwanda through digital innovation.
          </p>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00485C] mb-6">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-7 mb-4">
              Success Tech Lab Ltd is a leading Rwandan ICT solutions provider
              dedicated to empowering communities through digital innovation,
              equitable access to technology, and practical skills development.
            </p>

            <p className="text-gray-700 leading-7 mb-4">
              Founded with a vision to bridge the digital divide, we've been
              instrumental in transforming businesses, training thousands of
              individuals, and supporting the next generation of entrepreneurs
              across Rwanda.
            </p>

            <p className="text-gray-700  leading-7">
              Our commitment to excellence, innovation, and community impact
              drives everything we do, from our comprehensive ICT services to
              our youth-focused empowerment programs.
            </p>
          </div>

          {/* Years Card */}
          <div className="flex justify-center">
            <div className="w-full h-64 md:h-72 flex flex-col justify-center items-center rounded-2xl bg-green-100">
              <h3 className="text-4xl md:text-5xl font-semibold text-green-700">
                10
                <span className="text-4xl md:text-5xl font-medium text-green-700">
                  +
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">Years Serving Rwanda</p>
            </div>
          </div>
        </div>
      </section>
      <MissionVisionValues />
      <OurTeam />
      <JoinOurMission />
      <Footer />
    </>
  );
}
