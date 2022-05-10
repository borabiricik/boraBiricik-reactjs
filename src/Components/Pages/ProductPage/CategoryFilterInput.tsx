import React from "react";
import ReactSelect, { SingleValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../../Stores/Hooks";
import { changeCategory, filterProducts } from "../../../Stores/productStore";
import CustomSelect from "../../Common/CustomSelect";

const CategoryFilterInput = () => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.category);
  const handleCategoryFilter = ({
    values,
  }: {
    values: SingleValue<{
      label: string;
      value: number;
    }>;
  }) => {
    dispatch(changeCategory(values?.label));
    dispatch(filterProducts());
  };
  if(categories){
    return (
      <div data-testid="category-filter-input" className="w-3/12">
        <CustomSelect
          options={categories.map((category) => {
            return { label: category.name, value: category.id };
          })}
          className={"w-5/12 my-3"}
          onChange={(values) => handleCategoryFilter({ values })}
        />
      </div>
    );
  }
  return null
};

export default CategoryFilterInput;
