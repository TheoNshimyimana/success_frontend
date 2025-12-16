import React from "react";
import BgHero from "../images/heroo.png";
import { ArrowRight } from "lucide-react";
import HomeServiceSection from "../components/HomeServiceSection";
import HomeProgramSection from "../components/HomeProgramSection";
import HomeAboutSection from "../components/HomeAboutSection";
import Testimonials from "../components/Testimonials ";
import TransformBusinessCTA from "../components/TransformBusinessCTA";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        className="w-full h-[80vh] bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage: `url(${BgHero})`,
          backgroundSize: "100%", // 👈 zoom OUT while still covering
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-16 max-w-5xl">
          <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
            Empowering Communities Through ICT, Digital Skills & Innovation
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-3xl">
            Success Tech Lab Ltd delivers smart ICT services, digital training,
            and youth innovation programs for a digitally ready Rwanda.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-10">
            <Link
              to="/services"
              className="bg-green-600 hover:bg-green-700 font-semibold text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>

            <button className="border border-white text-white px-6 py-3 font-semibold rounded-xl hover:bg-white hover:text-black transition">
              Get Support
            </button>
          </div>
        </div>
      </div>
      <HomeServiceSection />
      <HomeProgramSection />
      <HomeAboutSection />
      <Testimonials />
      <TransformBusinessCTA />
      <Footer />
    </>
  );
}
