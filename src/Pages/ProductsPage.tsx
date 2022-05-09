import React from "react";
import ProductCard from "../Components/Pages/ProductPage/ProductCard/ProductCard";
import { useAppSelector } from "../Stores/Hooks";

const ProductsPage = () => {
  const products = useAppSelector((state) => state.products.products);
  return (
    <div className="container mx-auto">
      {products?.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductsPage;
