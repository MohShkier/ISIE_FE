import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
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

const SkeletonCard = () => (
  <div className="animate-pulse flex flex-col items-center">
    <div className="w-full h-48 bg-gray-300 rounded-3xl"></div>
    <div className="h-6 w-3/4 bg-gray-300 rounded mt-3"></div>
    <div className="h-10 w-2/3 bg-gray-300 rounded-full mt-4"></div>
  </div>
);

function CategoryDetails() {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Store total pages
  const { id } = useParams();
  const { t } = useTranslation();
  const { language } = useLanguage();
  useEffect(() => {
    if (!id) return;

    // Reset page when category changes
    setCurrentPage(1);
    setProducts([]);

    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);

        // Fetch category details
        const categoryResponse = await fetch(`https://isie-management-system.onrender.com/api/categories/${id}/products`);
        if (!categoryResponse.ok) throw new Error("Failed to fetch category details");
        const categoryData = await categoryResponse.json();
        setCategoryName(language === "en" ? categoryData.category.name : categoryData.category.nameAr);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);

        const productsResponse = await fetch(`https://isie-management-system.onrender.com/api/categories/${id}/products?page=${currentPage}`);
        if (!productsResponse.ok) throw new Error("Failed to fetch products");
        const productsData = await productsResponse.json();

        setProducts(productsData.products || []);
        setTotalPages(productsData.totalPages || 1); // Store total pages
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id, currentPage]);

  return (
    <div className="w-full flex flex-col items-center pt-36 lg:pt-44 lg:mb-10 mb-20 min-h-screen">
      <div className="flex items-center w-full max-w-[1550px] mx-auto px-3 sm:px-12">
        <h2 className="lg:text-5xl text-3xl text-gray-800">
          {language === "ar" ? `${t("category")} : ${categoryName}` : `${t("category")} : ${categoryName}`}
        </h2>
      </div>


      <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-6 md:gap-8 w-full max-w-[1550px] sm:px-12 px-3 justify-items-center">
        {loading ? (
          [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
        ) : error ? (
          <p className="text-center text-red-500 mt-10">Error: {error}</p>
        ) : (
          products.map((product, index) => (
            <Link key={product._id} to={`/product-details/${product._id}`} className="flex flex-col justify-between items-center h-full">
              <motion.div
                key={product._id}
                variants={fadeInUpVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="bg-[#1D27361A] rounded-lg  p-2 sm:p-6 flex flex-col items-center"
              >
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full rounded-lg object-contain mb-4"
                />

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
            </Link>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-20 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={"bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 " + `${language === "ar" ? "mx-4" : null}`}
        >
                    {t("Previous")}
        </button>
        <span className="text-lg font-bold">{`${t("Page")} ${currentPage} ${t("of")} ${totalPages || 1}`}</span>
        <button
          onClick={() => currentPage < totalPages && setCurrentPage((prev) => prev + 1)}
          disabled={currentPage >= totalPages}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {t("Next")}
        </button>
      </div>

    </div>
  );
}

export default CategoryDetails;
