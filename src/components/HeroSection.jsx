import React from "react";
import heroImage from "../hero4.jpg"; // Adjust path if needed

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brandYellow mb-6">
          No Fake Prestige. Only Real Credentials.
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8">
          Certifa gives you <span className="font-semibold">global certifications</span> and 
          <span className="font-semibold"> hands-on skills</span> that hiring managers actually respect.
        </p>
        <a
          href="#brochure"
          className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
        >
          Get Started!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
