import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const slideInVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProductSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home", {
          withCredentials: true,
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4 text-[#1D2736] text-2xl xl:text-5xl">Our Products</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <motion.div
          className="mt-16 grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants}
        >
          {data?.featuredProducts && data.featuredProducts.length > 0 ? (
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
    viewport={{ once: true }}
    variants={slideInVariants}
  >
    {data?.categories && data.categories.length > 0 ? (
      data.categories.map((category, index) => (
        <motion.div key={index} variants={slideInVariants} className="flex flex-col items-center">
          <img
            src={category.thumbnail}
            alt={category.name}
            className="rounded-[2.5rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] w-full"
          />

          {/* Fixed height for category name to ensure consistency */}
          <p className="text-center font-bold pt-3 min-h-[50px] flex items-center justify-center">
            {category.name}
          </p>

          {/* Button Wrapper to Keep Alignment */}
          <div className="w-full flex justify-center mt-auto pt-8">
            <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
              More Details
            </div>
          </div>
        </motion.div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-full">No Categories available</p>
    )}
  </motion.div>
</div>

    </>
  );
};

export default ProductSection;
