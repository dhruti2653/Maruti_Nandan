import React from "react";
import {  FaCogs, FaWrench, FaDollarSign } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    // { icon: <FaLeaf />, title: "ECO FRIENDLY" },
    { icon: <FaCogs />, title: "Service on Time" },
    { icon: <FaWrench />, title: "Acurate Service" },
    { icon: <FaDollarSign />, title: "AFFORDABLE PRICE" },
  ];

  return (
    <div className="py-10  bg-gray-100  mt-10 px-10 lg:px-20">
      <h2 className="text-center text-3xl text-[#F76B00] font-medium mb-8">Why Choose Us</h2>
      <h2 className="text-center text-3xl text-gray-700 font-medium mb-8">More Then 17 Year's Experience </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-12 rounded-lg hover:shadow-xl transition-shadow duration-300"
          > 
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mb-4 text-[55px] text-[#0F50A2]">
              {feature.icon}
            </div>
            <h3 className="text-center text-lg font-semibold text-gray-700">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
