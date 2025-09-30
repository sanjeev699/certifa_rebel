import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../Assets/logo.png"; // ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["home", "courses", "about", "contact", "faq"];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto cursor-pointer" // increased size
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-slide-down">
          <div className="flex flex-col py-4 px-6 space-y-3">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
