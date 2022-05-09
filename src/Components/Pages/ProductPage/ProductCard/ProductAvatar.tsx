import React from "react";
import { IProductAvatarProps } from "../../../../Types/Components/ProductsCard";

const ProductAvatar = (props: IProductAvatarProps) => {
    const {product} = props
  return (
    <div className=" bg-white rounded-2xl">
      <img      
        className="h-56 mx-auto p-5 object-contain"
        src={product?.avatar}
        alt="Product Avatar"
      />
    </div>
  );
};

export default ProductAvatar;
