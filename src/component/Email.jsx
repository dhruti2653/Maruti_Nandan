import React from "react";

const ConsultationSection = () => {
  return (
    <>
    <div className="relative text-white md:mx-20  mx-10 rounded-2xl my-16 px-6 md:px-20 overflow-hidden">
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
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-200 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-200 rounded-md outline-none"
          />
          <button className="w-full px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold">
            Get It Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ConsultationSection;
