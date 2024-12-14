import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
// import backgroundImage from "../images/cofaunder.jpeg";



const About = () => {
  return (
    <section className="bg-white  px-10 mt-16 lg:pl-20">
      <div className="container gap-20 mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <h1 className="font-bold text-[#F76B00] text-lg">ABOUT US</h1>
          <h2 className="text-[45px] font-bold mt-5 text-gray-900 mb-4">
            WE SEE YOUR WORLD CLEARLY
          </h2>
          <p className="text-gray-600 text-lg mt-4 font-bold mb-6">
          Established in 2018, <span className="font-bold text-gray-800"> *Maruti Nandan Survey and Consulting* </span> is a trusted name in the field of surveying. Founded by three dedicated partners – Tejas Pandriya, Mahendr Saraviya, and Yogesh Dangar – our firm has successfully completed over 150 projects, earning a reputation for excellence and customer satisfaction.  
          </p>
          <p className="text-gray-600 font-medium text-base mb-6">
          We specialize in <span className="font-bold"> *road surveys, land surveys, and transmission surveys*</span>, delivering precise and reliable results to meet the unique needs of each client. With a commitment to quality and attention to detail, we aim to provide solutions that drive success for our clients.  
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-44 gap-4">
  <p className="text-xl sm:text-2xl text-nowrap lg:text-3xl font-mono italic font-bold">
  Tejas Pandriya
  </p>
  <p className="text-black font-serif font-bold text-lg sm:text-xl lg:text-2xl">
    Founder & Chairman
  </p>
</div>

        
          <div
  className="  mt-7 flex justify-center items-center lg:gap-7 gap-4 px-6 py-4 rounded-lg shadow-lg relative border-2 border-gray-300"
>
<div
  className="relative bg-cover bg-center p-6 justify-start items-start text-white"
  style={{
    backgroundImage: `url('/images/cofaunder.jpeg')`,
  }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 "></div>

  {/* Icon Content */}
  <div className="relative flex items-center justify-center">
    <FaPhoneAlt className="w-6 h-6" />
  </div>
</div>

  <p className="text-lg text-[#293f52] font-bold">Want to Know More?</p>
  <p className="text-lg text-[#F76B00] font-bold">
  <a href="tel:+919871880058">+91 8469247670</a>
</p>
</div>




        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 -mt-14 w-full flex flex-col items-center">
  <div className="relative flex flex-row justify-center items-center mb-4">
    {/* First image (smaller, with z-index to overlap the second image) */}
    <img
      src="../images/about1.jpeg" // Replace with your image source
      alt="Surveying"
      className="absolute  top-20 lg:-left-10 w-1/3 rounded-lg shadow-lg z-10 transform translate-x-10 translate-y-10"
    />
    {/* Second image (larger, positioned behind the first image) */}
    <img
      src="../images/about2.jpeg" // Replace with your image source
      alt="Surveying"
      className="w-2/3  rounded-lg shadow-lg z-0"
    />
  </div>
</div>

      </div>

    
    </section>
  );
};

export default About;
