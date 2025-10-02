import React, { useState } from "react";

const EnrollForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    experience: "",
    location: "",
    program: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 1. Send to Google Sheets (via Apps Script Webhook)
    fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    // ✅ 2. Open WhatsApp with pre-filled message
    const message = `Hi, I want to enroll.\n\nName: ${formData.name}\nEducation: ${formData.education}\nExperience: ${formData.experience}\nLocation: ${formData.location}\nProgram: ${formData.program}`;
    window.open(`https://wa.me/916366072794?text=${encodeURIComponent(message)}`, "_blank");

    // ✅ 3. Close modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-brandBlue mb-6 text-center">
          Enroll Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <input
            type="text"
            name="education"
            placeholder="Highest Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <input
            type="text"
            name="experience"
            placeholder="Years of Work Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Current Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            required
          >
            <option value="">Select Program</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Project Management">Project Management</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>

          {/* Declaration */}
          <div className="flex items-start gap-2">
            <input type="checkbox" required />
            <p className="text-sm text-gray-700">
              I hereby declare I want to enroll for this program. Kindly guide me further.
            </p>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-brandBlue text-white font-bold rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
