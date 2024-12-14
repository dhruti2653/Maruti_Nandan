import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`flex items-center justify-between px-4 py-4  md:px-20 lg:px-32 bg-[#0e2336] text-white transition-all duration-300 ${
        isScrolled ? "rounded-none" : "lg:rounded-full"
      } sticky top-0 w-full z-50 `}
    >
      {/* Left Side: Brand/Logo */}
      <div className="flex items-center lg:hidden">
        <Link to={"/"} className="flex items-center">
          <img
            src="../images/logo.jpeg"
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
          <span className="ml-3 text-2xl font-medium lg:text-xl">
            Maruti Nandan
          </span>
        </Link>
      </div>

      {/* Center: Navigation Menu */}
      <nav className="hidden md:flex items-center text-xl font-medium space-x-6">
        <Link
          to="/"
          className={`hover:text-[#F76B00] hover:underline ${
            location.pathname === "/" ? "text-[#F76B00]" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-[#F76B00] hover:underline ${
            location.pathname === "/about" ? "text-[#F76B00]" : "text-white"
          }`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`hover:text-[#F76B00] hover:underline ${
            location.pathname === "/services" ? "text-[#F76B00]" : "text-white"
          }`}
        >
          Services
        </Link>
        <Link
          to="/gallery"
          className={`hover:text-[#F76B00] hover:underline ${
            location.pathname === "/gallery" ? "text-[#F76B00]" : "text-white"
          }`}
        >
          Gallery
        </Link>
        {/* <Link
          to="/contact"
          className={`hover:text-[#F76B00] hover:underline ${
            location.pathname === "/contact" ? "text-[#F76B00]" : "text-white"
          }`}
        >
          Contact Us
        </Link> */}
      </nav>

      {/* Right Side: Contact Button and Toggle */}
      <div className="flex items-center">
        <button
          onClick={handleContactClick}
          className="hidden md:flex items-center px-6 py-2 lg:px-8 lg:py-3 rounded-full bg-[#F76B00] text-white text-sm lg:text-lg font-medium hover:bg-blue-700 space-x-2"
        >
          Contact Us <span className="ml-2 text-xl font-medium">&gt;</span>
        </button>

        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="ml-4 md:hidden text-xl p-4 bg-[#F76B00] rounded-full text-white hover:bg-blue-700 focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Slide-In Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#0e2336] shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#0e2336]">
          <div className="flex items-center lg:hidden">
            <Link to={"/"} className="flex items-center">
              <img
                src="../images/logo.jpeg"
                alt="Logo"
                className="h-16 w-16 rounded-full"
              />
              <span className="ml-3 text-lg font-medium lg:text-xl">
                Maruti Nandan
              </span>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="text-xl text-white focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className="flex flex-col items-start px-6 mt-6 space-y-4 text-lg font-medium">
          <Link
            to="/"
            className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
              location.pathname === "/" ? "text-[#F76B00]" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
              location.pathname === "/about" ? "text-[#F76B00]" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
              location.pathname === "/services" ? "text-[#F76B00]" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
              location.pathname === "/gallery" ? "text-[#F76B00]" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
              location.pathname === "/contact" ? "text-[#F76B00]" : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
