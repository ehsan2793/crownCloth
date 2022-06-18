import React from "react";
import "./sign-in-up.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
const SignInup = () => {
  return (
    <div className="sign-in-and-sign-up ">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInup;
