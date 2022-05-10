import { Formik } from "formik";
import React from "react";
import ReactSelect, { SingleValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../../Stores/Hooks";
import {
  filterProductsByCategory,
  filterProductsByKeyword,
} from "../../../Stores/productStore";
import Input from "../../Root/Forms/Input";
import CategoryFilterInput from "./CategoryFilterInput";

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterProductsByKeyword(e.target.value));
  };

  const { categories } = useAppSelector((state) => state.category);

  if (categories) {
    return (
      <div className="flex justify-between">
        <Input
          onChange={handleFilter}
          name="keyword"
          placeholder="Keyword"
          className="w-6/12"
        />
        <CategoryFilterInput />
      </div>
    );
  }
  return null;
};

export default FilterSection;
