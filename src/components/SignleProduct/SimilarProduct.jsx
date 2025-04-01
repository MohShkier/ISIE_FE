import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


function SimilarProducts({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get current product ID from URL
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };
  useEffect(() => {
    if (!categoryId) return;

    const fetchSimilarProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://isie-management-system.onrender.com/api/categories/${categoryId}/products`);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [categoryId]);

  console.log(products)
  return (
    <div className="w-full flex flex-col items-center !mb-20">
      <div className="flex items-center w-full max-w-7xl px-4">
      <div className="flex-grow border-t border-gray-400"></div>
          <h2 className="mx-4  text-gray-800 text-3xl xl:text-5xl ">{t("Similar Products")}</h2>
          <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {loading ? (
        <p className="mt-10 text-lg text-gray-700">Loading similar products...</p>
      ) : error ? (
        <p className="mt-10 text-lg text-red-500">{error}</p>
      ) : products.length === 0 ? (
        <p className="mt-10 text-lg text-gray-500">No similar products found.</p>
      ) : (
        <>
          <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 w-full max-w-7xl px-6 sm:px-12">
            {products.products
              .filter((product ) => product._id !== id)
              .slice(0, 3)
              .map((product,index) => (
                <motion.div
                  key={product._id}
                  variants={fadeInUpVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="bg-[#1D27361A] rounded-lg  p-2 sm:p-6 flex flex-col items-center"
                >
                  <Link to={`/product-details/${product._id}`} className="block w-full">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-full rounded-lg object-contain mb-4"
                    />
                  </Link>

                  <h2 className=" text-sm md:text-lg lg:text-xl font-semibold mb-4 text-center sm:mt-6 mt-2">
                    {language === "en" ? product.name : product.nameAr}
                  </h2>

                  <Link to={`/product-details/${product._id}`} className="w-full">
                    <div className="w-full flex justify-center">
                      <div className={`bg-[#1E293B] text-white font-tajwal text-xs px-3 py-2 lg:text-xl text-center lg:px-6 lg:py-2 rounded hover:bg-[#334155] transition ${language === "en" ? "!font-sans" : "!font-noto"}`}>
                        {t("More Details")}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          {products.products.length > 4 && (
            <div className="w-full max-w-7xl px-12 flex justify-center mt-10">
              <div className="border-[#1D2736] border-[1px] cursor-pointer rounded-[45px] w-[10rem] transition-all duration-300 text-black hover:text-white hover:bg-[#1D2736] text-center px-8 text-[16px] py-2 hover:scale-110">
                <Link
                  to={`/category-details/${products.category._id}`}
                  onClick={() => setTimeout(() => window.location.reload(), 100)}
                >
                  <p className="text-center">Show More</p>
                </Link>

              </div>
            </div>
          )}
        </>
      )}
    </div>

  );
}

export default SimilarProducts;
