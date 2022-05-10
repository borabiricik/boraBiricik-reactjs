import React from "react";
import { useAppSelector } from "../../../Stores/Hooks";
import FAB from "../../Root/FAB";
import Loading from "../../Root/Loading";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const { products, filteredProducts } = useAppSelector(
    (state) => state.products
  );

  const { categories } = useAppSelector((state) => state.category);

  if (products && categories) {
    return (
      <div className="container mx-auto sm:px-0 lg:px-72 ">
        <FilterSection />
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-10">
          {filteredProducts
            ? filteredProducts?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            : products?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </div>
        <FAB />
      </div>
    );
  }
  return <Loading />;
};

export default Products;
