import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Program Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-brandBlue mb-6">
          Data Analytics Pro Package
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Microsoft Power BI Certification Track – Gain real skills, global recognition, and career-ready expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-brandYellow text-brandBlue font-bold py-3 px-6 rounded-md shadow hover:shadow-lg transition duration-300"
          >
            Download Brochure
          </a>

          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brandBlue text-white font-bold py-3 px-6 rounded-md shadow hover:shadow-lg transition duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Optional: Background shapes for design */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-brandYellow opacity-20 rounded-full -translate-x-20 -translate-y-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-brandBlue opacity-10 rounded-full translate-x-20 translate-y-20 animate-ping-slow"></div>
    </section>
  );
};

export default HeroSection;
