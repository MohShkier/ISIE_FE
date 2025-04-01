import ProductSection from "../OurProductSection/OurProductSection";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-scroll';

function Home() {
    const { t } = useTranslation();
    const { language } = useLanguage();


    return (
        <>
            <div className="relative w-full ">
                {/* Background Image with Overlay */}
                <div className=" min-h-screen max-h-screen relative w-full mb-auto  flex justify-center !items-center">
                    <img
                        src="/homehero.png"
                        alt="About Us Background"
                        className="absolute inset-0 w-full lg:min-h-screen h-full object-cover "
                    />
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-[#1D2736]/50"></div>

                    {/* Text Content (Above Overlay) */}
                    <div className="absolute inset-0 flex flex-col !items-center justify-center text-center px-4 gap-10">
                        <h1 className={`text-white text-3xl lg:text-5xl 2xl:text-7xl ${language === "en" ? "" : "text-5xl md:text-7xl"}`}>
                            {t("Precision") + " " + t("Innovation")} <br /> {t("Excellence")}
                        </h1>
                        <p className={`text-white text-lg md:text-xl mt-2 max-w-[90%] md:max-w-[60%]  ${language === "ar" ? "font-noto md:!text-2xl !text-xl" : "font-sans"}`}>
                            {t("HomeHeroDesc1")} <br /> {t("HomeHeroDesc2")}
                        </p>
                        <Link to="products" smooth={true} duration={800} offset={-30} className="cursor-pointer" >
                            <div className={`bg-white bg-opacity-10 text-white text-center px-10 py-2 rounded hover:bg-opacity-20 transition w-fit ${language === "ar" ? "font-noto md:!text-2xl !text-xl" : "font-sans"}`}>
                                {t("Explore Our Products")}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <ProductSection />


        </>
    );
}

export default Home;
