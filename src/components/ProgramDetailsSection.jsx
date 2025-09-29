import React, { useState } from "react";
import LeadFormModal from "./LeadFormModal";

import heroImg from "../Assets/Data Analyst Pro Package (3).png";
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

  const guides = [
    { title: "The Ultimate Microsoft Excel Starter Kit", file: excel_guide, thumbnail: excelThumb, worth: 8000 },
    { title: "Fundamentals of Database Made Super Easy", file: database_guide, thumbnail: dbThumb, worth: 5000 },
    { title: "Interview Communication Mastery", file: interview_guide, thumbnail: interviewThumb, worth: 5000 },
  ];

  return (
    <section id="program-details" className="bg-white py-16 md:py-20">
      
      {/* Hero Image */}
      <div className="w-full mb-12 md:mb-16">
        <img src={heroImg} alt="Data Analytics Pro Program" className="w-full h-auto rounded-lg shadow-md" />
      </div>

     {/* USP Section */}
<div className="max-w-6xl mx-auto px-6 md:px-12 mt-6 text-center" style={{ fontFamily: 'inherit' }}>
  <h2 className="text-2xl md:text-3xl font-bold text-brandBlue mb-6">
    What Makes <span className="text-brandBlue">Our Program Unique?</span>
  </h2>
  <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
    Unlike traditional courses,{' '}
    <strong className="text-gray-800"> Data Analytics Pro Package </strong> is designed with a{' '}
    <strong className="text-gray-800"> hands-on, outcome-driven approach</strong>. Along with mastering important tools, you'll become a{' '}
    <strong className="text-gray-800"> well-rounded Data Analyst </strong>who can solve real-world problems with confidence and crack the{' '}
    <strong className="text-gray-800"> Microsoft Power BI Data Analyst PL-300 </strong>certification —{' '}
    <strong className="text-brandYellow"> that actually matters!</strong>
  </p>

  <h3 className="font-bold text-lg text-brandBlue">
    <em>Be Super Ready for a Great Career!</em>
  </h3>

        
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <div className="flex flex-col items-center max-w-xs text-center">
            <img src="/icons/handson.png" alt="Hands-on" className="h-12 mb-2" />
            <p className="font-bold text-gray-800">Hands-on Learning</p>
            <p className="text-gray-600 text-sm sm:text-base">Practical exercises and real-world projects.</p>
          </div>

          <div className="flex flex-col items-center max-w-xs text-center">
            <img src="/icons/career.png" alt="Career Ready" className="h-12 mb-2" />
            <p className="font-bold text-gray-800">Career Focused</p>
            <p className="text-gray-600 text-sm sm:text-base">Prepare to land top data analyst roles.</p>
          </div>

          <div className="flex flex-col items-center max-w-xs text-center">
            <img src="/icons/certification.png" alt="Certification" className="h-12 mb-2" />
            <p className="font-bold text-gray-800">Certification Ready</p>
            <p className="text-gray-600 text-sm sm:text-base">Microsoft PL-300 exam preparation included.</p>
          </div>
        </div>

     
      </div>

    {/* Skills Covered */}
<div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 mb-16"> {/* added mt-12 for spacing from USP */}
  <h2 className="text-lg md:text-xl font-bold text-center text-brandBlue mb-8">
    Skills Covered in the Program
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
    {[{logo: excelLogo, title: "Excel for Analytics"},
      {logo: powerBILogo, title: "Power BI Certification"},
      {logo: sqlLogo, title: "SQL for Data Management"},
      {logo: pythonLogo, title: "Python for Data Analysis"}].map((topic, idx) => (
      <div key={idx} className="bg-white rounded-lg p-4 flex flex-col items-center">
        <img src={topic.logo} alt={topic.title} className="h-12 mb-2" />
        <h3 className="text-gray-800 text-base text-center">{topic.title}</h3>
      </div>
    ))}
  </div>

        <p className="text-center font-bold text-[#000000] mt-12 mb-2">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-center text-brandBlue mb-4">
          Kickstart your upskilling with our <span className="text-brandBlue">‘Skills Kickstart Series’</span>
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Worth <span className="font-bold text-green-600">₹18,000</span>, 
          <span className="font-bold text-green-600"> absolutely FREE!</span> 🚀<br />
          Download these mini-courses and begin your learning journey today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-br-md z-10">
                Worth ₹{guide.worth}
              </div>

              <img
                src={guide.thumbnail}
                alt={guide.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 flex-grow text-center">
                <h3 className="text-gray-800 font-semibold text-lg">{guide.title}</h3>
              </div>

              <div className="p-4 pt-0 mt-auto">
                <button
                  onClick={() => openModal(guide.title, guide.file)}
                  className="bg-brandBlue hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md transition duration-300"
                >
                  Free Download
                </button>
              </div>
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
