import React from "react";
import { IButtonProps } from "../model/types";

const Button: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <button className="user-btn" type="button" onClick={onClick}>
      Get random user
    </button>
  );
};

export default Button;
