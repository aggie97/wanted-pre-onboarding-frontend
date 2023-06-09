import Input from "../../common/input";

const AuthPresenter = (props) => {
  return (
    <div>
      <h1>{props.isSignIn ? "로그인" : "회원가입"}</h1>
      <form>
        <Input
          testId="email-input"
          type="email"
          onChange={props.onChangeFormData}
        />
        <Input
          testId="password-input"
          type="password"
          onChange={props.onChangeFormData}
        />
        <button
          data-testid="signup-button"
          onClick={props.onSubmit}
          disabled={!props.isValid}
        >
          {props.isSignIn ? "로그인" : "회원가입"}
        </button>
      </form>
    </div>
  );
};

export default AuthPresenter;
