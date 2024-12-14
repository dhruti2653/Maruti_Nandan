import React from 'react';
import { MdEmail, MdCall, MdLocationOn } from 'react-icons/md'; // Import React icons

const ContactCards = () => {
  const cards = [
    {
      title: 'GET AN EMAIL',
      icon: <MdEmail className="text-[#0e2336] text-4xl" />, // React-Icons
      content: ['sdstonesengineering@gmail.com'],
      backgroundImage: '../images/gallery-10.jpeg', // Replace with your email background image
    },
    {
      title: 'MAKE A CALL',
      icon: <MdCall className="text-[#0e2336] text-4xl" />, // React-Icons
      content: ['+91 8469247670'],
      backgroundImage: '../images/gallery-7.jpeg', // Replace with your call background image
    },
    {
      title: 'GO FOR LOCATION',
      icon: <MdLocationOn className="text-[#0e2336] text-4xl" />, // React-Icons
      content: [
       'Office of the Surveyor General of India, DEHRADUN, PIN - 248 001 ',

      ],
      backgroundImage: '../images/gallery-8.jpeg', // Replace with your location background image
    },
  ];

  return (
    <div className='mb-10'>
                      <h2 className="text-center text-3xl  text-[#F76B00] font-medium  mt-14">Contact Us</h2>

    <div className="flex flex-wrap justify-center gap-6 px-10  py-8">

      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full lg:w-1/3 flex flex-col items-center text-center"
        >
            
          {/* Background Image */}
          <div
            className="relative w-full h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                {card.icon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-[#0e2336] font-medium text-2xl mb-4">{card.title}</h3>
            {card.content.map((line, idx) => (
              <p key={idx} className="text-gray-700 text-xl font-normal">{line}</p>
            ))}
          </div>
        </div>
      ))}
      
    </div>
    <div className="flex flex-wrap items-center px-10 lg:px-20  py-8">
      {/* Left Side - Contact Form */}
      <div className="w-full lg:w-1/2 mb-6 lg:pr-8  lg:mb-0">
      <h1  className="text-start text-3xl mb-5 text-[#0e2336] font-medium ">Get In Touch</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-base font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0e2336] text-white p-3 rounded-md hover:bg-blue-950 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Google Map (India) */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <div className="w-full h-48 mt-14 lg:h-96">
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
    
    </div>
  );
};

export default ContactCards;
