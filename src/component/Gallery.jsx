import React from "react";

const Gallery = () => {
  const images = [
    "../images/land.jpg",
    "../images/road.png",
    "../images/gallery-2.jpeg",
    "../images/gallery-3.jpeg",
    "../images/gallery-4.jpeg",
    "../images/gallery-2.jpeg",
    "../images/boundry.jpg",
    "../images/gallery-5.jpeg",
    "../images/gallery-6.jpeg",
    "../images/gallery-7.jpeg",
    "../images/gallery-8.jpeg",
    "../images/gallery-9.jpeg",
    "../images/gallery-10.jpeg",
    "../images/gallery-11.jpeg",
    "../images/gallery-12.jpeg",
    "../images/gallery-5.jpeg",
  ];

  return (
    <div className="px-4 py-8 md:px-10 lg:my-10 lg:px-20">
      <h2 className="text-2xl md:text-4xl text-[#0e2336] font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {images.map((src, index) => (
          <div key={index} className="w-full">
            {/* Border Above the Image */}
            <div className="w-full h-2 bg-white mb-2"></div>

            {/* Image Container */}
            <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden border-8 hover:border-[#0e2336] border-gray-200  shadow-lg">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
