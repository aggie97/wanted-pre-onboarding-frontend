import React from "react";

const SignInpresenter = () => {
  return (
    <div>
      <h1>로그인</h1>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signin-button">로그인</button>
    </div>
  );
};

export default SignInpresenter;
