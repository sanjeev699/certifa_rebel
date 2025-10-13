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
      await fetch(
  "https://script.google.com/macros/s/AKfycby--re-jk5b44DexKzS0lJM3EldcKIQHZqEOfn5Xhqt2Kv-u-QP46FFQsJukOiHjZ9E/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // ✅ must include
    },
    body: JSON.stringify({ ...formData, type: "enroll" }),
  }
);
      alert("Enrollment request submitted successfully!");
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
          Application of Interest
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Take the first step at a bright future. </br>
        Fill out the form below and initiate your admission process.
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
            {/* Add more programs here */}
          </select>

           <input
            type="text"
            name="reason"
            placeholder="Please explain why do you want to join the above selected program"
            value={formData.location}
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
              I hereby declare that I am interested in the above program and would want to book an Admission Interview call.
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
