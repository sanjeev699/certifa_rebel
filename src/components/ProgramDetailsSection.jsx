// src/components/ProgramDetailsSection.jsx

import React from "react";

// Import your assets
import heroImg from "../Assets/program-hero3.jpg";
import excelLogo from "../Assets/excel.jpeg";
import powerBILogo from "../Assets/powerbi.jpeg";
import sqlLogo from "../Assets/sql.jpeg";
import pythonLogo from "../Assets/python.jpeg";

import impact1 from "../Assets/impact1.jpg";
import impact2 from "../Assets/impact2.jpg";
import impact3 from "../Assets/impact3.jpg";

import certificateImg from "../Assets/sample_cert.png";

const ProgramDetailsSection = () => {
  return (
    <section id="program-details" className="bg-white py-20">
      {/* Hero Image */}
      <div className="w-full mb-16">
        <img
          src={heroImg}
          alt="Data Analytics Pro Program"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Topics Covered */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-12">
          Topics Covered in the Program
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* Excel */}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <img src={excelLogo} alt="Excel" className="h-16 mb-4" />
            <h3 className="text-gray-800 font-semibold text-lg text-center">
              Excel for Analytics
            </h3>
          </div>

          {/* Power BI */}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <img src={powerBILogo} alt="Power BI" className="h-16 mb-4" />
            <h3 className="text-gray-800 font-semibold text-lg text-center">
              Power BI Certification
            </h3>
          </div>

          {/* SQL */}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <img src={sqlLogo} alt="SQL" className="h-16 mb-4" />
            <h3 className="text-gray-800 font-semibold text-lg text-center">
              SQL for Data Management
            </h3>
          </div>

          {/* Python */}
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <img src={pythonLogo} alt="Python" className="h-16 mb-4" />
            <h3 className="text-gray-800 font-semibold text-lg text-center">
              Python for Data Analysis
            </h3>
          </div>
        </div>

        {/* Download Brochure Button */}
        <div className="text-center mt
