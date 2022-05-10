import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

//Floating action button
const FAB = () => {
  return (
    <Link to={"/product/create"}>
      <div className="bg-black fixed right-5 bottom-5 rounded-full h-16 w-16 flex justify-center items-center">
        <AiOutlinePlus color="white" size={24} />
      </div>
    </Link>
  );
};

export default FAB;
