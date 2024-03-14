import LoginSignUpForm from "../../components/login-sign-up-pages/LoginSignUpForm";

const CreateAccount = () => {
  return <LoginSignUpForm title={"Create Account"} pageLocation={"/"} btnText={"Sign up"} authErrMsg={"A user with those credentials already exists."}/>;
};

export default CreateAccount;
