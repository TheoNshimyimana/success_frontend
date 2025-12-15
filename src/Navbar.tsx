import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-3 px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-xl font-bold text-lg">
            ST
          </div>
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-[#00485C]">
              Success Tech Lab Ltd
            </h1>
            <p className="text-sm text-gray-500">Digital Empowerment</p>
          </div>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/tobiserve">TobiServe Hub</Link>
          <Link to="/training">Training</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services" className="bg-green-700 hover:bg-green-800 text-white rounded-md px-5 py-2 shadow-md after:hover:bg-green-800">
            Request Service
          </Link>
        </nav>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 py-4 px-6 text-gray-700 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/tobiserve" onClick={() => setIsOpen(false)}>
              TobiServe Hub
            </Link>
            <Link to="/training" onClick={() => setIsOpen(false)}>
              Training
            </Link>
            <Link to="/programs" onClick={() => setIsOpen(false)}>
              Programs
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <button className="bg-green-700 hover:bg-green-800 text-white rounded-md px-5 py-2 shadow-md mt-2">
              Request Service
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
