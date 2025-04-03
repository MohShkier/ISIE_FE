import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../context/LanguageContext";
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ProductSection = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://isie-management-system.onrender.com/api/home", {
          withCredentials: true,
        });
        setData(response.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Products Section */}
      <div className="w-full flex flex-col items-center mt-10 " id="products">
        <motion.div
          className="flex items-center w-full max-w-[1550px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4  text-gray-800 text-3xl xl:text-5xl ">{t("ourProducts")}</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[1550px] sm:px-12 px-4 lg:mt-16 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
              <motion.div key={index} className="animate-pulse">
                <div className="rounded-[1.5rem] bg-gray-300 h-40 w-full"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-3"></div>
              </motion.div>
            ))
            : data?.featuredProducts?.length > 0 ? (
              data.featuredProducts.map((product, index) => (
                <motion.div key={product._id} variants={fadeInUpVariants} custom={index} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                  <Link to={`/product-details/${product._id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="rounded-sm  w-full"
                      loading="lazy"
                    />
                    <h2 className={`text-sm md:text-lg lg:text-xl font-semibold mb-4 text-center sm:mt-6 mt-2 `}>
                      {language === "en" ? product.name : product.nameAr}

                    </h2>
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No products available</p>
            )}
        </motion.div>
      </div>

      {/* Categories Section */}
      <div className="w-full flex flex-col items-center lg:pt-28  pt-12 lg:mb-10 mb-20">
        <motion.div
          className="flex items-center w-full  max-w-[1550px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4 text-gray-800 text-3xl xl:text-5xl ">{t("categories")}</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-6 md:gap-8 w-full max-w-[1550px] sm:px-12 px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
              <motion.div key={index} className="animate-pulse flex flex-col items-center">
                <div className="rounded-lg bg-gray-300 h-64 w-full"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-4"></div>
                <div className="w-1/2 h-10 bg-gray-300 rounded mt-5"></div>
              </motion.div>
            ))
            : data?.categories?.length > 0 ? (
              data.categories.map((category, index) => (
                <motion.div
                  key={category._id}
                  variants={fadeInUpVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="bg-[#1D27361A] rounded-lg  p-2 sm:p-6 flex flex-col items-center flex-grow"
                >
                  <Link to={`category-details/${category._id}`} className="block w-full">
                    <img
                      src={category.thumbnail}
                      alt={category.name}
                      className="w-full rounded-lg object-contain mb-4"
                      loading="lazy"

                    />
                  </Link>

                  <h2 className=" text-sm md:text-lg lg:text-xl font-semibold mb-4 text-center sm:mt-6 mt-2">
                    {language === "en" ? category.name : category.nameAr}
                  </h2>

                  <Link to={`category-details/${category._id}`} className="w-full mt-auto">
                    <div className="w-full flex justify-center">
                      <div className={`bg-[#1E293B] text-white font-tajwal text-xs px-3 py-2 lg:text-xl text-center lg:px-6 lg:py-2 rounded hover:bg-[#334155] transition ${language === "en" ? "!font-sans" : "!font-noto"}`}>
                        {t("showProducts")}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No categories available</p>
            )}
        </motion.div>
      </div>
    </>
  );
};

export default ProductSection;
