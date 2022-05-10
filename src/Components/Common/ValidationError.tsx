import React from "react";

const ValidationError = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => {
  const { children } = props;
  const elemProps = {...props}
  props.className && delete elemProps.className
  return <p {...elemProps} className={`${props.className} text-red-400 text-left text-sm`} >{children}</p>;
};

export default ValidationError;
