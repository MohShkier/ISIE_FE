import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
        setCategoryName(categoryData.category.name);
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
      <div className="flex items-center w-full max-w-7xl px-4">
        <h2 className="mx-4 text-5xl text-gray-800 font-[custom]] ml-10">
          {categoryName ? `Category: ${categoryName}` : "Our Products"}
        </h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-16 gap-x-6 gap-y-16 w-full max-w-7xl px-12">
        {loading ? (
          [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
        ) : error ? (
          <p className="text-center text-red-500 mt-10">Error: {error}</p>
        ) : (
          products.map((product) => (
            <Link key={product._id} to={`/product-details/${product._id}`} className="flex flex-col justify-between items-center h-full">
              <img
                src={product.thumbnail}
                className="lg:rounded-[2.5rem] rounded-[1.5rem] lg:shadow-[2px_2px_20px_2px_rgba(159,154,154,0.5)] shadow-[1px_1px_10px_1px_rgba(159,154,154,0.5)]"
                alt={product.name}
              />
              <p className="text-center font-bold pt-3 flex-grow">{product.name}</p>
              <div className="w-full flex justify-center mt-6">
                <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                  More Details
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-20 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-bold">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => currentPage < totalPages && setCurrentPage((prev) => prev + 1)}
          disabled={currentPage >= totalPages}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CategoryDetails;
