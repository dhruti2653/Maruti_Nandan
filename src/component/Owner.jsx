import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Tejas Pandriya",
      title: "Founder and CEO",
      image: "../images/download.jpg", // Replace with the correct path
    },
    {
      id: 2,
      name: "Mahendr Saraviya",
      title: "Member Experience Manager",
      image: "../images/download (1).jpg", // Replace with the correct path
    },
    {
      id: 3,
      name: "Yogesh Dangar",
      title: "Senior Community Manager",
      image: "../images/download (2).jpg", // Replace with the correct path
    },
  ];

  return (
    <section className="py-12 bg-[#fef8f5]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Team
        </h2>
        <p className="text-center text-lg lg:px-44 px-0 font-medium text-gray-600 mb-8">
          We strive to do everything so that you can comfortably and productively
          work in our space and create amazing products and services.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              {/* Name & Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.title}</p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-[#F76B00]">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-500 hover:text-[#F76B00]">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-500 hover:text-[#F76B00]">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
