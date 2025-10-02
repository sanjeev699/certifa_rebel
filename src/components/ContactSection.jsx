import React from "react";
import CTAButton from "./CTAButton";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white relative z-10"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-12">
          Have questions or want to start learning? Connect with us directly!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919902914906"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-lg transform hover:-translate-y-1"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>

          {/* Enroll 
        <CTAButton link="#enroll" variant="yellow" className="w-auto">
            Enroll Now
          </CTAButton>*/}

          
        </div> 

        {/* Optional Footer Note */}
        <p className="text-gray-500 mt-8 text-sm">
          We’re here to assist you all days 10AM to 7PM </br>. Your queries are important to us.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
