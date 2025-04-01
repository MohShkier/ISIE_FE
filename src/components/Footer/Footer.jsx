import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0a192f] text-white py-10 relative max-lg:!pb-12">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
  
      {/* Logo Section */}
      <div className="flex justify-center md:justify-start py-5 md:py-10 mx-5 md:mx-10 ">
        <div className="relative flex items-center justify-center w-44 h-32">
          <img src="/logo1.png" alt="Ishraqit Shams Logo" className="w-full h-auto" />
        </div>
      </div>
  
      {/* Contact Info */}
      <div className="flex flex-col space-y-5 items-center md:items-start text-center sm:text-left  mt-5 md:mt-10 font-sans">
  
        <h2 className="text-xl font-semibold font-poppins">{t("ISIE")}</h2>
        <div className="flex flex-col items-start gap-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse ">
          <FaLocationDot className="text-[#4D98E5] size-5" />
          <span>{t("AmmanJordan")}</span>
        </div>
  
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaPhoneAlt className="text-[#4D98E5]" />
          <a href="tel:+962798337984" className="hover:text-gray-300 transition">+962 798 337 984</a>
        </div>
  
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <HiOutlineMail className="text-[#4D98E5]" />
          <a href="mailto:info@ishraqitshams.com" className="hover:text-gray-300 transition">info@ishraqitshams.com</a>
        </div>
        </div>
      </div>
  
      {/* Important Links */}
      <div className="flex flex-col space-y-4 items-center md:items-start mt-5 md:mt-10 font-sans ">
        <h2 className="text-xl font-semibold font-poppins">{t("ImportantLinks")}</h2>
  
       <div className="flex flex-col items-start gap-3">
       <a href="/" className="hover:text-[#4D98E5] transition">{t("home")}</a>
        <a href="/categories" className="hover:text-[#4D98E5] transition">{t("categories")}</a>
        <a href="/products" className="hover:text-[#4D98E5] transition">{t("ourProducts")}</a>
        <a href="/contactus" className="hover:text-[#4D98E5] transition">{t("contactUs")}</a>
        <a href="/about" className="hover:text-[#4D98E5] transition">{t("aboutUs")}</a>
       </div>
      </div>
    </div>
  
    {/* Gear Image Positioned to Bottom Right */}
    <img
      src="/gearFooter.png"
      className="md:absolute right-0 bottom-0 size-28 hidden md:block"
      alt="Gear Decoration"
    />
  </footer>
  
  );
};

export default Footer;

