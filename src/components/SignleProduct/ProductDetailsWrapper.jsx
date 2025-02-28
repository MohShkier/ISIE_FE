import { useParams } from "react-router-dom";
import ProductsDetails from "./ProductsDetails"; // Adjust the import path if needed

const ProductDetailsWrapper = () => {
  const { id } = useParams();
  return <ProductsDetails key={id} />;
};

export default ProductDetailsWrapper;
