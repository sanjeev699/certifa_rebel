import React from "react";
import brokenEducationImg from "../Assets/broken-education-icon.jpg";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-[#ffffff]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col order-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brandBlue leading-snug">
            EdTech Is Broken. Students Are Paying for Hype.
          </h2>
          <p className="text-gray-800">
            Thousands of students spend lakhs on foreign/domestic university certificates that{" "}
            <span className="font-extrabold text-brandYellow">add no real value</span> to their career.
          </p>
          <p className="text-gray-800">
            Courses are overpriced, promise jobs they can’t deliver, and leave learners frustrated.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-brandYellow">We rebel</span> against fake prestige and empty promises. Certifa focuses on{" "}
            <span className="font-extrabold text-brandYellow">real skills, global certifications, and career preparation</span>.
          </p>

          {/* Desktop Button */}
          <a
            href="#comparison"
            className="mt-6 md:mt-8 inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 order-2 md:order-3"
          >
            See How We Are Different
          </a>
        </div>

        {/* Illustration / Image */}
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <img
            src={brokenEducationImg}
            alt="Problem Illustration"
            className="w-80 md:w-[600px] h-80 md:h-[600px] transform transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg"
          />
        </div>

        {/* Mobile-only button below image */}
        <div className="md:hidden flex justify-center mt-6 order-3">
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
