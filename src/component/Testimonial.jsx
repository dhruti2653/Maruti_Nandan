import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Kamal",
    role: "Customer",
    review:
      "Very stylish and elegant. Brilliant and absolutely breathtaking designs! Thoughtful strategy considering area limitations. Must try! One wouldn’t feel like they are in India. Love it! Good luck. Thanks a lot SD Engineering for such a good work, keep it up. I highly recommend this company.",
    rating: 4.9,
  },
  {
    name: "Amit Kumar",
    role: "Customer",
    review:
      "Very good company to grow career. Good ambience, great place to work, helping staff & good policy structure. I recommend all to work here, it's a best org. for career growth as well as has a very good monetary structure & higher authority is very understanding and cooperative.",
    rating: 4.9,
  },
  {
    name: "Rajesh",
    role: "Customer",
    review:
      "Amazing experience! The team is super professional and delivers top-notch results. Highly recommended for anyone looking for quality work.",
    rating: 4.8,
  },
  {
    name: "Mohan",
    role: "Customer",
    review:
      "Amazing experience! The team is super professional and delivers top-notch results. Highly recommended for anyone looking for quality work.",
    rating: 4.8,
  },
];

const TestimonialCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="text-white lg:mt-14 lg:mx-20 mx-10 px-4">
      <h2 className="text-center text-3xl text-[#F76B00] font-medium mb-7">
        Our Clients Review
      </h2>
      <h2 className="text-center text-5xl text-[#0e2336] font-bold mb-14">
        Customer Feedbacks
      </h2>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 ${
            isPaused ? "" : "animate-scroll"
          } transition-all duration-300`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:py-14 px-5 py-5 lg:px-10 bg-gray-900 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-bold">{testimonial.name}</h3>
              <p className="text-base font-medium text-gray-400 mt-5">
                {testimonial.role}
              </p>
              <p className="mt-4 text-lg font-medium">{testimonial.review}</p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
