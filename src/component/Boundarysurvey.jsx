import React from 'react';

const Boundarysurvey = () => {
  return (
    <div className="p-6 lg:p-20 bg-gray-100 space-y-8">
    {/* Top Section with Heading, Content, and Image */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Content */}
        <div className="lg:w-1/2">
            <h1 className="font-bold text-2xl lg:text-3xl text-black mb-6">
            Transmission survey Techniques and Applications
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
         
            Our company provides the Transmission survey with the best blueprints, under complete legal authorization. We use excellent quality electronic distance measurement (EDM) devices, which render accurate and efficient measurements of boundaries.</p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
            <img
                src="../images/boundry.jpg"
                alt="Land Survey Illustration"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
        </div>
    </div>

    {/* Bottom Section with Descriptions */}
    <div className="space-y-6">
<h1 className="font-bold text-2xl lg:text-3xl text-[#0e2336] mb-6">
Service Details:
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Product :</span> Transmission survey
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Service Duration :</span> 	Project Base
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Usage :</span> 	 66kV to 765Kv
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Quality	 :</span> A Grade
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold"> Area :</span>		Anywhere
    </p>
</div>
<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold"> Measure :</span>	Detail survey, Shek Servey and profiling
    </p>
</div>
<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold"> Surveying method :</span>		DGPS survey
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Service Mode :</span> 		Offline
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Service Type :</span> 	Transmission Survey Service
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Features :</span> 	Accurate survey,  perfect submission
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Mode of Report :</span> 	Hard and Soft Copy
    </p>
</div>

<div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
    <p className="text-lg">
        <span className="font-bold">Site Location :</span> 	India
    </p>
</div>
</div>
</div>

</div>
  )
}

export default Boundarysurvey;
