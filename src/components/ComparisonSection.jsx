import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f9cd05] to-[#fff5c2] overflow-hidden">
      {/* Animated / Decorative Shapes */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-blue-500 opacity-10 rounded-full animate-pulse-slow -translate-x-28 -translate-y-28"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-10 rounded-full animate-pulse-slow translate-x-28 translate-y-28"></div>
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-blue-300 opacity-5 rounded-full animate-ping-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brandBlue">
          Others vs Certifa
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch">
          {/* Others Card */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-red-500 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
            <h3 className="text-xl font-semibold mb-6 text-red-600 text-left md:text-left">
              What Others Do
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Sell <span className="font-bold">overpriced European/American certificates</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Promise <span className="font-bold">jobs or interviews</span> they can't deliver
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Provide <span className="font-bold">no real skill-building</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Focus on <span className="font-bold">hype, not substance</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Certifa Card */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-brandYellow transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 -mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-6 text-brandYellow text-left md:text-left">
              What Certifa Does
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Offers globally recognized <span className="font-bold text-brandBlue">Microsoft, AWS, Salesforce</span> certifications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Focuses on <span className="font-bold text-brandBlue">real skill-building</span> and career preparation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Supports students with <span className="font-bold text-brandBlue">exam fees, resume building, and interview prep</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandYellow mt-1" />
                <span className="text-gray-800 leading-relaxed">
                  Delivers knowledge that <span className="font-bold text-brandBlue">hiring managers value</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#certifications"
            className="inline-block bg-
