import React from "react";
import {
  Facebook,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Mail,

} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#00485C] text-white py-12 px-6 md:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white text-teal-800 font-bold px-2 py-2 rounded">
              ST
            </div>
            <h2 className="text-2xl font-bold leading-tight">
              Success Tech Lab
            </h2>
          </div>

          <p className="text-white/90 mb-4 leading-7 text-sm max-w-xs">
            Empowering communities through digital and financial inclusion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="bg-white/20 p-2 rounded-md hover:bg-white/30 cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="bg-white/20 p-2 rounded-md hover:bg-white/30 cursor-pointer">
              <Linkedin size={18} />
            </div>
            <div className="bg-white/20 p-2 rounded-md hover:bg-white/30 cursor-pointer">
              <MessageCircle size={18} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-6">
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/services">Services</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/training">Training</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/programs">Programs</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">contact</Link>{" "}
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>ICT Services</li>
            <li>Financial Services</li>
            <li>Training Programs</li>
            <li>E-Government</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Kigali, Rwanda
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +250782755830
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> contact@stlab.rw
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom border */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/80">
        <p>© 2025 Success Tech Lab Ltd. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
