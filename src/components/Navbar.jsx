import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo4.jpg"; // Update path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "Programs", href: "#programs" },
    { name: "Free Guides", href: "#skills-kickstart" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brandBlue text-2xl md:hidden focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <img src={logo} alt="Certifa Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-brandBlue font-semibold relative">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <a href={item.href} className="hover:text-blue-700 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 bg-white shadow-lg rounded-r-lg w-64">
          <ul className="flex flex-col py-6 space-y-4 text-brandBlue font-semibold px-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-700 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
