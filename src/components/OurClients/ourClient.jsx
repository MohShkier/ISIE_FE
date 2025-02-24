import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/sponsors", {
          withCredentials: true,
        });
        setData(response.data); // Ensure this is an array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>

<div className="flex items-center w-full px-4 justify-center pt-24">
  <div className="flex items-center w-full max-w-7xl">
    <div className="flex-1 border-t border-gray-400"></div>
    <h2 className="mx-4 text-2xl xl:text-5xl text-gray-800">Our Client</h2>
    <div className="flex-1 border-t border-gray-400"></div>
  </div>
</div>

      <div className="flex justify-center items-center  mt-4 lg:mt-12 mb-32">
        <div className="w-[95%] max-w-7xl p-4 relative">
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
            {data.length > 0 ? (
              data.map((sponsor, index) => (
                <SwiperSlide key={index} className="relative">
                  <ClientItem imgSrc={sponsor.logoUrl} title={sponsor.name} />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-gray-500">No sponsors available</p>
            )}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center flex-row gap-12 mt-8">
            <button className="custom-prev bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition">
              ❮
            </button>
            <button className="custom-next bg-gray-800 text-white p-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition">
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
