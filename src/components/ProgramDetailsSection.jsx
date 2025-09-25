// src/components/ProgramDetailsSection.jsx
import React from "react";

// Import assets
import heroImg from "../Assets/program-hero1.jpg";
import excelLogo from "../Assets/excel.jpeg";
import powerBILogo from "../Assets/powerbi.jpeg";
import sqlLogo from "../Assets/sql.jpeg";
import pythonLogo from "../Assets/python.jpeg";

import impact1 from "../Assets/impact1.jpg";
import impact2 from "../Assets/impact2.jpg";
import impact3 from "../Assets/impact3.jpg";

import certificateImg from "../Assets/sample_cert.png";

const ProgramDetailsSection = () => {
  const topics = [
    { name: "Excel for Analytics", logo: excelLogo },
    { name: "Power BI Certification", logo: powerBILogo },
    { name: "SQL for Data Management", logo: sqlLogo },
    { name: "Python for Data Analysis", logo: pythonLogo },
  ];

  return (
    <section id="program-details" className="bg-brandYellow py-20">
      {/* Hero Image */}
      <div className="w-full mb-12">
        <img
          src={heroImg}
          alt="Data Analytics Pro Program"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Topics Covered */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-12">
          Topics Covered in the Program
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-items-center">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="w-32 h-32 bg-brandBlue text-white flex flex-col items-center justify-center transform rotate-45 hover:scale-105 transition duration-300 shadow-lg"
            >
              <img
                src={topic.logo}
                alt={topic.name}
                className="w-12 h-12 mb-2 transform -rotate-45"
              />
              <span className="font-semibold text-sm transform -rotate-45">
                {topic.name}
              </span>
            </div>
          ))}
        </div>

        {/* Download Brochure Button */}
        <div className="mt-12">
          <a
            href="/brochures/DataAnalyticsPro.pdf"
            download
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Download Brochure
          </a>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-12">
          Why Get Power BI Certified?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src={impact1} alt="Impact 1" className="rounded-lg shadow-md" />
          <img src={impact2} alt="Impact 2" className="rounded-lg shadow-md" />
          <img src={impact3} alt="Impact 3" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Certificate Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-8">
          Here’s the Certificate You Earn
        </h2>
        <img
          src={certificateImg}
          alt="Sample Power BI Certificate"
          className="w-full rounded-lg shadow-lg border"
        />
      </div>
    </section>
  );
};

export default ProgramDetailsSection;
