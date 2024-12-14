import React from "react";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow-md">
      

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-20 ">
        {/* Left Side: Logo */}
        <Link to={"/"} className="flex items-center justify-between ">
  {/* Logo */}
  <img
    src="../images/logo1.png"
    alt="Logo"
    className="h-24 w-24 rounded-full"
  />

  {/* Title */}
  <span className="text-3xl font-medium  text-black">Maruti Nandan</span>
</Link>


        {/* Right Side: Contact Information */}
        <div className="flex items-center space-x-6">
          {/* Email */}
          <a
            href="mailto:info@example.com"
            className="flex items-center space-x-2 hover:underline"
          >
            <MdEmail className="text-4xl  text-[#293f52]" />
            <span className="text-xl font-medium">info@example.com</span>
          </a>
          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 hover:underline"
          >
            <FiPhone className="text-4xl text-[#293f52]" />
            <span className="text-xl font-medium">+91 8469247670</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
