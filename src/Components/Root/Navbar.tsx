import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-16 my-16 container xl:px-60 mx-auto">
      <div className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center">
        <a
          href="https://upayments.com"
          target={"_blank"}
          className="font-bold tracking-wider italic text-2xl"
        >
          UPayments Store
        </a>
        <Link
          to={"register"}
          className="font-bold tracking-wider italic text-2xl"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
