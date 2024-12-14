import React from "react";

const HistorySection = () => {
  return (
    <section className="flex flex-col mt-16 md:flex-row items-center justify-center md:justify-between bg-gray-100 p-6 md:p-16 space-y-8 md:space-y-0">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="../images/gallery-3.jpeg" // Replace with your image URL
          alt="Our History"
          className="w-[90%] md:w-[400px] md:h-[300px] rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Our Work Experience
        </h2>
        <ul className="list-disc pl-6 text-lg font-medium space-y-2 text-gray-700">
          <li>GETCO ARC (66 KV).</li>
          <li>765 KV Rajsthan.</li>
          <li>400 KV Lakadiya.</li>
          <li>220 KV and 132 KV Projects.</li>
        </ul>
        <p className="pt-5 text-lg text-gray-700 text-center md:text-left">
          At Maruti Nandan Survey and Consulting, customer satisfaction is our top priority, and our growing list of positive reviews is a testament to the trust and confidence our clients place in us.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
