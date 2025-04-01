import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import "./styles.css"
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from "react-i18next";
function ProductImgSwiper({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();

  
  return (
    <motion.div
      className="container mx-auto px-4 pb-6 lg:pt-44  pt-28 flex justify-center min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    
      <div className="flex flex-col lg:flex-row pt-12 gap-10">
        {/* Image & Swiper Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative mb-6 flex justify-center">
            <motion.img
              key={selectedImageIndex}
              src={product.images[selectedImageIndex]}
              className="rounded-3xl xl:rounded-[40px] size-80 xl:size-96 transition-opacity duration-500"
              alt={product.name}
            />
          </div>

          {/* Swiper Carousel */}
          <Swiper
            className="xl:max-w-[20rem] max-w-[16rem] p-4 overflow-hidden"
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            spaceBetween={20}
            breakpoints={{
              310: { slidesPerView: 2 },
              510: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            loop={true}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index} onClick={() => handleImageClick(index)}>
                <img
                  src={image}
                  className="cursor-pointer lg:rounded-[1rem] rounded-[1rem]  transition transform hover:scale-105 object-cover w-full h-full"
                  alt={`Thumbnail ${index + 1}`}
                />

              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center flex-row gap-12 mt-8">
            <button className="custom-prev bg-gray-800 text-white p-2 px-4 rounded-full  hover:bg-gray-700 transition">
              ❮
            </button>
            <button className="custom-next bg-gray-800 text-white p-2 px-4 rounded-full  hover:bg-gray-700 transition">
              ❯
            </button>
          </div>
        </div>

        {/* Product Details */}
        <motion.div
          className="w-full lg:w-1/2 p-6  "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 mb-6">
            {language === "en" ? product.name : product.nameAr}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-sans">
              {language === "en" ? product.description : product.descriptionAr}
          </p>

          <div className={"flex space-x-4 flex-col-reverse sm:flex-row  lg:justify-end justify-start pt-12 xl:pt-20 gap-3 sm:gap-0 " + `${language === "ar" ? "!gap-3" : null}`}>
          <a href="https://wa.me/+962798337984"> {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={"flex items-center space-x-2 bg-[#1D2736] text-white py-2 px-4 rounded-full  hover:bg-gray-800 transition " + `${language === "ar" ? "gap-2" : null}`}
            >
              <FaWhatsapp className="text-green-400 text-lg" />
              <span>{t("Message")}</span>

            </motion.button></a>

            {/* Call Button */}
            <a href="tel:+96264161314">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={"flex items-center space-x-2 border border-gray-500 text-gray-800 py-2 px-4 rounded-full  hover:bg-gray-100 transition " + `${language === "ar" ? "gap-2" : null}` }
            >
              <FaPhoneAlt className="text-gray-600 text-lg" />
              <span>{t("Call")}</span>
            </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductImgSwiper;
