import React from "react";
import { Link } from "react-router-dom";

export default function VisitUsToday() {
  return (
    <section className="w-full bg-[#0D7377] text-white  py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Visit Us Today
      </h2>
      <p className="text-center text-teal-100 max-w-2xl mb-12">
        Experience the convenience of having all your digital and financial
        services in one place.
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-10">
        {/* Hours */}
        <div className="bg-[#268185] rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Hours</h3>
          <div className="text-sm">
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#268185] rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <div className="text-sm">
            <p>Phone: +250 788 000 000</p>
            <p>Email: info@stlab.rw</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link to="/contact" className="bg-white text-teal-800 font-medium py-2 px-4 text-sm rounded-lg cursor-pointer shadow-md hover:bg-gray-100 transition-all">
        Get Directions
      </Link>
    </section>
  );
}
