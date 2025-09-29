import React from "react";
import programImg from "../Assets/data_analytics_program.png"; // replace with your actual image path

const ProgramSection = () => {
  return (
    <section
      id="programs"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #fde87c 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brandBlue">
          Our Programs
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Live Program Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {/* Image */}
            <img
              src={programImg}
              alt="Data Analytics Program"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2 text-brandYellow">
              Data Analytics Pro Package
            </h3>
            <p className="text-gray-700 mb-4">
              <span className="font-bold text-brandBlue">
                Microsoft Power BI Certification Track
              </span>{" "}
              — Get certified, build real projects, and boost your analytics career.
            </p>
            <a
              href="/programs/data-analytics-pro"
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
