import React from "react";
import "./custome-button.scss";
const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      {...props}
      className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
