import React, { useState } from "react";
import LeadFormModal from "./LeadFormModal";

// Assets
import excelThumb from "../Assets/excel_thumb.png";
import dbThumb from "../Assets/db_thumb.png";
import interviewThumb from "../Assets/interview_thumb.png";

// Brochure files
const excel_guide = "/brochures/The Ultimate Microsoft Excel Starter Kit_Certifa.pdf";
const database_guide = "/brochures/Fundamentals of Database Made Super Easy_Certifa.pdf";
const interview_guide = "/brochures/Interview Communication Mastery_ The Basics You Can’t Afford to Miss_Certifa.pdf";

// Guides data
const guides = [
  { title: "The Ultimate Microsoft Excel Starter Kit", file: excel_guide, thumbnail: excelThumb, worth: 8000 },
  { title: "Fundamentals of Database Made Super Easy", file: database_guide, thumbnail: dbThumb, worth: 5000 },
  { title: "Interview Communication Mastery", file: interview_guide, thumbnail: interviewThumb, worth: 5000 },
];

const SkillsKickstartSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDownload, setCurrentDownload] = useState({ guideName: "", guideFile: "" });

  const openModal = (guideName, guideFile) => {
    setCurrentDownload({ guideName, guideFile });
    setIsModalOpen(true);
  };

  return (
   <section
  id="skills-kickstart"
  className="bg-gradient-to-b from-[#fde87c] via-white to-[#fde87c] py-16 md:py-20 scroll-mt-18"
>
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
    {/* Heading */}
    <h2 className="text-xl md:text-3xl  text-[#000000] mb-6 text-center">
      Jumpstart your learning with our <br />
      <span className="font-bold text-brandBlue"> Skills Kickstart Series</span>
    </h2>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
          Access curated mini-courses worth <span className="font-bold text-green-600">₹18,000</span>, completely <span className="font-bold text-green-600">FREE</span>! 🚀 
          
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
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
              <div className="p-4 flex-grow text-center">
                <h3 className="text-gray-800 font-semibold text-lg">{guide.title}</h3>
              </div>

              {/* Button */}
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

export default SkillsKickstartSection;
