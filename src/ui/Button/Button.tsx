import React, { FC } from "react";

import style from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};
