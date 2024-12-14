import React from 'react';

const Landsurvey = () => {
  return (
    <div className="p-6 lg:p-20 bg-gray-100 space-y-8">
            {/* Top Section with Heading, Content, and Image */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h1 className="font-bold text-2xl lg:text-3xl text-black mb-6">
                        Land Survey Techniques and Applications
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                 
Best graphic layout for Land Survey is served by our company at reasonable prices. During the survey, our engineers check the soil quality, land elevation, slope, and many more factors to design the best blueprint.
</p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src="../images/land.jpg"
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
                <span className="font-bold">Product :</span> Land Survey
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Features :</span> 	Satisfactory Nature
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Usage :</span> 	Residential & Commercial Purposes
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Features :</span> 	Accurate Boundaries, Perfect Design
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold"> Measurement Type :</span>	Meters
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Service Duration :</span> 	3 Days
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Service Provider :</span> 	Pratik Associate & Survey
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Technique :</span> 	Good
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Service Mode :</span> 	Offline
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Mode of Report :</span> 	Hard and Soft Copy
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Customisation :</span> 	Yes
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Site Location :</span> 	All Over India
            </p>
        </div>
        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Surveying Method :</span> 		Digital Contour Survey
            </p>
        </div>
    </div>
</div>

        </div>
  )
}

export default Landsurvey;
