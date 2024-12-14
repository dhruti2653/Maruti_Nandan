import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      heading: "Land Survey & Digital Mapping",
      text: "WE PROMISE YOU WE CAN DO ALL JOBS, BIG OR SMALL.",
      image: "/images/slider-1.jpg",
    },
    {
      id: 2,
      heading: "Toporaphy Survey & Drone Mapping ",
      text: "WE USE LEADING TECHNOLOGY AND STATE OF THE ART EQUIPMENTTO GET YOU THE MOST ACCURATE RESULTS.",
      image: "/images/slider-2.jpg",
    },
  ];

  return (
    <section id="home" className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[90vh] flex items-center justify-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-65"></div>

              {/* Slide Content */}
              <div className="content relative z-10 px-6">
                <h2 className="text-5xl font-bold mb-4">{slide.heading}</h2>
                <p className="text-lg text-[#e6e7e9] font-medium  mb-6">{slide.text}</p>
                <a
                  href="/about"
                  className="btn bg-orange-500 text-white px-4 py-2 text-lg rounded w-[200px] hover:bg-orange-600"
                >
                  About Me
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;
