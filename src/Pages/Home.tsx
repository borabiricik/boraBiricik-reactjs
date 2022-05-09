import React, { useEffect } from "react";
import ProductCard from "../Components/Pages/ProductPage/ProductCard/ProductCard";
import FAB from "../Components/Root/FAB";
import Loading from "../Components/Root/Loading";
import { useAppSelector, useAppThunkDispatch } from "../Stores/Hooks";
import { getProducts } from "../Stores/productStore";

const Home = () => {
  const { products, isLoading } = useAppSelector((state) => state.products);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getProducts());
    //eslint-disable-next-line
  }, []);
  if (!isLoading) {
    return (
      <>
        <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-10 sm:px-0 lg:px-72">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <FAB />
      </>
    );
  }
  return <Loading />;
};

export default Home;
