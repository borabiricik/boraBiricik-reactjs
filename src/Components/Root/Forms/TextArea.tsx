import React from "react";

const TextArea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  let elemProps = { ...props };
  props.className && delete elemProps.className;

  return <textarea {...elemProps} className={`${props.className} px-3 py-2 shadow-md rounded-md`}></textarea>;
};

export default TextArea;
