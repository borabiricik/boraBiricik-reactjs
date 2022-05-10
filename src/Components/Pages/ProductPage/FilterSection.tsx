import React from "react";
import { useAppSelector } from "../../../Stores/Hooks";
import CategoryFilterInput from "./CategoryFilterInput";
import KeywordFilterInput from "./KeywordFilterInput";

const FilterSection = () => {
  const { categories } = useAppSelector((state) => state.category);

  if (categories) {
    return (
      <div className="flex justify-between">
        <KeywordFilterInput />
        <CategoryFilterInput />
      </div>
    );
  }
  return null;
};

export default FilterSection;
