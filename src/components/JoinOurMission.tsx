import React from "react";
import { ArrowRight } from "lucide-react";

export default function JoinOurMission() {
  return (
    <section className="w-full bg-[#00485C] text-white py-28 px-4 flex items-center justify-center text-center">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Mission
        </h2>

        <p className="text-teal-100 mb-10 leading-relaxed">
          Be part of Rwanda's digital transformation. Let's work together to
          empower communities and create lasting impact.
        </p>

        <button className="inline-flex items-center gap-2 bg-white text-teal-900 font-medium py-3 px-8 rounded-xl shadow-md hover:bg-gray-100 transition-all">
          Get in Touch <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
