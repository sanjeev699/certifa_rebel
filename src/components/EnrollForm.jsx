import React, { useState } from "react";

const EnrollSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    experience: "",
    location: "",
    program: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("Please accept the self-declaration to enroll.");
      return;
    }

    // 1️⃣ WhatsApp link
    const whatsappMessage = `Hi, I want to enroll for ${formData.program}. Here are my details:
Name: ${formData.name}
Education: ${formData.education}
Experience: ${formData.experience} years
Location: ${formData.location}`;
    const whatsappLink = `https://wa.me/916366072794?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");

    // 2️⃣ Google Sheet integration via Google Apps Script webhook
   try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // required for Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "enroll", // 👈 this tells script to use "Enroll now" tab
          ...formData,
        }),
      });
      .then(() => alert("Enrollment request submitted successfully!"))
      .catch(() => alert("Something went wrong. Please try again."));

    // Reset form
    setFormData({
      name: "",
      education: "",
      experience: "",
      location: "",
      program: "",
      declaration: false,
    });
  };

  return (
    <section id="enroll" 
     className="py-20 bg-white relative z-10"
      >
      
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue text-center mb-6">
          Enroll Now
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Fill out the form below and secure your spot in your chosen program.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          />

          <input
            type="text"
            name="education"
            placeholder="Highest Education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          />

          <input
            type="number"
            name="experience"
            placeholder="Overall Years of Work Experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          />

          <input
            type="text"
            name="location"
            placeholder="Current Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          />

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          >
            <option value="">Select Program</option>
            <option value="Data Analytics Pro Package">
              Data Analytics Pro Package
            </option>
            {/*<option value="Skills Kickstart Series">Skills Kickstart Series</option>
            {/* Add more programs here */}
          </select>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              className="h-5 w-5 text-brandBlue"
              required
            />
            <label className="text-gray-700">
              I want to enroll for this program
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-brandYellow text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition"
          >
            Submit & WhatsApp Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnrollSection;
