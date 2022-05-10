import React from "react";
import ReactSelect, { ActionMeta } from "react-select";
import { ICustomSelectProps } from "../../Types/Components/Common/CustomSelect";

const CustomSelect = ({ onChange, options, className }: ICustomSelectProps) => {
  return (
    <ReactSelect
      className={className}
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
      onChange={onChange}
      options={options}
    />
  );
};

export default CustomSelect;
