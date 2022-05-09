import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="bg-opacity-50 bg-black fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <HashLoader color="black" loading />
    </div>
  );
};

export default Loading;
