import React from "react";
import { IProductCardProps } from "../../../../Types/Components/ProductsCard";

const ProductCard = (props: IProductCardProps) => {
  const { product } = props;
  return <div>{product?.name}</div>;
};

export default ProductCard;
