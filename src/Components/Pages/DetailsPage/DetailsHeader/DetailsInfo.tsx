import React from "react";
import { useAppSelector } from "../../../../Stores/Hooks";

const DetailsInfo = () => {
  const { currentProduct } = useAppSelector((state) => state.products);
  return (
    <div className="flex flex-col justify-between md:px-5">
      <h2 className="font-bold text-3xl">{currentProduct?.name}</h2>
      <p className="font-semibold text-2xl">$ {currentProduct?.price}</p>
    </div>
  );
};

export default DetailsInfo;
