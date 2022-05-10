import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import CategoryFilterInput from "../../Components/Pages/ProductPage/CategoryFilterInput";
import { store } from "../../Stores";

test("input works correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CategoryFilterInput />
    </Provider>
  );
  expect(
    getByTestId("category-filter-input").childNodes[0]
  ).toBeInTheDocument();
  
});
