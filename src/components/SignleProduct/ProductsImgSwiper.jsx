import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp, FaPhone } from "react-icons/fa";


function ProductImgSwiper() {

  const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg",]
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <div className="container mx-auto px-4 py-10 flex justify-center mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image & Swiper Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative mb-6 flex justify-center">
            <img
              src={images[selectedImageIndex]}
              className="rounded-3xl xl:rounded-[40px] size-80 xl:size-96 shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]"
              alt="Selected product"
            />
          </div>

          {/* Swiper Carousel */}
          <Swiper
            className="xl:max-w-[20rem] max-w-[16rem] p-4"
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
            {images.map((image, index) => (
              <SwiperSlide key={image.id} onClick={() => handleImageClick(index)}>
                <img
                  src={images[index]}
                  className="custom-rounded-thumb !w-full shadow-[1px_1px_20px_1px_rgba(0,0,0,0.25)] rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center flex-row gap-12 mt-8">
            <button className="custom-prev bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg z-10 hover:bg-gray-700 transition">
              ❮
            </button>
            <button className="custom-next bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg z-10 hover:bg-gray-700 transition">
              ❯
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-6 text-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-16">ماكينة تعبئة حبوب</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>تم تصميم هذه الماكينة لتعبئة جميع أنواع الحبوبات مثل الأرز، السكر، البذور والمكسرات.</p>
            <p>تتميز الماكينة بالبساطة في التصميم لسهولة الصيانة الدورية دون الحاجة إلى فني متخصص.</p>
            <p>توفر دقة عالية في الوزن لمنع تلف الحبوب أثناء التعبئة.</p>
            <p>سعة التعبئة تصل إلى 5 كجم.</p>
            <p>مصنوعة من مادة ستانلس 316 المقاوم للصدأ لتلبية معايير الصناعات الغذائية.</p>
            <p>تستخدم ماكينات CNC الحديثة لضمان دقة وجودة التصنيع.</p>
            <p>واجهة تحكم بشاشة لمس سريعة وسهلة الاستخدام.</p>
          </div>
        <div className="flex space-x-4 justify-end pt-10">
          {/* WhatsApp Button */}
          <button className="flex items-center space-x-2 bg-[#1D2736] text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-800 transition">
            <FaWhatsapp className="text-green-400 text-lg" />
            <span>Message</span>
          </button>

          {/* Call Button */}
          <button className="flex items-center space-x-2 border border-gray-500 text-gray-800 py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition">
            <FaPhone className="text-gray-600 text-lg" />
            <span>Call</span>
          </button>
        </div>
        </div>
      </div>
    </div>


  );
}

export default ProductImgSwiper;
