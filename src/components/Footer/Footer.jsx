import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-10 relative" dir="ltr">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start py-10">
          <div className="relative flex items-center justify-center w-44 h-32">
            <div className="absolute flex items-center justify-center">
              <img src="/logo1.png" alt="Company Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 items-center md:items-end">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <FaLocationDot className="text-[#4D98E5] size-5" />
            <span>عمان - الأردن</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <FaPhoneAlt className="text-[#4D98E5]" />
            <a href="tel:+962798337984" className="hover:text-gray-300 transition">+962798337984</a>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <HiOutlineMail className="text-[#4D98E5]" />
            <a href="mailto:info@ishraqitshams.com" className="hover:text-gray-300 transition">info@ishraqitshams.com</a>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center md:text-right space-y-4 font-[dubai]">
          <h2 className="text-xl font-semibold">شركة إشراقة شمس</h2>
          <h2 className="text-lg font-semibold">للتجهيزات الصناعية</h2>
          <hr className="border-t-2 border-[#4283C6] w-24 sm:w-32 md:w-48 mx-auto md:ml-auto md:mr-0" />
          <p className="leading-relaxed">شركة متخصصة بتصنيع وتركيب خطوط إنتاج</p>
          <p className="leading-relaxed">مكائن تعبئة وتغليف - حلول هندسية</p>
        </div>
      </div>

      {/* Gear Image Positioned to Bottom Right */}
      <img 
        src="gearFooter.png" 
        className="md:absolute right-0 bottom-0 size-28 hidden "
        alt="Gear Decoration"
      />
    </footer>
  );
};

export default Footer;

