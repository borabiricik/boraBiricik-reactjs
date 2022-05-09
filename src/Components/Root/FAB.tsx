import React from "react";
import {AiOutlinePlus} from "react-icons/ai"

//Floating action button
const FAB = () => {
  return (
    <div className="bg-black fixed right-5 bottom-5 rounded-full h-16 w-16 flex justify-center items-center">
      <AiOutlinePlus color="white" size={24} />
    </div>
  );
};

export default FAB;
