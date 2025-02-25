import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://isie-management-system.onrender.com/api/home", {
          withCredentials: true,
        });
        console.log("Fetched Data:", response.data);
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
      <div className="w-full flex flex-col items-center lg:mt-10 ">
        <motion.div
          className="flex items-center w-full max-w-7xl px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4 text-[#1D2736] text-2xl xl:text-5xl">Our Products</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12 lg:mt-16 mt-10"
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
                        className="lg:rounded-[2.5rem] rounded-[1.5rem] lg:shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] shadow-[0.5px_0.5px_40px_0.5px_rgba(0,0,0,0.25)] w-full"
                      />
                      <p className="text-center font-bold pt-3">{product.name}</p>
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
          className="flex items-center w-full max-w-7xl px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4 text-2xl xl:text-5xl text-gray-800">Categories</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </motion.div>

        <motion.div
          className="mt-16 grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <motion.div key={index} className="animate-pulse flex flex-col items-center">
                  <div className="rounded-[1.5rem] bg-gray-300 h-40 w-full"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-3"></div>
                  <div className="w-1/2 h-8 bg-gray-300 rounded mt-5"></div>
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
                    className="flex flex-col items-center"
                  >
                    <img
                      src={category.thumbnail}
                      alt={category.name}
                      className="lg:rounded-[2.5rem] rounded-[1.5rem] lg:shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] shadow-[0.5px_0.5px_20px_0.5px_rgba(0,0,0,0.25)] w-full"
                    />
                    <p className="text-center font-bold pt-3 min-h-[50px] flex items-center justify-center">
                      {category.name}
                    </p>
                    <div className="w-full flex justify-center mt-auto pt-8">
                      <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                        More Details
                      </div>
                    </div>
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
