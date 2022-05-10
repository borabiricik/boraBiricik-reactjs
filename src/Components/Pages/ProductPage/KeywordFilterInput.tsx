import React from "react";
import { useAppDispatch } from "../../../Stores/Hooks";
import { filterProductsByKeyword } from "../../../Stores/productStore";
import Input from "../../Root/Forms/Input";

const KeywordFilterInput = () => {
  const dispatch = useAppDispatch();
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterProductsByKeyword(e.target.value));
  };
  return (
    <Input
      data-testid="keyword-filter-input"
      onChange={handleFilter}
      name="keyword"
      placeholder="Keyword"
      className="w-6/12"
    />
  );
};

export default KeywordFilterInput;
