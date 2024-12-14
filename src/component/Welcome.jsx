import React from 'react';

const AutoScrollingText = () => {
  return (
    <div className="grid grid-cols-3 bg-[#0e2336] h-16 w-full">
      {/* Left Blank Column */}
      <div></div>

      {/* Center Column with Scrolling Text */}
      <div className="relative overflow-hidden">
        <h3 className="relative w-full h-full flex items-center justify-center">
          <div
            className="absolute whitespace-nowrap animate-scroll text-gray-200 text-2xl font-medium"
            style={{
              fontFamily: "'Eagle Lake', cursive",
            }}
          > 
  Welcome to <strong
              style={{
                color: "#F76B00", // Change this to your desired color
              }}
            >
              Maruti Nandan Survey Solutions
            </strong>{' '}  Complete Survey Solutions.         </div>
        </h3>
      </div>

      {/* Right Blank Column */}
      <div></div>
    </div>
  );
};

export default AutoScrollingText;
