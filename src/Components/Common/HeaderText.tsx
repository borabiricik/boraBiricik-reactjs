import classNames from "classnames";
import React from "react";
import { IHeaderTextProps } from "../../Types/Components/Common/HeaderText";

const HeaderText = (props: IHeaderTextProps) => {
  const { children } = props;

  return (
    <p className={`text-3xl ${props.className}`}>
      {children}
    </p>
  );
};

export default HeaderText;
