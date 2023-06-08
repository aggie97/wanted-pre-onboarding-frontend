import React from "react";

const SignUpPresenter = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signup-button">회원가입</button>
    </div>
  );
};

export default SignUpPresenter;
