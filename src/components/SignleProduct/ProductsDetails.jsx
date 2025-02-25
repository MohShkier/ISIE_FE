import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImgSwiper from "./ProductsImgSwiper";
import SimilarProducts from "./SimilarProduct";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://isie-management-system.onrender.com/api/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 pb-14 pt-44 flex justify-center min-h-screen">
        <div className="animate-pulse flex flex-col lg:flex-row items-center gap-10 w-full">
          {/* Image Skeleton */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="rounded-3xl xl:rounded-[40px] size-80 xl:size-96 bg-gray-300"></div>
          </div>

          {/* Text Skeleton */}
          <div className="w-full lg:w-1/2 p-6">
            <div className="h-8 w-3/4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>

            {/* Button Skeletons */}
            <div className="flex space-x-4 pt-10">
              <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-28 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="min-h-screen">
      <ProductImgSwiper product={product.product} />
      <SimilarProducts categoryId={product.product.category._id} />
    </div>
  );
};

export default ProductsDetails;
