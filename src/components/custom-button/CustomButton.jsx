import React from "react";
import "./custome-button.scss";
const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => {
  return (
    <button
      {...props}
      className={`
      ${inverted ? "inverted" : " "} 
      ${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
