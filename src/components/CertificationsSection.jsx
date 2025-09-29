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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-2">
          Why Get a Globally Recognized Certification?
        </h2>
        <p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
          Your skills aren’t just learned — with Certification they’re{" "}
          <span className="font-bold text-brandBlue">proven, validated, and valued</span> across industries.
        </p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Logos */}
          <div className="flex-1 flex justify-center md:justify-start gap-6 flex-wrap">
            <img
              src={microsoftLogo}
              alt="Microsoft Certification"
              className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
            />
            <img
              src={awsLogo}
              alt="AWS Certification"
              className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
            />
            <img
              src={salesforceLogo}
              alt="Salesforce Certification"
              className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
            />
            <img
              src={pmiLogo}
              alt="PMI Certification"
              className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Advantages List */}
          <div className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Job opportunities become{" "}
                  <span className="font-bold text-brandBlue">2x higher</span> after recognized certification.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Your skills are{" "}
                  <span className="font-bold text-brandBlue">proven and validated</span> across industries.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Certified professionals earn{" "}
                  <span className="font-bold text-brandBlue">20–30% higher salaries</span> on average.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  You’ll <span className="font-bold text-brandBlue">stand out in interviews</span> with credentials recruiters recognize instantly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-brandBlue mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  Backed by{" "}
                  <span className="font-bold text-brandBlue">training, exam prep, and career guidance</span> from Certifa.
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
            Explore Certification Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
