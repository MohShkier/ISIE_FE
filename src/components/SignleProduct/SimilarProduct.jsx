import { useState, useEffect } from "react";

function SimilarProducts({ categoryId }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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


    return (
        <div className="w-full flex flex-col items-center mt-20 lg:mb-10 mb-20 !min-h-screen">
            <div className="flex items-center w-full max-w-7xl px-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <h2 className="mx-4 text-5xl text-gray-800 font-[gurajada]">Similar Products</h2>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {loading ? (
                <p className="mt-10 text-lg text-gray-700">Loading similar products...</p>
            ) : error ? (
                <p className="mt-10 text-lg text-red-500">{error}</p>
            ) : products.length === 0 ? (
                <p className="mt-10 text-lg text-gray-500">No similar products found.</p>
            ) : (
                <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 w-full max-w-7xl px-12">
                    {products.products.map((product) => (
                        <div key={product._id} className="flex flex-col justify-between items-center h-full">
                            <img
                                src={product.thumbnail || "placeholder.jpg"}
                                alt={product.name}
                                className="rounded-3xl xl:rounded-[40px] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]"
                            />
                            <p className="text-center font-bold pt-3 flex-grow">{product.name}</p>
                            <div className="w-full flex justify-center mt-6">
                                <div className="bg-[#1D2736] rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                                    More Details
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="w-full max-w-7xl px-12 flex justify-center mt-10">
                <div className="border-[#1D2736] border-[1px] cursor-pointer rounded-[45px] w-[10rem] transition-all duration-300 text-black hover:text-white hover:bg-[#1D2736] text-center px-8 text-[16px] py-2 hover:scale-110">
                    <p className="text-center">Show More</p>
                </div>
            </div>
        </div>
    );
}

export default SimilarProducts;
