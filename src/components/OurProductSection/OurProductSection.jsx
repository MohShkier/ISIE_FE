import React from "react";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProductSection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4 text-[#1D2736] text-2xl xl:text-5xl">Our Products</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <motion.div 
          className="mt-6 grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants}
        >
          {["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"].map((src, index) => (
            <motion.div key={index} variants={slideInVariants}>
              <img src={src} className="rounded-[2.5rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] w-full" />
              <p className="text-center font-bold pt-3">Product {index + 1}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="w-full max-w-7xl px-12 flex justify-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants}
        >
          <div className="border-[#1D2736] border-[1px] cursor-pointer rounded-[45px] w-[10rem] transition-all duration-300 text-black hover:text-white hover:bg-[#1D2736] text-center px-8 text-[16px] py-2 hover:scale-110">
            <p className="text-center">Show More</p> 
          </div>
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center mt-20 lg:mb-10 mb-20">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4  text-2xl xl:text-5xl text-gray-800 ">Categories</h2>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <motion.div 
          className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 w-full max-w-7xl px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants}
        >
          {["img1.jpeg", "img5.jpeg", "img6.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"].map((src, index) => (
            <motion.div key={index} className="flex flex-col justify-between items-center h-full" variants={slideInVariants}>
              <img src={src} className="rounded-3xl xl:rounded-[40px] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]" />
              <p className="text-center font-bold pt-3 flex-grow">Category {index + 1}</p>
              <div className="w-full flex justify-center mt-6">
                <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                  More Details
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default ProductSection;
