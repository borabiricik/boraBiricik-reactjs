import React from "react";
import { IProductInfoProps } from "../../../../Types/Components/ProductsCard";

const ProductInfo = (props: IProductInfoProps) => {
  const { product } = props;
  return (
    <div className="p-3">
      <p className="font-semibold text-sm">
        {product && product?.name.length > 35
          ? product?.name.substring(0, 35) + "..."
          : product?.name}
      </p>
      <p className="font-bold mt-2">$ {product?.price}</p>
    </div>
  );
};

export default ProductInfo;
