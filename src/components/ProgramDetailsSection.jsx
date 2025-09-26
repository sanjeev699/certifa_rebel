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

const brochurePdf = "/brochures/Certifa_DataAnalyticsPro_Brochure.pdf";
const excel_guide = "/brochures/The Ultimate Microsoft Excel Starter Kit_Certifa.pdf";
const database_guide = "/brochures/Fundamentals of Database Made Super Easy_Certifa.pdf";
const interview_guide = "/brochures/Interview Communication Mastery_ The Basics You Can’t Afford to Miss_Certifa.pdf";


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
            onClick={() => openModal("Data Analytics Pro Program- Power BI Certification Track", brochurePdf)}
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Download Brochure for the Complete Curriculum
          </button>
        </div>
      </div>

      {/* Free Guides Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-center text-brandBlue mb-8">
          Start with the Free Guides to Boost Your Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          <button
            onClick={() => openModal("The Ultimate Microsoft Excel Starter Kit", excel_guide)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-full"
          >
            The Ultimate Microsoft Excel Starter Kit
          </button>
          <button
            onClick={() => openModal("Fundamentals of Database Made Super Easy", database_guide)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-full"
          >
            Fundamentals of Database Made Super Easy
          </button>
          <button
            onClick={() => openModal("Interview Communication Mastery - The Basics You Can’t Afford to Miss!", interview_guide)}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg w-full"
          >
            Interview Communication Mastery - The Basics You Can’t Afford to Miss!
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
