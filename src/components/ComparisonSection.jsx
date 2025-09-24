import React from "react";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brandBlue">
          Others vs Certifa
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Others Card */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
            <h3 className="text-xl font-semibold mb-6 text-red-600">What Others Do</h3>
            <ul className="text-gray-800 space-y-4">
              <li>Sell overpriced European/American certificates</li>
              <li>Promise jobs or interviews they can't deliver</li>
              <li>Provide no real skill-building or career support</li>
              <li>Focus on hype, not substance</li>
            </ul>
          </div>

          {/* Certifa Card */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md border-t-4 border-brandYellow">
            <h3 className="text-xl font-semibold mb-6 text-brandYellow">What Certifa Does</h3>
            <ul className="text-gray-800 space-y-4">
              <li>Offers globally recognized certifications from Microsoft, AWS, Salesforce</li>
              <li>Focuses on real skill-building and career preparation</li>
              <li>Supports students with exam fees, resume building, and interview prep</li>
              <li>Delivers knowledge that hiring managers actually value</li>
            </ul>
          </div>
        </div>

        <a
          href="#certifications"
          className="mt-12 inline-block bg-brandBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
        >
          Explore Certifications
        </a>
      </div>
    </section>
  );
};

export default ComparisonSection;
