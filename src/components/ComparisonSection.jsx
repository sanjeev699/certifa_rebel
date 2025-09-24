import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // install react-icons if not installed

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 bg-[#f9cd05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brandBlue">
          Others vs Certifa
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Others Card */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
            <h3 className="text-xl font-semibold mb-6 text-red-600 text-center">What Others Do</h3>
            <ul className="text-gray-800 space-y-4">
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3" />
                Sell overpriced European/American certificates
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3" />
                Promise jobs or interviews they can't deliver
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3" />
                Provide no real skill-building or career support
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="text-red-500 mr-3" />
                Focus on hype, not substance
              </li>
            </ul>
          </div>

          {/* Certifa Card */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md border-t-4 border-brandYellow">
            <h3 className="text-xl font-semibold mb-6 text-brandYellow text-center">What Certifa Does</h3>
            <ul className="text-gray-800 space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3" />
                Offers globally recognized certifications from Microsoft, AWS, Salesforce
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3" />
                Focuses on real skill-building and career preparation
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3" />
                Supports students with exam fees, resume building, and interview prep
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-brandYellow mr-3" />
                Delivers knowledge that hiring managers actually value
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
