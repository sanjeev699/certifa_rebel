import React from "react";
import brokenEducationImg from "../Assets/broken-education-icon.jpg";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="md:w-1/2 md:pr-12 order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brandBlue">
            EdTech Is Broken. Students Are Paying for Hype.
          </h2>
          <p className="text-gray-800 mb-4">
            Thousands of students spend lakhs on foreign university certificates that{" "}
            <span className="font-semibold text-brandYellow">add no real value</span> to their career.
          </p>
          <p className="text-gray-800 mb-4">
            Courses are overpriced, promise jobs they can’t deliver, and leave learners frustrated.
          </p>
          <p className="text-gray-800 mb-6">
            <span className="font-semibold text-brandYellow">We rebel</span> against fake prestige and empty promises. Certifa focuses on{" "}
            <span className="font-semibold text-brandYellow">real skills, global certifications, and career preparation</span>.
          </p>
        </div>

        {/* Illustration / Image */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col items-center order-2">
          <img
            src={brokenEducationImg}
            alt="Problem Illustration"
            className="w-96 md:w-[600px] h-96 md:h-[600px] transform transition-transform duration-500 hover:scale-105"
          />
          {/* Button below image on mobile */}
          <a
            href="#comparison"
            className="mt-6 inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 md:hidden"
          >
            See How We Are Different
          </a>
        </div>

        {/* Button for desktop (beside text) */}
        <div className="hidden md:flex md:w-1/2 md:justify-start md:mt-6 order-1">
          <a
            href="#comparison"
            className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            See How We Are Different
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
