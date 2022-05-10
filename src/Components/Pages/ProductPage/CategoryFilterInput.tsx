import React from "react";
import ReactSelect, { SingleValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../../Stores/Hooks";
import { filterProducts } from "../../../Stores/productStore";

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
    dispatch(filterProducts(values?.label));
  };
  return (
    <div data-testid="category-filter-input" className="w-3/12">
      <ReactSelect
        placeholder="Categories"
        styles={{
          indicatorSeparator: () => ({
            display: "none",
          }),
          control: (styles) => ({
            ...styles,
            borderWidth: 0,
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
          }),
        }}
        onChange={(values) => handleCategoryFilter({ values })}
        options={categories?.map((category) => {
          return { label: category.name, value: parseInt(category.id) };
        })}
      />
    </div>
  );
};

export default CategoryFilterInput;
