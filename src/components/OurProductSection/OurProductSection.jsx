import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
  }),
=======
const slideInVariants = {
  hidden: { opacity: 1, x: 0 }, // Set opacity to 1 instead of 0
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
>>>>>>> c74c910ecc61d34807aeb7a43b464c1213ca7bb8
};


const ProductSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://isie-management-system.onrender.com/api/home', {
          withCredentials: true,
        });
<<<<<<< HEAD
        console.log("Fetched Data:", response.data);
=======
        console.log("Fetched Data:", response.data); // 🔍 Debugging line
>>>>>>> c74c910ecc61d34807aeb7a43b464c1213ca7bb8
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
<<<<<<< HEAD
=======
  
>>>>>>> c74c910ecc61d34807aeb7a43b464c1213ca7bb8

  return (
    <>
      {/* Products Section */}
      <div className="w-full flex flex-col items-center mt-10">
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
          className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <motion.div key={index} className="animate-pulse">
                  <div className="rounded-[2.5rem] bg-gray-300 h-40 w-full"></div>
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
                        className="rounded-[2.5rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] w-full"
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
      <div className="w-full flex flex-col items-center pt-44 lg:mb-10 mb-20">
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
  className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12 mt-16"
  initial="visible" // Ensure it starts visible
  whileInView="visible"
  viewport={{ once: false, amount: 0.1 }}
  variants={slideInVariants}
>

          {loading
            ? // Skeleton Loader
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="rounded-[2.5rem] bg-gray-300 h-40 w-full"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-3"></div>
                </div>
              ))
            : // Actual Products
              data?.featuredProducts && data.featuredProducts.length > 0 ? (
                data.featuredProducts.map((product, index) => (
                  <motion.div key={index} variants={slideInVariants}>
                    <Link to={`/product-details/${product._id}`}>
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="rounded-[2.5rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] w-full"
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

      <div className="w-full flex flex-col items-center pt-44 lg:mb-10 mb-20">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4 text-2xl xl:text-5xl text-gray-800">Categories</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <motion.div
          className="mt-16 grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {loading
<<<<<<< HEAD
            ? Array.from({ length: 4 }).map((_, index) => (
                <motion.div key={index} className="animate-pulse flex flex-col items-center">
                  <div className="rounded-[2.5rem] bg-gray-300 h-40 w-full"></div>
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
=======
            ? // Skeleton Loader
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="animate-pulse flex flex-col items-center">
                  <div className="rounded-[2.5rem] bg-gray-300 h-40 w-full"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-3"></div>
                  <div className="w-1/2 h-8 bg-gray-300 rounded mt-5"></div>
                </div>
              ))
            : // Actual Categories
              data?.categories && data.categories.length > 0 ? (
                data.categories.map((category, index) => (
                  <motion.div key={index} variants={slideInVariants} className="flex flex-col items-center">
>>>>>>> c74c910ecc61d34807aeb7a43b464c1213ca7bb8
                    <img
                      src={category.thumbnail}
                      alt={category.name}
                      className="rounded-[2.5rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] w-full"
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
