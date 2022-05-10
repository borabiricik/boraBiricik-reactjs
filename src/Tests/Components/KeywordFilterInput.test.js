import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import KeywordFilterInput from "../../Components/Pages/ProductPage/KeywordFilterInput";
import { store } from "../../Stores";

test("keyword input works correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <KeywordFilterInput />
    </Provider>
  );
  const input = getByTestId("keyword-filter-input");

  expect(input).toBeInTheDocument();
  expect(input.type).toEqual("text");
});

test("products works correctly after typing to input", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <KeywordFilterInput />
    </Provider>
  );
  const input = getByTestId("keyword-filter-input");
  userEvent.type(input, "mac");
});
