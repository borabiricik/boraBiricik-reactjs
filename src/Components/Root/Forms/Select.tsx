import React from "react";
import TextOverflow from "../../../Utils/TextOverflow";

const Select = (
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) => {
  const elemProps = { ...props };
  // Override ClassName
  props.className && delete elemProps.className;
  // Placeholder Text Overflow Handling
  elemProps.placeholder = TextOverflow({
    text: props.placeholder,
    characterCount: 30,
  });

  return (
    <select
      className={`${props.className} px-3 py-2 shadow-md rounded-md`}
      {...elemProps}
    >
        <option value="" disabled selected>Categories</option>
    </select>
  );
};

export default Select;
