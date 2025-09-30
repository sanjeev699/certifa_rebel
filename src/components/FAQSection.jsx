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
      "Classes will be held over Live-Zoom sessions. These classes will be recorded and made available for future reference",
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
        Yes! You can kickstart your learning with our high-competence, in-demand courses worth ₹18,000, absolutely free! 
        These courses let you explore Excel, Databases, and Interview Communication even before you join the program. 
        Start learning now. You may{' '}
        <a href="#skills-kickstart" className="text-brandBlue font-bold underline">
          start here
        </a>.
      </p>
    ),
  },
];
