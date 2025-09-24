import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f9cd05] to-[#fff5c2] overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full animate-pulse-slow -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full animate-pulse-slow translate-x-20 translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brandBlue">
          Others vs Certifa
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Others Card */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-500 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
            <h3 className="text-xl font-semibold mb-6 text-red-600 text-center">
              What Others Do
            </h3>
            <ul className="text-gray-800 space-y-4">
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3 transform hover:scale-125 transition-transform duration-300" />
                Sell <span className="font-bold">overpriced certificates</span>
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3 transform hover:scale-125 transition-transform duration-300" />
                Promise <span className="font-bold">jobs or interviews</span> they can't deliver
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3 transform hover:scale-125 transition-transform duration-300" />
                Provide <span className="font-bold">no real skill-building</span>
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3 transform hover:scale-125 transition-transform duration-300" />
                Focus on <span className="font-bold">hype, not substance</span>
              </li>
            </ul>
          </div>

          {/* Certifa Card */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-brandYellow transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 -mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-6 text-brandYellow text-center">
              What Certifa Does
            </h3>
            <ul className="text-gray-800 space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3 transform hover:scale-125 transition-transform duration-300" />
                Offers globally recognized <span className="font-bold text-brandBlue">Microsoft, AWS, Salesforce</span> certifications
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3 transform hover:scale-125 transition-transform duration-300" />
                Focuses on <span className="font-bold text-brandBlue">real skill-building</span> and career preparation
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3 transform hover:scale-125 transition-transform duration-300" />
                Supports students with <span className="font-bold text-brandBlue">exam fees, resume building, and interview prep</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3 transform hover:scale-125 transition-transform duration-300" />
                Delivers knowledge that <span className="font-bold text-brandBlue">hiring managers value</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
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
