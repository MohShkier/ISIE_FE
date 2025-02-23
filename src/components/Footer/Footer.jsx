import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-8">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <div className="relative flex items-center justify-center w-44 h-32">
            <div className="absolute  flex items-center justify-center">
              <img src="logo1.png"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-center md:items-end">
              
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>عمان - الأردن</span>
              <FaLocationDot className="text-[#4D98E5] size-5"/>

            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <a href="tel:+962798337984">+962798337984</a>
              <FaPhoneAlt className="text-[#4D98E5]"/>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <a href="mailto:info@ishraqitshams.com"><span>info@ishraqitshams.com</span></a>
              <HiOutlineMail className="text-[#4D98E5]"/>
            </div>
          </div>
        {/* Company Info */}
        <div className="space-y-3 text-center md:text-right font-[dubai]">
          <h2 className="text-lg font-semibold">شركة إشراقة شمس </h2>
          <h2 className="text-lg font-semibold">للتجهيزات الصناعية</h2>
          <hr className=" border-t-2 border-[#4283C6]  ml-auto w-48 border-2" />
          <p>شركة متخصصة بتصنيع</p>
          <p>وتركيب خطوط إنتاج - مكائن</p>
          <p>تعبئة وتغليف - حلول هندسية</p>

          {/* Contact Info */}

        {/* Links Section */}
        
      </div>
        
        </div>
        
    </footer>
  );
};

export default Footer;
