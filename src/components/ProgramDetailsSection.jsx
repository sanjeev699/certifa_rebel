// src/components/ProgramDetailsSection.jsx
import React, { useState } from "react";
import LeadFormModal from "./LeadFormModal";

// Import your assets
import heroImg from "../Assets/program-hero3.jpg";
import excelLogo from "../Assets/excel.png";
import powerBILogo from "../Assets/powerbi.png";
import sqlLogo from "../Assets/database.png";
import pythonLogo from "../Assets/python.png";

//import impact1 from "../Assets/impact1.jpg";
//import impact2 from "../Assets/impact2.jpg";
//import impact3 from "../Assets/impact3.jpg";

import certificateImg from "../Assets/sample_cert1.png";

import brochurePdf from "../brochures/DataAnalyticsPro.pdf";
import guide1Pdf from "../brochures/PowerBIGuide.pdf";
import guide2Pdf from "../brochures/ExcelGuide.pdf";
import guide3Pdf from "../brochures/PythonGuide.pdf";

const ProgramDetailsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDownload, setCurrentDownload] = useState({ guideName: "", guideFile: "" });

  const openModal = (guideName, guideFile) => {
    setCurrentDownload({ guideName, guideFile });
    setIsModalOpen(true);
  };

  return (
    <section id="program-details" className="bg-white py-20">
      {/* Hero Image */}
      <div className="w-full mb-16">
        <img src={heroImg} alt="Data Analytics Pro Program" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {/* Skills Covered */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-center text-brandBlue mb-12">
          Skills Covered in the Program
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {[{logo: excelLogo, title: "Excel for Analytics"},
            {logo: powerBILogo, title: "Power BI Certification"},
            {logo: sqlLogo, title: "SQL for Data Management"},
            {logo: pythonLogo, title: "Python for Data Analysis"}].map((topic, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <img src={topic.logo} alt={topic.title} className="h-16 mb-4" />
              <h3 className="text-gray-800 font-semibold text-lg text-center">{topic.title}</h3>
            </div>
          ))}
        </div>

        {/* Download Brochure Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => openModal("Data Analytics Pro Brochure", brochurePdf)}
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Request a Brochure for the Complete Curriculum
          </button>
        </div>
      </div>

      {/* Free Guides Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-center text-brandBlue mb-8">
          Free Guides to Boost Your Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          <button
            onClick={() => openModal("Power BI Beginner Guide", guide1Pdf)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-full"
          >
            Power BI Beginner Guide
          </button>
          <button
            onClick={() => openModal("Excel Formulas Guide", guide2Pdf)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-full"
          >
            Excel Formulas Guide
          </button>
          <button
            onClick={() => openModal("Python Data Analysis Guide", guide3Pdf)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-full"
          >
            Python Data Analysis Guide
          </button>
        </div>
      </div>

      {/* Impact Section 
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-center text-brandBlue mb-12">
          Why Microsoft Power BI Certification is a must.. Check facts below
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src={impact1} alt="Impact 1" className="rounded-lg shadow-md" />
          <img src={impact2} alt="Impact 2" className="rounded-lg shadow-md" />
          <img src={impact3} alt="Impact 3" className="rounded-lg shadow-md" />
        </div>
      </div> */}

      {/* Certificate Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-20 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-brandBlue mb-8">
          Here’s a Sample Microsoft Power BI Certificate
        </h2>
        <img src={certificateImg} alt="Sample Power BI Certificate" className="w-full rounded-lg shadow-lg border" />
      </div>

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        guideName={currentDownload.guideName}
        guideFile={currentDownload.guideFile}
      />
    </section>
  );
};

export default ProgramDetailsSection;
