import React, { useEffect } from "react";
import ProductsPage from "./Pages/ProductsPage";
import { useAppThunkDispatch } from "./Stores/Hooks";
import { getProducts } from "./Stores/productStore";
import { BrowserRouter, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getProducts());
    //eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      {routes.map((route) => {
        return <Route  path={route.path} element={<ProductsPage />} />;
      })}
    </BrowserRouter>
  );
}

export default App;
