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
        const response = await fetch(`https://isie-management-system.onrender.com/api/products/${id}`); // Ensure this API endpoint is correct
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
    console.log(product)
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <ProductImgSwiper product={product.product}/>
      <SimilarProducts categoryId={product.product.category._id}/>
    </>
  );
};

export default ProductsDetails;
