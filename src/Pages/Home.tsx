import React, { useEffect } from "react";
import ProductCard from "../Components/Pages/ProductPage/ProductCard/ProductCard";
import Products from "../Components/Pages/ProductPage/Products";
import FAB from "../Components/Root/FAB";
import Loading from "../Components/Root/Loading";
import { getCategories } from "../Stores/categoryStore";
import { useAppSelector, useAppThunkDispatch } from "../Stores/Hooks";
import { getProducts } from "../Stores/productStore";

const Home = () => {
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    //eslint-disable-next-line
  }, []);

  return <Products />;
};

export default Home;
