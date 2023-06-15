import Button from '../../common/button';
import Input from '../../common/input';
import * as S from './Auth.styles';

const AuthPresenter = (props) => {
  return (
    <S.AuthWrapper>
      <h1>{props.isSignIn ? '로그인' : '회원가입'}</h1>
      <form>
        <Input
          testId="email-input"
          type="email"
          label="email"
          onChange={props.onChangeFormData}
          value={props.formData.email}
        />
        {!props.isValid.email && <p>@를 반드시 포함시켜 주세요.</p>}
        <Input
          testId="password-input"
          type="password"
          label="password"
          onChange={props.onChangeFormData}
          value={props.formData.password}
        />
        {!props.isValid.password && <p>8자리 이상 입력해주세요.</p>}
        <Button
          testId={props.isSignIn ? 'signin-button' : 'signup-button'}
          onClick={props.onSubmit}
          disabled={!(props.isValid.email && props.isValid.password)}
          text={props.isSignIn ? '로그인' : '회원가입'}
        />
      </form>
    </S.AuthWrapper>
  );
};

export default AuthPresenter;
