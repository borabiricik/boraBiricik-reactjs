import React from "react";
import { useAppSelector } from "../../../../Stores/Hooks";

const DetailsAvatar = () => {
  const { currentProduct } = useAppSelector((state) => state.products);
  return (
    <div className="bg-white sm:w-full md:w-6/12 md:p-5 xl:w-4/12">
      <img
        className="rounded-lg mx-auto lg:p-5 object-contain"
        src={`${currentProduct?.avatar}`}
        alt="Product Avatar"
      />
    </div>
  );
};

export default DetailsAvatar;
