import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
 // update path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brandBlue text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
      <img src="/logo4.png" alt="Certifa Logo" className="h-8" />

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-brandBlue font-semibold">
          <li>
            <a href="#hero" className="hover:text-blue-700 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#programs" className="hover:text-blue-700 transition-colors">
              Programs
            </a>
          </li>
          <li>
            <a href="#skills-kickstart" className="hover:text-blue-700 transition-colors">
              Free Guides
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-700 transition-colors">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center py-6 space-y-6 text-brandBlue font-semibold">
            <li>
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#programs"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#skills-kickstart"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Free Guides
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
