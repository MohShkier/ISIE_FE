import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css"
import ClientItem from "./clientItem";
const OurClient = () => {
  return (
    <>
      <div className="flex justify-center items-center xl:mt-24 mt-10 mb-32">
        <div className="w-[95%] max-w-7xl p-4  relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: true }}
            spaceBetween={40}
            breakpoints={{
              310: { slidesPerView: 2 },
              510: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
              1536: { slidesPerView: 4 },
            }}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            loop={true}
          

            className="w-full relative p-[1.6rem]"
          >
            <SwiperSlide className="relative">

              <ClientItem imgSrc={"dunlop.png"} title={"Dunlop"} />


            </SwiperSlide>
            <SwiperSlide>

              <ClientItem imgSrc={"jotun.png"} title={"Jotun"} />
            </SwiperSlide>
            <SwiperSlide>

              <ClientItem imgSrc={"durra.png"} title={"AL Durrah"} />
            </SwiperSlide>
            <SwiperSlide>

              <ClientItem imgSrc={"alreef.png"} title={"Alreef"} />
            </SwiperSlide>
            <SwiperSlide>

              <ClientItem imgSrc={"kasih.png"} title={"AL KASIH"} />
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center flex-row gap-12 mt-8">
          <button className="custom-prev  bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg  hover:bg-gray-700 transition">
          ❮
          </button>
          <button className="custom-next    bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg  hover:bg-gray-700 transition">
            ❯
          </button>
          </div>

          {/* Centered Pagination Dots Below Swiper */}
        </div>
      </div>



      <script src="https://kit.fontawesome.com/YOUR_KIT_CODE.js" crossorigin="anonymous"></script>

    </>
  );
};

export default OurClient;
