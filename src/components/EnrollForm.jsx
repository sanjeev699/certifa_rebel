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
    fetch("YOUR_GOOGLE_SCRIPT_WEBHOOK_URL", {
      method: "POST",
      body: JSON.stringify(formData),
    })
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
      className="relative py-20 overflow-hidden"
  style={{
    background: "linear-gradient(0deg, #f9cd05 0%, #fde87c 50%, #f9cd05 100%)",
  }}
>
       {/* Floating/Abstract Shapes */}
     {/* Animated Background Blobs */}
{/* Diagonal Floating Animated Blobs */}
<div className="absolute top-15 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-white opacity-20 rounded-full rotate-12 animate-ping-slow"></div>
<div className="absolute bottom-10 right-3/4 w-56 h-56 md:w-80 md:h-80 bg-blue-500 opacity-25 rounded-full -rotate-6 animate-ping-slow"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 bg-blue-400 opacity-10 rounded-full rotate-45 animate-ping-slow"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-brandBlue opacity-20 rounded-full -rotate-12 animate-ping-slow"></div>
      
      
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue text-center mb-6">
          Enroll Now
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Fill out the form below and secure your spot in your chosen program.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-brandblue-500 p-8 rounded-xl shadow-md space-y-6"
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
            <option value="Skills Kickstart Series">Skills Kickstart Series</option>
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
