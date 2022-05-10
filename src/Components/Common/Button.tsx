import React from "react";

const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const elemProps = { ...props };
  elemProps.className && delete elemProps.className;
  const { children } = elemProps;
  return (
    <button {...elemProps} className={`${props.className} bg-white w-5/12 p-3 rounded-md shadow-md`}>
      {children}
    </button>
  );
};

export default Button;
