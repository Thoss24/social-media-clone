import { NavLink } from "react-router-dom";
import { setLoginSignUpDisplay } from "../../context/loginSignUpDisplayCtx";
import { FormEvent, useRef } from "react";
// import axios from "axios";
import axiosClient from "../../views/axios_client";
import axios from "axios";
import useValidateInput from "../../hooks/useValidateInput";
import useFormValidate from "../../hooks/useFormValidate"

const LoginSignUpForm: React.FC<{
  title: string;
  pageLocation: string;
  btnText: string;
  authErrMsg: string;
}> = (props) => {
  const toggleSignUp = setLoginSignUpDisplay();

  axiosClient.defaults.withCredentials = true

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const { validateEmail, validatePassword, passwordErr } = useValidateInput();

  const {
    inputIsValid: emailInputIsValid,
    inputIsInvalid: emailInputIsInvalid,
    updateInput: updateEmail,
    updateInputTouched: updateEmailIsTouched,
    resetInput: resetEmail,
  } = useFormValidate(validateEmail);

  const {
    inputIsValid: passwordInputIsValid,
    inputIsInvalid: passwordInputIsInvalid,
    updateInput: updatePassword,
    updateInputTouched: updatePasswordIsTouched,
    resetInput: resetPassword,
  } = useFormValidate(validatePassword);

  let formIsValid = false;

  passwordInputIsValid && emailInputIsValid
    ? (formIsValid = true)
    : (formIsValid = false);

  const loginSignUpHandler = (e: FormEvent) => {
    console.log(props.pageLocation)
    e.preventDefault();

    const loginUserInfo: {password: string, email: string} = {
      password: passwordRef.current!.value,
      email: emailRef.current!.value
    }

    const signUpUserInfo: {name: string, password: string, email: string} = {
      name: props.pageLocation === '/create-account' ? nameRef.current!.value : '',
      password: passwordRef.current!.value,
      email: emailRef.current!.value
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      if (props.pageLocation === '/') {
        axiosClient.post('/login', loginUserInfo)
        .then((response) => {
          console.log(response)
          //window.location.href = '/home'
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        axiosClient.post('/register', signUpUserInfo)
        .then((response) => {
          console.log(response)
          //window.location.href = '/home'
        })
        .catch((error) => {
          console.log(error);
        });
      }
    });
  };

  return (
    <div className="flex w-full justify-center items-center">
      <section className="flex flex-col justify-center items-center bg-white rounded-lg p-3 m-0.5">
        <h1 className="text-2xl font-semibold m-3">{props.title}</h1>
        <form action="" className="flex flex-col justify-center items-start" onSubmit={loginSignUpHandler}>
          {props.pageLocation === '/create-account' &&
          <fieldset className="flex flex-col justify-center items-start w-full">
            <label htmlFor="name">Name</label>
            <input
              ref={nameRef}
              className={`font-normal pl-1 focus:outline-none ring-1 focus:ring-2 w-full ring-black`}
              type="text"
              id="name"
            />
          </fieldset> }
          <fieldset className="flex flex-col justify-center items-start w-full">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className={`font-normal pl-1 focus:outline-none ring-1 focus:ring-2 w-full ${
                emailInputIsInvalid ? "ring-red-400" : "ring-black"
              }`}
              onBlur={updateEmailIsTouched}
              onChange={updateEmail}
            />
            <p
              className={`text-xs flex flex-wrap ${
                emailInputIsInvalid ? "text-red-500" : "invisible"
              }`}
            >
              Email must include '@'
            </p>
          </fieldset>
          <fieldset className="flex flex-col justify-center items-start w-full">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className={`font-normal pl-1 focus:outline-none ring-1 focus:ring-2 w-full ${
                passwordInputIsInvalid ? "ring-red-400" : "ring-black"
              }`}
              onBlur={updatePasswordIsTouched}
              onChange={updatePassword}
            />
            <p
              className={`text-xs flex flex-wrap ${
                passwordInputIsInvalid ? "text-red-500" : "invisible"
              }`}
            >
              Error: {passwordErr.err}
            </p>
          </fieldset>
          <div className="flex flex-row justify-between w-full">
            <button
              className={`mt-3 rounded-lg bg-emerald-400 text-white p-1 ${
                emailInputIsInvalid || passwordInputIsInvalid
                  ? "opacity-50"
                  : "bg-emerald-400 hover:cursor-pointer hover:scale-105"
              }`}
              type="submit"
              disabled={formIsValid ? false : true}
            >
              {props.btnText}
            </button>
            {props.pageLocation === "/create-account" && (
              <NavLink to={props.pageLocation}>
                <button
                  className={`mt-3 rounded-lg bg-emerald-400 text-white p-1 flex sm:hidden hover:cursor-pointer hover:scale-105`}
                  type="submit"
                  onClick={toggleSignUp}
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
