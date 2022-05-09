import React, { useEffect } from "react";
import { useAppThunkDispatch } from "./Stores/Hooks";
import { getProducts } from "./Stores/productStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "./Pages/Home";

function App() {
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getProducts());
    //eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
    
      <Routes>
        {routes.map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            );
          })}
        {/* <Route path="/products" element={<ProductsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
