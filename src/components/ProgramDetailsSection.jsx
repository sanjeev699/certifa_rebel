import React, { useState } from "react";
import LeadFormModal from "./LeadFormModal";

import heroImg from "../Assets/program-hero3.jpg";
import excelLogo from "../Assets/excel.png";
import powerBILogo from "../Assets/powerbi.png";
import sqlLogo from "../Assets/database.png";
import pythonLogo from "../Assets/python.png";
import certificateImg from "../Assets/sample_cert1.png";

// Assets
import excelThumb from "../Assets/excel_thumb.png";
import dbThumb from "../Assets/db_thumb.png";
import interviewThumb from "../Assets/interview_thumb.png";

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

        // Guides Data
const guides = [
  { title: "The Ultimate Microsoft Excel Starter Kit", file: excel_guide, thumbnail: excelThumb, worth: 8000 },
  { title: "Fundamentals of Database Made Super Easy", file: database_guide, thumbnail: dbThumb, worth: 5000 },
  { title: "Interview Communication Mastery", file: interview_guide, thumbnail: interviewThumb, worth: 5000 },
];

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
            <div key={idx} className="bg-white rounded-lg p-6 flex flex-col items-center">
              <img src={topic.logo} alt={topic.title} className="h-16 mb-4" />
              <h3 className="text-gray-800 font-semibold text-lg text-center">{topic.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 mb-2">
  Want to explore the curriculum in detail? <br />
  Grab your brochure below 👇
</p>

        
        {/* Download Brochure Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => openModal("Data Analytics Pro Program- Power BI Certification Track", brochurePdf)}
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Download Brochure
          </button>
        </div>
      </div>



{/* Free Guides Section */}
{/* Free Guides Section */}
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
  <h2 className="text-xl md:text-2xl font-bold text-center text-brandBlue mb-4">
    Kickstart your upskilling with our 
    <span className="text-brandBlue"> ‘Skills Kickstart Series’</span>
  </h2>
  <p className="text-center text-gray-700 mb-8">
    Worth <span className="font-bold text-green-600">₹18,000</span>, 
    <span className="font-bold text-green-600"> absolutely FREE!</span> 🚀<br />
    Download these mini-courses and begin your learning journey today.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {guides.map((guide, idx) => (
  <div
    key={idx}
    className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col"
  >
    {/* Worth Ribbon */}
    <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-br-md z-10">
      Worth ₹{guide.worth}
    </div>

    {/* Thumbnail */}
    <img
      src={guide.thumbnail}
      alt={guide.title}
      className="h-40 w-full object-cover"
    />

    {/* Title */}
    <div className="p-4 text-center">
  <h3 className="text-gray-800 font-semibold text-lg mb-2">
    {guide.title}
  </h3>
</div>

    {/* Button */}
    <button
      onClick={() => openModal(guide.title, guide.file)}
      className="bg-brandBlue hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded-md transition duration-300"
    >
      Free Download
    </button>
  </div>
))}

  </div>
</div>


      {/* Certificate */}
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
