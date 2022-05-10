import React from "react";
import { useAppSelector } from "../../../../Stores/Hooks";

const DetailsBody = () => {
  const { currentProduct } = useAppSelector((state) => state.products);
  return (
    <div className="py-5">
      <h4 className="font-bold text-2xl pb-2">Description</h4>
      <p>{currentProduct?.description}</p>
    </div>
  );
};

export default DetailsBody;
