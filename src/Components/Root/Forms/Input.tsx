import React from "react";
import TextOverflow from "../../../Utils/TextOverflow";

const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
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
    <input
      className={`${props.className} px-3 py-2 shadow-md rounded-md`}
      {...elemProps}
    />
  );
};

export default Input;
