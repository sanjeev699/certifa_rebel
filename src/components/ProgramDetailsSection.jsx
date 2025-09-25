// src/components/ProgramDetailsSection.jsx

import React from "react";

// Import your assets
import heroImg from "../Assets/program-hero1.jpg";
import excelLogo from "../Assets/excel.jpeg";
import powerBILogo from "../Assets/powerbi.jpeg";
import sqlLogo from "../Assets/sql.jpeg";
import pythonLogo from "../Assets/python.jpeg";

import impact1 from "../Assets/impact1.jpg";
import impact2 from "../Assets/impact2.jpg";
import impact3 from "../Assets/impact3.jpg";

import certificateImg from "../Assets/sample_cert.png"; // <- Add your certificate image here

const ProgramDetailsSection = () => {
  return (
    <section id="program-details" className="bg-white py-20">
      {/* Hero Image */}
      <div className="w-full mb-12">
        <img
          src={heroImg}
          alt="Data Analytics Pro Program"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Topics Covered */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-12">
          Topics Covered in the Program
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src={excelLogo} alt="Excel" className="h-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Excel for Analytics</h3>
            <p className="text-sm text-gray-600 mt-2">
              Master formulas, charts & pivot tables
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src={powerBILogo} alt="Power BI" className="h-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Power BI Certification</h3>
            <p className="text-sm text-gray-600 mt-2">
              Build dashboards & crack Microsoft certification
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src={sqlLogo} alt="SQL" className="h-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">SQL for Data Management</h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn queries, joins & database management
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img src={pythonLogo} alt="Python" className="h-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Python for Data Analysis</h3>
            <p className="text-sm text-gray-600 mt-2">
              Analyze & visualize data with Python
            </p>
          </div>
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

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Get the full syllabus & career impact report
        </h3>
        <a
          href="/brochures/DataAnalyticsPro.pdf"
          download
          className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;
