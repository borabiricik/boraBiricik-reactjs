import { Formik } from "formik";
import React from "react";
import { useAppDispatch } from "../../../Stores/Hooks";
import { filterProductsByKeyword } from "../../../Stores/productStore";
import Input from "../../Root/Forms/Input";

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterProductsByKeyword(e.target.value));
  };
  return (
    <div className="flex justify-between">
      <Input onChange={handleFilter} name="keyword" placeholder="Keyword" />
      <Input name="keyword" placeholder="Categories" />
    </div>
  );
};

export default FilterSection;
