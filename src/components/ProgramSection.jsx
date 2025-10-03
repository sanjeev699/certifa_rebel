import React from "react";
import programImg from "../Assets/data_analytics_program.png"; // replace with your actual image path

const ProgramSection = () => {
  return (
    <section
      id="programs"
     className="relative py-20 overflow-hidden"
  style={{
    background: "linear-gradient(0deg, #f9cd05 0%, #fde87c 50%, #f9cd05 100%)",
  }}
>
       {/* Floating/Abstract Shapes */}
     {/* Animated Background Blobs */}
{/* Diagonal Floating Animated Blobs 
<div className="absolute top-15 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-white opacity-20 rounded-full rotate-12 animate-ping-slow"></div>
<div className="absolute bottom-10 right-3/4 w-56 h-56 md:w-80 md:h-80 bg-blue-500 opacity-25 rounded-full -rotate-6 animate-ping-slow"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 bg-blue-400 opacity-10 rounded-full rotate-45 animate-ping-slow"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-brandBlue opacity-20 rounded-full -rotate-12 animate-ping-slow"></div> 
      */}

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brandBlue">
          Our Certification Programs
        </h2>

<p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
          Carefully tailored to get you a
          <span className="font-bold text-brandBlue"> Great Career </span>across domains.
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Live Program Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {/* Image */}
            <img
              src={programImg}
              alt="Data Analytics Program"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2 text-brandBlue">
              Data Analytics Pro Package
            </h3>
            <p className="text-gray-700 mb-4">
              <span className="font-bold text-[#000000]">
                Microsoft Power BI Certification Track
              </span>{" "}
              — Get certified, build real projects, and boost your analytics career.
            </p>
            <a
              href="#program-details"
              className="inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              View Details
            </a>
          </div>

          {/* Coming Soon Cards */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-inner border-2 border-dashed border-gray-300 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-400">Next Program launching shortly</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow-inner border-2 border-dashed border-gray-300 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-400">Stay tuned for updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
