import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsBody from "../Components/Pages/DetailsPage/DetailsBody/DetailsBody";
import DetailsHeader from "../Components/Pages/DetailsPage/DetailsHeader";
import Loading from "../Components/Root/Loading";

import { useAppSelector, useAppThunkDispatch } from "../Stores/Hooks";
import { getProductById } from "../Stores/productStore";

const Details = () => {
  const { id } = useParams();
  const dispatch = useAppThunkDispatch();
  const { currentProduct } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById({ id }));
  }, []);

  if (currentProduct) {
    return (
      <div>
        <DetailsHeader />
        <DetailsBody />
      </div>
    );
  }
  return <Loading />;
};

export default Details;
