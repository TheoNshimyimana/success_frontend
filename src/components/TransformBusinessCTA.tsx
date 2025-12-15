import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TransformBusinessCTA() {
  return (
    <section className="w-full bg-[#00485C] text-white py-24 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Transform Your Business?
      </h2>

      <p className="text-teal-100 max-w-2xl text-lg mb-10">
        Get in touch with our team today and discover how we can help you
        succeed in the digital age.
      </p>

      <Link to="/contact" className="bg-white text-teal-900 hover:bg-gray-200 font-medium py-3 px-8 rounded-xl flex items-center gap-2 shadow-md transition-all">
        Contact Us Now <ArrowRight size={18} />
      </Link>
    </section>
  );
}
