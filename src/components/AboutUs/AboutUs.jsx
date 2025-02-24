import React from "react";

function AboutUs() {
    return (
        <>
            <div className="relative w-full ">
                {/* Background Image with Overlay */}
                <div className="relative w-full h-[75vh] md:h-[82vh]">
                    <img
                        src="/image.png"
                        alt="About Us Background"
                        className="absolute inset-0 w-full h-full object-cover "
                    />
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-[#1D2736]/80"></div>

                    {/* Text Content (Above Overlay) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-10">
                        <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
                        <p className="text-white text-lg md:text-xl mt-2 max-w-[90%] md:max-w-[60%]">
                            ISIE is a company specializing in industrial equipment.
                            <br />
                            
                            Our company has been operating since 2014.
                        </p>
                    </div>
                </div>
            </div>
 <div className="relative bg-gray-100 py-20 px-6 lg:px-24 flex items-center min-h-[650px] lg:min-h-[800px]">
    {/* Background Decorations */}
    <div className="absolute inset-0 overflow-hidden">
        {/* Circles */}
        <img src="topRight.png" className="absolute top-0 right-0 w-24 sm:w-32 opacity-60" alt="Decorative Shape" />
        <img src="underCircle.png" className="absolute bottom-0 lg:left-44 left-12 w-32 sm:w-40 opacity-60" alt="Decorative Shape" />

        {/* Additional Decorations */}
        <img src="topLeft.png" className="absolute top-0 left-0 w-24 sm:w-32 opacity-60" alt="Decorative Shape" />
        <img src="underRight.png" className="absolute bottom-0 right-10 w-32 sm:w-40 opacity-60" alt="Decorative Shape" />

        {/* Rectangles */}
        <img src="rect.png" className="absolute top-1/3 left-1/2 w-4 sm:w-6 opacity-60 rotate-45" alt="Rectangular Shape" />
        <img src="rect.png" className="absolute bottom-1/4 left-1/3 w-6 sm:w-8 opacity-60 rotate-45" alt="Rectangular Shape" />
    </div>

    {/* Content */}
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="flex flex-col justify-center text-left  md:text-left gap-4">
            <h2 className="text-5xl font-bold text-gray-800 xl:text-left text-center">Mission</h2>
           <div className="flex flex-col gap-5 justify-center text-2xl">
                <p className=" mt-4">
                        At ISIE, our mission is to provide high-quality industrial equipment 
                    </p>
                    <p>
                    that enhances efficiency,
                    safety, and productivity in the mining and
                    </p>
                    <p>
                    industrial sectors.

                    </p>
           </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
            <img src="arrows.png" alt="Mission Illustration" className="w-4/5 max-w-md" />
        </div>
    </div>
</div>

<div className="relative bg-gray-900 text-white py-20 px-6 lg:px-24 flex items-center min-h-[650px] lg:min-h-[800px]">
    {/* Background Decorations */}
    <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle (Top Center, Slightly Right) */}
        <img src="aboutTopCircle.png" className="absolute top-[-40px] right-[20%] w-60 opacity-65" alt="Decorative Shape" />
        
        {/* Small Circle (Bottom Left) */}
        <img src="aboutUnderCircle.png" className="absolute bottom-0 w-44 opacity-100" alt="Decorative Shape" />
        
        {/* Diamond Shape (Near Middle Right) */}
        <img 
    src="diamond.png" 
    className="absolute w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20 opacity-65 
               left-[45%] top-[45%] sm:left-[48%] sm:top-[48%] 
               md:left-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2" 
    alt="Decorative Shape" 
/>
        
     
    </div>

    {/* Content */}
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left Side: Vision Text */}
        <div className="flex flex-col justify-center text-left  md:text-left gap-4">
            <h2 className="text-5xl font-bold text-white xl:text-left text-center">Vision</h2>
           <div className="flex flex-col gap-1 justify-center text-2xl">
           <p className="text-gray-300 mt-4 leading-relaxed">
            Our vision is to drive progress in the mining and industrial 
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
            sectors by delivering cutting-edge solutions that enhance</p>
            <p className="text-gray-300 mt-4 leading-relaxed">
            operational efficiency and sustainability. We aim to expand our</p>
            <p className="text-gray-300 mt-4 leading-relaxed">
            global reach, build long-term partnerships, and continuously </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
            evolve to meet the ever-changing demands of the industry while</p>
            <p className="text-gray-300 mt-4 leading-relaxed">
            maintaining the highest standards of quality and service.</p>
           </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex justify-center">
            <img src="vision.png" alt="Vision Illustration" className="w-4/5 max-w-md" />
        </div>
    </div>
</div>





<div className="relative bg-gray-100 py-20 px-6 lg:px-24 flex items-center min-h-[600px] lg:max-h-[800px]">
    {/* Background Decorations */}
    <div className="absolute inset-0 overflow-hidden">
        {/* Circles */}
        <img src="topRight.png" className="absolute top-0 right-0 w-24 sm:w-32 opacity-60" alt="Decorative Shape" />
        <img src="underCircle.png" className="absolute bottom-0 lg:left-44 left-12 w-32 sm:w-40 opacity-60" alt="Decorative Shape" />

        {/* Additional Decorations */}
        <img src="topLeft.png" className="absolute top-0 left-0 w-24 sm:w-32 opacity-60" alt="Decorative Shape" />
        <img src="underRight.png" className="absolute bottom-0 right-10 w-32 sm:w-40 opacity-60" alt="Decorative Shape" />

        {/* Rectangles */}
        <img src="rect.png" className="absolute top-1/3 left-1/2 w-4 sm:w-6 opacity-60 rotate-45" alt="Rectangular Shape" />
        <img src="rect.png" className="absolute bottom-1/4 left-1/3 w-6 sm:w-8 opacity-60 rotate-45" alt="Rectangular Shape" />
    </div>

    {/* Content */}
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="flex flex-col justify-center text-left  md:text-left gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 xl:text-left text-center">Why Are We Here ?</h2>
           <div className="flex flex-col gap-5 justify-center text-2xl">
           <p className=" mt-4">
                At ISIE, our mission is to provide high-quality industrial equipment 
            </p>
            <p>
            that enhances efficiency,
            safety, and productivity in the mining and
            </p>
            <p>
             industrial sectors.

            </p>
           </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center pl-14">
            <img src="why.png" alt="Mission Illustration" className="w-4/5 max-w-sm" />
        </div>
    </div>
</div>

        </>
    );
}

export default AboutUs;
