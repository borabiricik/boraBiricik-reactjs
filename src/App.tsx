import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Root/Navbar";
import { routes } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto sm:px-0 lg:px-72">
          <Routes >
            {routes.map((route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
