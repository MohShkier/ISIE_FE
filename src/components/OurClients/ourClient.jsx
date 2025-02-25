import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import "./styles.css";
import ClientItem from "./clientItem";

const OurClient = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await axios.get("https://isie-management-system.onrender.com/api/sponsors", {
          withCredentials: true,
        });
        setData(response.data || []);
      } catch (err) {
        console.error("Error fetching sponsors:", err);
        setError("Failed to load sponsors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Section Title */}
      <div className="flex items-center w-full px-4 justify-center pt-24">
        <div className="flex items-center w-full max-w-7xl">
          <div className="flex-1 border-t border-gray-400"></div>
          <h2 className="mx-4 text-2xl xl:text-5xl text-gray-800">Our Clients</h2>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="flex justify-center items-center mt-4 lg:mt-12 mb-32">
        <div className="w-[95%] max-w-7xl p-4 relative">
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <p className="text-gray-500 animate-pulse">Loading sponsors...</p>
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : data.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
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
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (prevRef.current && nextRef.current) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
              loop={true}
              className="w-full relative p-[1.6rem]"
            >
              {data.map((sponsor, index) => (
                <SwiperSlide key={index} className="relative">
                  <ClientItem imgSrc={sponsor.logoUrl} title={sponsor.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">No sponsors available</p>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center flex-row gap-12 mt-8">
            <button
              ref={prevRef}
              className="custom-prev bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              ❮
            </button>
            <button
              ref={nextRef}
              className="custom-next bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
