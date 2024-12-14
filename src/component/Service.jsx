import React from "react";

const SurveySection = () => {
  const surveys = [
    {
      image: "../images/land.jpg",
      title: "Land Survey",
      description: "Maruti Nandan has extensive experience in producing detailed and accurate land surveys.",
      icon: "../images/landlogo.png",
      link: "/land", // Link for Land Survey
    },
    {
      image: "../images/road.png",
      title: "Road Survey",
      description: "Our services include detailed road survey. Road plans are a graphical representation of the lay of the land.",
      icon: "../images/roadlogo.png",
      link: "/road", // Link for Road Survey
    },
    {
      image: "../images/boundry.jpg",
      title: "Transmission Survey",
      description: "Our solution combines drone technology with advanced software mapping capabilities and robust data delivery.",
      icon: "../images/boundarylogo.png",
      link: "/transmission", // Link for Boundary Survey
    },
  ];

  return (
    <div className="py-8 md:px-10 lg:mt-5 px-10 lg:px-20">
      <h2 className="text-center text-3xl text-[#F76B00] font-medium mb-8">Our Surveys</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44">
        {/* First Row: Two Services */}
        {surveys.slice(0, 2).map((survey, index) => (
          <div
            key={index}
            className="relative hover:scale-105 group overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={survey.image}
                alt={survey.title}
                className="w-full h-48 md:h-56 lg:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Icon Overlay */}
              <div className="absolute lg:top-44 top-28 left-1/2 transform translate-y-1/2 -translate-x-1/2 bg-gray-100 border border-orange-500 rounded-full p-4 shadow-lg">
                <img
                  src={survey.icon}
                  alt={`${survey.title} Icon`}
                  className="w-16 h-16 object-contain rounded-full "
                />
              </div>
              <h3 className="text-2xl font-bold text-center mt-20">{survey.title}</h3>
              <p className="text-base font-medium text-gray-600 text-center mt-4 px-7">{survey.description}</p>
              <div className="text-center mt-4">
                <a
                  href={survey.link}
                  className="text-orange-500 font-bold pb-5 hover:text-orange-600 hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Second Row: Single Service Centered */}
        <div className="col-span-full mx-auto w-full mt-14 md:w-3/4 lg:w-1/2">
          <div className="relative group overflow-hidden hover:scale-105 lg:mx-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={surveys[2].image}
                alt={surveys[2].title}
                className="w-full h-48 md:h-56 lg:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Icon Overlay */}
              <div className="absolute lg:top-44 top-28 left-1/2 -translate-x-1/2 transform translate-y-1/2 bg-gray-100 border border-orange-500 rounded-full p-4 shadow-lg">
                <img
                  src={surveys[2].icon}
                  alt={`${surveys[2].title} Icon`}
                  className="w-16 h-16 object-contain rounded-full "
                />
              </div>
              <h3 className="text-2xl font-bold text-center mt-20">{surveys[2].title}</h3>
              <p className="text-base font-medium text-gray-600 text-center mt-4 px-7">{surveys[2].description}</p>
              <div className="text-center mt-4">
                <a
                  href={surveys[2].link}
                  className="text-orange-500 font-bold pb-5 hover:text-orange-600 hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveySection;
