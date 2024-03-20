import LoginSignUpForm from "../../components/login-sign-up-pages/LoginSignUpForm";

const Login = () => {
  return <LoginSignUpForm title={"Login to your account"} pageLocation={'/'} btnText={"Login"} authErrMsg={"A user with those credentials does not exist."}/>;
};

export default Login;
