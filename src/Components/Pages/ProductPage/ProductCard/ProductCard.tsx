import React from "react";
import { Link } from "react-router-dom";
import { IProductCardProps } from "../../../../Types/Components/ProductsCard";
import ProductAvatar from "./ProductAvatar";
import ProductInfo from "./ProductInfo";

const ProductCard = (props: IProductCardProps) => {
  const { product } = props;
  return (
    <Link to={`/product/details/${product?.id}`}>
      <div className="flex flex-col">
        <ProductAvatar product={product} />
        <ProductInfo product={product} />
      </div>
    </Link>
  );
};

export default ProductCard;
