import React from "react";
import DetailsAvatar from "./DetailsHeader/DetailsAvatar";
import DetailsInfo from "./DetailsHeader/DetailsInfo";

const DetailsHeader = () => {
  return (
    <div className="md:flex border-b-2 border-b-black pb-8 px-2">
      <DetailsAvatar />
      <DetailsInfo />
    </div>
  );
};

export default DetailsHeader;
