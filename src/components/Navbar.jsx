import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center h-16">
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
          <img src="/logo4.png" alt="Certifa Logo" className="h-12 md:h-16" />
        </div>
      </div>

      {/* Dropdown Menu for both Desktop & Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-64 bg-white bg-opacity-95 shadow-lg border border-gray-200 rounded-r-lg p-4 space-y-4 z-50">
          <ul className="flex flex-col gap-4 text-brandBlue font-semibold">
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
