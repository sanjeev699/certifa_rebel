import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9cd05] via-[#fff8c2] to-[#fff5c2] z-0"></div>

      {/* Floating/Abstract Shapes */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-300 opacity-10 rounded-full rotate-12 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-blue-400 opacity-5 rounded-full -rotate-6 animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-200 opacity-8 rounded-full rotate-45 animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-6 rounded-full -rotate-12 animate-ping-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brandBlue">
          Others vs Certifa
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Others Card */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-xl border-t-4 border-red-500 
            shadow-[0_20px_40px_rgba(255,0,0,0.15)] shadow-[0_10px_20px_rgba(0,0,0,0.05)] 
            transform -rotate-1 hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(255,0,0,0.25)] hover:-translate-y-2 
            transition-all duration-500 z-10">
            <h3 className="text-xl font-semibold mb-6 text-red-600 text-left">
              What Others Do
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Sell <span className="font-bold">overpriced European/American/Domestic universities useless certificates</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Promise <span className="font-bold">jobs or interviews</span> they can't deliver
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Provide <span className="font-bold">no real skill-building</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Focus on <span className="font-bold">hype, not substance</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Certifa Card */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-xl border-t-4 border-brandYellow 
            shadow-[0_20px_40px_rgba(249,205,5,0.25)] shadow-[0_10px_20px_rgba(0,0,0,0.05)] 
            transform rotate-1 hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(249,205,5,0.3)] hover:-translate-y-2 
            transition-all duration-500 z-20 -mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-6 text-brandYellow text-left">
              What Certifa Does
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  We train you to crack globally recognized certifications from <span className="font-bold text-brandBlue">Microsoft, AWS, Salesforce, PMI etc </span> - which proves real skills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Focuses on <span className="font-bold text-brandBlue">real skill-building</span> and career preparation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  No False Promises, rather supports students with <span className="font-bold text-brandBlue">Resume Building and Interview prep</span>
                </span> 
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow flex-shrink-0 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Delivers knowledge that <span className="font-bold text-brandBlue">Hiring managers value</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#certifications"
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Explore Certifications
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
