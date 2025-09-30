import React, { useState } from "react";

const faqs = [
  {
    question: "What makes Certifa different from others?",
    answer:
      "We focus on real, industry-validated certifications that prove your skills. Our programs are designed to double your job opportunities and give you practical, career-ready knowledge.",
  },
  {
    question: "Are the certifications recognized globally?",
    answer:
      "Yes. Certifications like Microsoft, AWS, Salesforce, and PMI are globally trusted across industries and geographies.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "Not necessarily. Some programs are beginner-friendly, while others require basic knowledge. Each program clearly mentions prerequisites.",
  },
  {
    question: "What will be the mode of teaching?",
    answer:
      "Classes will be held over Live-Zoom sessions. These classes will be recorded and made available for future reference.",
  },
  {
    question: "Will I get placement assistance?",
    answer:
      "Absolutely! We offer dedicated career guidance, resume building, and mock interviews. There are certain courses with specific offers, please check with the team for more info.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "No worries. All live sessions are recorded and made available, so you can catch up anytime.",
  },
  {
    question: "Can I start learning before enrolling?",
    answer: (
      <p>
        Yes! You can kickstart your learning with our high-competence, in-demand <span className="font-bold">Skills Kickstart Series
</span> worth ₹18,000, absolutely free! 
        These courses let you explore Excel, Databases, and Interview Communication even before you join the program. 
        You may{" "}
        <a href="#skills-kickstart" className="text-brandBlue font-bold underline">
          start here
        </a>.
      </p>
    ),
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      Id= "Faq"
      className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Got questions? We’ve got answers.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-brandBlue font-bold text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
