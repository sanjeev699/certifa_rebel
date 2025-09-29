import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import microsoftLogo from "../Assets/microsoft.png";
import awsLogo from "../Assets/aws.png";
import salesforceLogo from "../Assets/salesf1.png";
import pmiLogo from "../Assets/PMI-Logo.png";

const CertificationsSection = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-6">
          Get Certified. Get Hired. Get Ahead.
        </h2>
        <p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
          Double your job opportunities and unlock higher salaries with globally
          trusted certifications. Your skills are <span className="font-bold">proven and recognized</span>
          across industries.
        </p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Logos */}
          <div className="flex-1">
            <h3 className="text-center md:text-left font-semibold text-gray-600 mb-4">
              Trusted By
            </h3>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              <img
                src={microsoftLogo}
                alt="Microsoft Certification"
                className="w-28 h-28 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img
                src={awsLogo}
                alt="AWS Certification"
                className="w-28 h-28 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img
                src={salesforceLogo}
                alt="Salesforce Certification"
                className="w-28 h-28 object-contain hover:scale-105 transition-transform duration-300"
              />
              <img
                src={pmiLogo}
                alt="PMI Certification"
                className="w-28 h-28 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Impact List */}
          <div className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Job opportunities become <span className="font-bold text-brandBlue">2× higher</span> with recognized certifications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Certified professionals earn <span className="font-bold text-brandBlue">25–40% higher salaries</span>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  <span className="font-bold text-brandBlue">92% of employers</span> say certifications improve candidate credibility.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Stand out in interviews with <span className="font-bold">proven, practical skills</span>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Get complete support — <span className="font-bold">training, exam prep, and career guidance</span> from Certifa.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#programs"
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Start Your Certification Journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
