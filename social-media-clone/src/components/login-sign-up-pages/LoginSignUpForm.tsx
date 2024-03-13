import { NavLink } from "react-router-dom";
import { setLoginSignUpDisplay } from "../layouts/LoginRegistrationLayout";
import useValidateInput from "../../hooks/useValidateInput";
import useFormValidate from "../../hooks/useFormValidate";

const LoginSignUpForm: React.FC<{
  title: string;
  pageLocation: string;
  btnText: string;
}> = (props) => {

  const toggleSignUp = setLoginSignUpDisplay();

  const {
    validateEmail,
    validatePassword
  } = useValidateInput()

  const {
    inputIsValid: emailInputIsValid,
    inputIsInvalid: emailInputIsInvalid,
    updateInput: updateEmail,
    updateInputTouched: updateEmailIsTouched,
    resetInput: resetEmail
  } = useFormValidate(validateEmail)

  const {
    inputIsValid: passwordInputIsValid,
    inputIsInvalid: passwordInputIsInvalid,
    updateInput: updatePassword,
    updateInputTouched: updatePasswordIsTouched,
    resetInput: resetPassword
  } = useFormValidate(validatePassword)

  let formIsValid = false

  if (!passwordInputIsInvalid && !emailInputIsInvalid) {
    formIsValid = true
  }

  return (
    <div className="flex w-full justify-center items-center">
      <section className="flex flex-col justify-center items-center bg-white rounded-lg p-3">
        <h1 className="text-2xl font-semibold m-3">{props.title}</h1>
        <form action="" className="flex flex-col justify-center items-start">
          <fieldset className="flex flex-col justify-center items-start">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="font-normal focus:outline-none focus:ring focus:ring-emerald-100" onBlur={updateEmailIsTouched} onChange={updateEmail}/>
            <p className={`${emailInputIsInvalid ? "text-red-500" : "invisible"}`}>Error</p>
          </fieldset>
          <fieldset className="flex flex-col justify-center items-start">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="font-normal focus:outline-none focus:ring focus:ring-emerald-100" onBlur={updatePasswordIsTouched} onChange={updatePassword}/>
            <p className={`${passwordInputIsInvalid ? "text-red-500" : "invisible"}`}>Error</p>
          </fieldset>
          <div className="flex flex-row justify-between w-full">
            <button
              className="mt-3 rounded-lg bg-emerald-400 text-white p-1 hover:cursor-pointer hover:scale-105"
              type="submit"
            >
              {props.btnText}
            </button>
            {props.pageLocation === "/create-account" && (
              <NavLink to={props.pageLocation}>
                <button
                  className="mt-3 rounded-lg bg-emerald-400 text-white p-1 flex sm:hidden hover:cursor-pointer hover:scale-105"
                  type="submit"
                  onClick={toggleSignUp}
                  disabled={formIsValid ? true : false}
                >
                  Sign up
                </button>
              </NavLink>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginSignUpForm;
