import HeaderSwiper from "../Header/Swiper";
import OurClient from "../OurClients/ourClient";
import ProductSection from "../OurProductSection/OurProductSection";
import OurProductsPage from "../OurProductsPage/OurProductsPage";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-scroll';
function ProductsPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <>

      <div className="relative w-full ">
        {/* Background Image with Overlay */}
        <div className=" min-h-[350px] md:min-h-[550px] relative w-full mb-auto  flex justify-center !items-center ">
          <img
            src="/producthero.jpg"
            alt="About Us Background"
            className="absolute inset-0 w-full lg:min-h-[550px] h-full !object- md:!object-cover"
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-[#1D2736]/50"></div>

          {/* Text Content (Above Overlay) */}
          <div className="absolute inset-0 flex flex-col  items-center justify-end pb-10">
            <div className="w-[87%]">
              <h1 className={`text-white text-xl md:text-5xl  ${language === "en" ? "" : "text-5xl md:text-7xl"}`}>
                {t("ourProducts")} <br /> <br />{language === "en" ? "Home >>  Our Products" : "الرئيسية >> منتجاتنا"}
              </h1>
            </div>


          </div>
        </div>
      </div>

      <OurProductsPage />
    </>

  );
}

export default ProductsPage;
