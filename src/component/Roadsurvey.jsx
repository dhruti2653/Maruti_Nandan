import React from "react";

const Roadsurvey = () => {
    return (
        <div className="p-6 lg:p-20 bg-gray-100 space-y-8">
            {/* Top Section with Heading, Content, and Image */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h1 className="font-bold text-2xl lg:text-3xl text-black mb-6">
                        Road Survey Techniques and Applications
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    Being a reputed and trusted service provider in the firm we are rendering Road Survey at affordable rates. The Road width, sidewalks, road margins, traffic dividers, cross slope, and curbs are detailed and must be taken before constructing a building.

</p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src="../images/road.png"
                        alt="Road Survey Illustration"
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
                <span className="font-bold">Product:</span> Road Survey
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Service Duration:</span> Any Time
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Usage:</span> Industrial
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Site Location:</span> India
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Surveying Method:</span> Levels
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Area:</span> Road
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Service Mode:</span> Offline
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Technique:</span> Geo Technical Support
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Features:</span> Road Geometrics, GPS Coordinates, Transverse Profiling
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Scope Of Survey:</span> DPR Survey
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Mode Of Report:</span> Hard Copy
            </p>
        </div>

        <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-sm">
            <p className="text-lg">
                <span className="font-bold">Country Of Origin:</span> India
            </p>
        </div>
    </div>
</div>

        </div>
    );
};

export default Roadsurvey;
