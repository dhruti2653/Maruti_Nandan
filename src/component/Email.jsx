import React, { useState } from "react";

const ConsultationSection = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Optionally process form data (e.g., send it to an API)
    console.log('Form submitted:', formData);

    // Set form submission status (e.g., to show success message)
    setIsSubmitted(true);

    // Don't clear form data - just display the success message
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <div className="relative text-white md:mx-20 mx-10 rounded-2xl my-16 px-6 md:px-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/email.jpg')" }}
      ></div>

      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 py-16">
        {/* Text Section */}
        <div className="md:w-2/3">
          <span className="text-sm font-bold bg-green-500 px-3 py-1 rounded-md inline-block mb-2">
            FEEL FREE
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Get Free Consultation <br /> or +91 8469247670
          </h2>
        </div>

        {/* Form Section */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-200 rounded-md outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-200 rounded-md outline-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold"
            >
              Get It Now
            </button>
          </form>

          {/* Optionally show a success message after form submission */}
          {isSubmitted && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;
