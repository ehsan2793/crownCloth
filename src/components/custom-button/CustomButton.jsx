import React from "react";
import "./custome-button.scss";
const CustomButton = ({ children, ...props }) => {
  return (
    <button {...props} className="custom-button">
      {children}
    </button>
  );
};

export default CustomButton;
