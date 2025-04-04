import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from "react-i18next";

const slideInVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Skeleton Component
const SkeletonCard = () => (
  <div className="animate-pulse flex flex-col items-center">
    <div className="w-full h-48 bg-gray-300 rounded-[2.5rem]"></div>
    <div className="h-6 w-3/4 bg-gray-300 rounded mt-3"></div>
    <div className="h-10 w-2/3 bg-gray-300 rounded-full mt-4"></div>
  </div>
);

function CategoryPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://isie-management-system.onrender.com/api/home", {
          withCredentials: true, // Allows cookies/session handling if needed
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="relative w-full ">
        {/* Background Image with Overlay */}
        <div className=" min-h-[350px] md:min-h-[550px] relative w-full mb-auto  flex justify-center !items-center ">
          <img
            src="/producthero.jpg"
            alt="About Us Background"
            className="absolute inset-0 w-full lg:min-h-[550px] h-full !object-cover md:!object-cover"
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-[#1D2736]/50"></div>

          {/* Text Content (Above Overlay) */}
          <div className="absolute inset-0 flex flex-col  items-center justify-end pb-10">
            <div className="w-[87%]">
              <h1 className={`text-white text-xl md:text-4xl  `}>
              {t("ourProducts")}
              <br /> <br />{language === "en" ? `Home >> Our Products` : ` الرئيسية >> منتجاتنا`}
              </h1>
            </div>


          </div>
        </div>
      </div>

    <div className="w-full flex flex-col items-center  lg:mb-10 mb-20 ">


      <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-6 md:gap-8 w-full max-w-[1550px] sm:px-12 px-3">
        {loading ? (
          // Show skeleton loader while loading
          [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
        ) : error ? (
          <p className="text-center text-red-500 col-span-full">Error: {error}</p>
        ) : data?.categories && Array.isArray(data.categories) && data.categories.length > 0 ? (
          data.categories.map((category, index) => (
            <motion.div
              key={category._id}
              variants={slideInVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="bg-[#1D27361A] rounded-lg  p-2 sm:p-6 flex flex-col items-center flex-grow"
            >
              <Link to={`/category-details/${category._id}`} className="block w-full">
                <img
                  src={category.thumbnail}
                  alt={category.name}
                  className="w-full rounded-lg object-contain mb-4"
                />
              </Link>

              <h2 className=" text-sm md:text-lg lg:text-xl font-semibold mb-4 text-center sm:mt-6 mt-2">
                {language === "en" ? category.name : category.nameAr}
              </h2>

              <Link to={`/category-details/${category._id}`} className="w-full mt-auto">
                <div className="w-full flex justify-center">
                  <div className={`bg-[#1E293B] text-white font-tajwal text-xs px-3 py-2 lg:text-xl text-center lg:px-6 lg:py-2 rounded hover:bg-[#334155] transition ${language === "en" ? "!font-sans" : "!font-noto"}`}>
                    {t("showProducts")}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No Categories available</p>
        )}
      </div>
    </div>
    </>
  );
}

export default CategoryPage;
