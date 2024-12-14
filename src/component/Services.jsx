import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Land Survey",
    image: "../images/land.jpg",
    icon: "../images/landlogo.png",
  },
  {
    id: 2,
    title: "Road Survey",
    image: "../images/road.png",
    icon: "../images/roadlogo.png",
  },
  {
    id: 3,
    title: "Transmission Survey",
    image: "../images/boundry.jpg",
    icon: "../images/boundarylogo.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="lg:mt-20 mt-10">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-medium text-[#F76B00] text-center mb-8">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden group"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Icon */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-[#F76B00] rounded-full flex items-center justify-center p-4">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-20 h-20 object-contain rounded-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-500 group-hover:text-[#F76B00] group-hover:underline"
                >
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Link to="/services">
            <button className="bg-[#F76B00] hover:bg-[#d85e00] text-white font-bold py-3 px-6 rounded transition">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
