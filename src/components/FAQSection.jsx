import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this program designed for?",
    answer:
      "Our programs are designed for students, professionals, and career changers who want to build in-demand skills and gain recognized certifications."
  },
  {
    question: "Do I need prior experience to enroll?",
    answer:
      "No prior technical knowledge is required. Our courses are beginner-friendly and build step-by-step skills."
  },
  {
    question: "Is the certification globally recognized?",
    answer:
      "Yes! Our certifications are trusted by employers worldwide and validated across industries."
  },
  {
    question: "Will this program help me get a job or promotion?",
    answer:
      "Absolutely. Our certifications are designed to double your job opportunities, strengthen your resume, and help you stand out in interviews."
  },
  {
    question: "Do you provide career guidance or placement support?",
    answer:
      "Yes, we offer career mentorship, resume reviews, and placement support to ensure you achieve your goals."
  },
  {
    question: "What is the program fee, and are there EMI options?",
    answer:
      "Program fees vary by course. We provide affordable EMI/payment plans and occasional scholarship offers."
  },
  {
    question: "Will I get lifetime access to the content?",
    answer:
      "Yes, once enrolled you’ll have lifetime access to all course content, resources, and updates."
  },
  {
    question: "How do I enroll?",
    answer:
      "Simply click on the 'Enroll Now' button, fill in your details, and complete the payment. Our team will guide you from there."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Got questions? We’ve got you covered. Here are some answers to help you
          understand our programs better.
        </p>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-brandBlue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
