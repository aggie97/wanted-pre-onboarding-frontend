import React from "react";
import AuthContainer from "../components/units/auth/Auth.container";

const Auth = ({ isSignIn }) => {
  return <AuthContainer isSignIn={isSignIn} />;
};

export default Auth;
