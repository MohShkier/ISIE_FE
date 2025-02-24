import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = ["banner.jpeg", "banner2.jpeg", "banner3.jpeg"];

const HeaderSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation variants
  const imageVariants = {
    initial: { opacity: 0, scale: 0.95, x: 50 },
    animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, x: -50, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center !bg-[#EEE] xl:pt-12 !pt-44 rounded-3xl"
    >
      <div className="w-[90%] p-4 rounded-3xl relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={1800} // Slower sliding duration (1.5s)
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          pagination={{ clickable: true }}

          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full relative rounded-3xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="relative flex justify-center">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.img
                    key={src} // Forces re-animation on slide change
                    src={src}
                    className="rounded-3xl w-full h-full object-cover shadow-lg"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  />
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
          
          <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"></div>

          {/* Custom Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:inline opacity-75 hover:opacity-100 custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1D2736] text-white p-2 px-4 rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
          >
            ❮
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:inline opacity-75 hover:opacity-100 custom-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1D2736] text-white p-2 px-4 rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
          >
            ❯
          </motion.button>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default HeaderSwiper;
