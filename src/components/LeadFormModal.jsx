import React, { useState } from "react";

const LeadFormModal = ({ isOpen, onClose, guideName, guideFile }) => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    whatsapp: false,
    email: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby7mMyAemnVOmfWy_qSZICqEROnzpLCka2ohXXubfq_Yt9XP-8H09PGdB0vdADkymG8/exec";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
          ...form,
          guide: guideName
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();
      if (result.result === "success") {
        setSubmitted(true);

        // Trigger download
        const link = document.createElement("a");
        link.href = guideFile;
        link.download = guideName + ".pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-xl font-bold text-brandBlue mb-6 text-center">
              Enter your details to download: {guideName}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={form.contact}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="whatsapp"
                  checked={form.whatsapp}
                  onChange={handleChange}
                />
                <span>Available on WhatsApp?</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />
              <button
                type="submit"
                className="w-full bg-brandBlue text-white py-2 rounded-md hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit & Download"}
              </button>
            </form>
          </>
        ) : (
          <p className="text-green-600 font-semibold text-center">
            ✅ Thank you! Your download should begin shortly.
          </p>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
