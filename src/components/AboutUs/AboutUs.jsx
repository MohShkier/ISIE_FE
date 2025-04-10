import React from "react";
import OurClient from "../OurClients/ourClient";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../context/LanguageContext';
function AboutUs() {
    const { t } = useTranslation();
    const { language } = useLanguage();
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-5 md:gap-10 ">
                        <h1 className="text-white text-4xl md:text-7xl  ">{t("About Us")}</h1>
                        <p className="text-white text-lg md:text-xl mt-2 max-w-[90%] md:max-w-[60%] font-sans">
                            {t("aboutUsHero1")}
                            <br />
                            

                           {t("aboutUsHero2")}
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
                    <div className="flex flex-col justify-center text-left md:text-left gap-4">
                        <h2 className={`text-3xl xl:text-5xl text-gray-800 text-left  ${language === "ar" ? "!text-right" : ""}`}>
                            {t("Mission")}
                        </h2>
                        <div className={`flex flex-col gap-5 text-lg lg:text-2xl leading-relaxed ${language === "ar" ? "!text-right" : ""}`}>
                        <p className={`mt-2 sm:mt-2 ${language === "ar" ? "font-noto" : "font-sans"}`}>
                        {t("missionDesc1")}
                            </p>
                            <p className={`mt-2 sm:mt-2 ${language === "ar" ? "font-noto" : "font-sans"}`}>
                            {t("missionDesc2")}

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
                    <div className="flex flex-col justify-center text-left md:text-left gap-4">
                    <h2 className={`text-3xl xl:text-5xl text-white xl:text-left  ${language === "ar" ? "!text-right" : ""}`}>
                    {t("Vision")}</h2>
                    <div className={`flex flex-col gap-5 text-lg lg:text-2xl leading-relaxed ${language === "ar" ? "!text-right " : ""}`}>
                    <p className={`mt-2 sm:mt-2 ${language === "ar" ? "font-noto" : "font-sans"}`}>
                    {t("visionDesc1")}
                            </p>
                            <p className={`mt-2 sm:mt-2 ${language === "ar" ? "font-noto" : "font-sans"}`}>
                            {t("visionDesc2")}
                            </p>
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
                    <div className="flex flex-col justify-center text-left md:text-left gap-4">
                    <h2 className={`text-3xl xl:text-5xl text-gray-800  xl:text-left  ${language === "ar" ? "!text-right" : ""}`}>
                            {t("WhyAreWe")}
                        </h2>
                        <div className="flex flex-col gap-4 text-2xl">
                        <p className={`mt-2 sm:mt-2 ${language === "ar" ? "font-noto !text-right" : "font-sans"}`}>
                        {t("whyDesc")}
                            </p>
                        </div>
                    </div>


                    {/* Illustration */}
                    <div className="flex justify-center pl-14">
                        <img src="why.png" alt="Mission Illustration" className="w-4/5 max-w-sm" />
                    </div>
                </div>


            </div>

            <div>
                <div className="flex items-center w-full px-4 justify-center pt-24">
                    <div className="flex items-center w-full max-w-7xl">
                        <div className="flex-1 border-t border-gray-400"></div>
                        <h2 className="mx-4 text-3xl xl:text-5xl   text-gray-800">{t("OurTeam")}</h2>
                        <div className="flex-1 border-t border-gray-400"></div>
                    </div>
                </div>

                <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-20 md:pt-14 pt-6">
                    <div className="flex flex-col justify-center gap-y-2 items-center">
                        <img src="person.png" className="size-72" />
                        <h2 className="text-[#1D2736] font-bold text-center ">Eng. Iyad Shawish</h2>
                        <p className="text-center">CEO & HR</p>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <FaPhoneAlt className="text-[#1D2736]" />
                            <a href="tel:+96264161314">064161314</a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-y-2 items-center">
                        <img src="person.png" className="size-72" />
                        <h2 className="text-center font-bold !text-[#1D2736]">Mohammed Samer</h2>
                        <p className="text-center">Sales</p>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <FaPhoneAlt className="text-[#1D2736]" />
                            <a href="tel:+96264161314">064161314</a>
                        </div>

                    </div>


                </div>
            </div>


            <OurClient />



        </>
    );
}

export default AboutUs;
