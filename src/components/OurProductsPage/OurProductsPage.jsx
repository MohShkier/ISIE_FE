import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SkeletonCard = () => (
  <div className="animate-pulse flex flex-col items-center">
    <div className="w-full h-48 bg-gray-300 rounded-3xl"></div>
    <div className="h-6 w-3/4 bg-gray-300 rounded mt-3"></div>
    <div className="h-10 w-2/3 bg-gray-300 rounded-full mt-4"></div>
  </div>
);

function OurProductsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
              `https://isie-management-system.onrender.com/api/products?page=${currentPage}`,
          { withCredentials: true }
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="w-full flex flex-col items-center pt-36 lg:pt-44 lg:mb-10 mb-20 min-h-screen">
      <div className="flex items-center w-full max-w-7xl px-4">
        <h2 className="mx-4 text-5xl text-gray-800 font-[gurajada] ml-10">
          Our Products
        </h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-16 gap-x-6 gap-y-8 lg:gap-y-16 w-full max-w-7xl px-12">
        {loading ? (
          [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
        ) : error ? (
          <p className="text-center text-red-500 mt-10">Error: {error}</p>
        ) : (
          data?.products?.map((product) => (
            <Link key={product._id} to={`/product-details/${product._id}`} className="flex flex-col justify-between items-center h-full">
              <img
                src={product.thumbnail}
                className="lg:rounded-[2.5rem] rounded-[1.5rem]  lg:shadow-[2px_2px_20px_2px_rgba(159,154,154,0.5)] shadow-[1px_1px_10px_1px_rgba(159,154,154,0.5)]"
                alt={product.name}
              />
              <p className="text-center lg:font-semibold pt-3 min-h-[50px] flex items-center justify-center text-sm md:text-lg flex-grow">{product.name}</p>
              <div className="w-full lg:flex hidden justify-center mt-6">
                <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                  More Details
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="flex justify-center mt-20 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-bold">{`Page ${currentPage} of ${data?.totalPages || 1}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => (prev < data?.totalPages ? prev + 1 : prev))}
          disabled={currentPage >= data?.totalPages}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OurProductsPage;
