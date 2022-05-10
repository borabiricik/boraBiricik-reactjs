import React from "react";
import { useAppSelector } from "../../../../Stores/Hooks";
import HeaderText from "../../../Common/HeaderText";

const DetailsInfo = () => {
  const { currentProduct } = useAppSelector((state) => state.products);
  return (
    <div className="flex flex-col justify-between md:px-5">
      <HeaderText className="text-3xl font-bold">{currentProduct?.name}</HeaderText>
      <HeaderText fontWeight="normal">$ {currentProduct?.price}</HeaderText>
    </div>
  );
};

export default DetailsInfo;
