import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function CategoryPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home", {
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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="w-full flex flex-col items-center mt-20 lg:mb-10 mb-20 min-h-screen pt-24">
      <div className="flex items-center w-full max-w-7xl px-4">
        <h2 className="mx-4 text-5xl text-gray-800 font-[gurajada] ml-10">Categories</h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-8 w-full max-w-7xl px-12">
        {data?.categories && Array.isArray(data.categories) && data.categories.length > 0 ? (
          data.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img
                src={category.thumbnail}
                alt={category.name}
                className="rounded-[2.5rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)] w-full"
              />

              {/* Category Name with Fixed Height */}
              <p className="text-center font-bold pt-3 min-h-[50px] flex items-center justify-center">
                {category.name}
              </p>

              {/* Button Wrapper to Keep Alignment */}
              <div className="w-full flex justify-center mt-auto pt-4">
                <div className="bg-[#1D2736] rounded-full text-white text-center px-6 py-2">
                  More Details
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No Categories available</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
