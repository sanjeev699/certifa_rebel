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
          <img src="/logo4.jpg" alt="Certifa Logo" className="h-12 md:h-16" />
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
                href="#problem"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Why is Certifa a rebel?
              </a>
            </li>
            <li>
              <a
                href="#comparison"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                How's Certifa different than others?
              </a>
            </li>
            <li>
              <a
                href="#whycert"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Why get Global Certifications?
              </a>
            </li>
            <li>
               <a
                href="#programs"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                Programs we offer
              </a>
            </li>
            <li>
             <a
             href="#program-details"
             onClick={() => setIsOpen(false)}
             className="hover:text-blue-700 transition-colors"
             >
                Flag ship program - Data Analyst Pro Package(PL-300 certification)
              </a>
            </li>
            <li>
              <a
                href="#skills-kickstart"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                ₹18,000 worth Courses for Free - Start learning now!
              </a>
            </li>
            <li>
              <a
                href="#Faq"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 transition-colors"
              >
                FAQs
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
