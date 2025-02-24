import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;


  return (
    <>
      <div className="w-full flex flex-col items-center pt-44 lg:mb-10 mb-20">
        <div className="flex items-center w-full max-w-7xl px-4">
          <h2 className="mx-4 text-5xl text-gray-800 font-[gurajada] ml-10">
            Our Products
          </h2>
        </div>

        {/* Products Grid */}

        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-16 gap-x-6 gap-y-16 w-full max-w-7xl px-12">
          {data?.products?.map((product, index) => (
        <Link to={`/product-details/${product._id}`}>
            <div key={index} className="flex flex-col justify-between items-center h-full">
              <img
                src={product.thumbnail}
                className="rounded-3xl xl:rounded-[40px] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]"
                alt={product.name}
              />
              <p className="text-center font-bold pt-3 flex-grow">{product.name}</p>
              <div className="w-full flex justify-center mt-6">
                <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                  More Details
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-20 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-bold">{`Page ${currentPage} of ${data?.totalPages}`}</span>
          <button
            onClick={() => setCurrentPage((prev) => (prev < data?.totalPages ? prev + 1 : prev))}
            disabled={currentPage >= data?.totalPages}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default OurProductsPage;
