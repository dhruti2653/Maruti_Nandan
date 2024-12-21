import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0e2336] text-white pl-5 lg:pl-0 py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Us Section */}
        <div>
        <div className="space-y-3">
        <Link to={"/"} className="flex items-center  gap-3  ">
  {/* Logo */}
  <img
    src="../images/logo.jpeg"
    alt="Logo"
    className="h-16 w-16 "
  />

  {/* Title */}
  <span className="text-2xl font-medium text-white">Maruti Nandan</span>
</Link>
          {/* Address Section */}
          <p className="flex items-center">
  <FaMapMarkerAlt size={36} className="mr-2 text-[#0F50A2]" /> {/* Location Icon */}
  Office of the Surveyor General of India, DEHRADUN, PIN - 248 001
</p>


          {/* Phone Number Section */}
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2 text-xl text-[#0F50A2]" /> {/* Phone Icon */}
            <a href="tel:+919871880058" className="text-white hover:text-gray-400">
              +91 8469247670
            </a>
          </p>

          {/* Email Section */}
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-xl text-[#0F50A2]" /> {/* Email Icon */}
            <a href="mailto:marutinandan@gmail.com" className="text-white hover:text-gray-400">
              marutinandan@gmail.com
            </a>
          </p>
        </div>

          <div className="flex space-x-4 mt-4 ">
          <a href="https://www.facebook.com/" className="text-[#0F50A2] hover:text-[#204b80] rounded-full p-3 bg-slate-300 ">
              <FaFacebookF />
            </a>
            <a href="https://x.com/" className="text-[#0F50A2] hover:text-[#204b80] rounded-full p-3 bg-slate-300">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" className="text-[#0F50A2] hover:text-[#204b80] rounded-full p-3 bg-slate-300">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/" className="text-[#0F50A2] hover:text-[#204b80] rounded-full p-3 bg-slate-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" className="text-[#0F50A2] hover:text-[#204b80] rounded-full p-3 bg-slate-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className=' lg:pl-14'>
  <h2 className="text-2xl  font-medium mb-4">Quick Links</h2>
  <ul className="flex flex-col space-y-4"> {/* Use flex-col for vertical layout and space-y for vertical spacing */}
    <li><a href="/" className="hover:text-gray-400">Home</a></li>
    <li><a href="/about" className="hover:text-gray-400">About</a></li>
    <li><a href="/services" className="hover:text-gray-400">Services</a></li>
    <li><a href="/projects" className="hover:text-gray-400">Gallery</a></li>
    <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
  </ul>
</div>



        {/* Website Policies Section */}
        <div>
          <h2 className="text-2xl font-medium mb-4 space-y-4">Website Services</h2>
          <ul className="flex flex-col space-y-8 ">
            <li><a href="/land" className="hover:text-gray-400">Land Survey</a></li>
            <li><a href="/road" className="hover:text-gray-400">Road Survey</a></li>
            <li><a href="/transmission" className="hover:text-gray-400">Transmission Survey</a></li>
          </ul>
        </div>
        
        {/* Locate Us Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-medium mb-4">Locate Us</h2>
          <div className="w-full h-48 lg:h-64">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.8337038963!2d77.3507317207468!3d28.51090591339885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce212e0916a2f%3A0x7696e1e4abf1b024!2sIndia!5e0!3m2!1sen!2sus!4v1697027854692!5m2!1sen!2sus"
    title="India Map"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

        </div>
      </div>

      <div className="bg-[#0e2336]  w-full h-full mt-10 pt-8 text-center text-white border-t-2 border-gray-100 ">
      <p> Copyright © 2024 . MakeMyVision Technology. All Rights Reserved.</p>						
      </div>
    </footer>
  );
};

export default Footer;
