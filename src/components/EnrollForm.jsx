import React, { useState } from "react";

const EnrollSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    experience: "",
    location: "",
    program: "",
    reason: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ make this async
  const handleSubmit = async (e) => {
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
Location: ${formData.location}
Reason to join: ${formData.reason} `;
    const whatsappLink = `https://wa.me/916366072794?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");

   try {
    // 2️⃣ Google Sheet integration via Google Apps Script webhook
    
    // Convert JSON data to URLSearchParams for URL-encoded submission
    const urlEncodedData = new URLSearchParams();
    for (const key in formData) {
        // Use the simplified data structure
        urlEncodedData.append(key, formData[key]); 
    }
    urlEncodedData.append("type", "enroll"); // Ensure 'type' is still included

    await fetch(
        "https://script.google.com/macros/s/AKfycbys1aNVVyU7pgwmxTWDf9fVVrNf9cAGLXzEG5vQ6tioRltTCntB3tTTRmXez071HM_T/exec", // Your URL
        {
            method: "POST",
            // REMOVE the 'Content-Type: application/json' header
            body: urlEncodedData, // Send as URL-encoded data
        }
    );
    
    alert("Enrollment request submitted successfully!");
    // ... rest of the try block
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    }

    // Reset form
    setFormData({
      name: "",
      education: "",
      experience: "",
      location: "",
      program: "",
      reason: "",
      declaration: false,
    });
  };

  return (
    <section id="enroll" className="py-20 bg-white relative z-10">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlue text-center mb-6">
          Application for Transformation
        </h2>
        <p className="text-center text-gray-700 mb-12">
          You've seen the value and the path to a high-demand career. <br />
          Now fill this quick application to initiate your Admission Interview and secure your spot in the next cohort.
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
            placeholder="Total Years of Work Experience (Enter 0 if Fresher)"
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
              Data Analytics Pro Package - Microsoft PL-300 Certification Track
            </option>
            {/* Add more programs here */}
          </select>

           <input
            type="text"
            name="reason"
            placeholder="State your reasons to do this program"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          />

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
              I confirm my interest and would like to proceed with the Admission Interview call.
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
