import { NavLink } from "react-router-dom";
import { setLoginSignUpDisplay } from "../layouts/LoginRegistrationLayout";

const LoginSignUpForm: React.FC<{
  title: string;
  pageLocation: string;
  btnText: string;
}> = (props) => {

  const toggleSignUp = setLoginSignUpDisplay();

  return (
    <div className="flex w-full justify-center items-center">
      <section className="flex flex-col justify-center items-center bg-white rounded-lg p-3">
        <h1 className="text-2xl font-semibold m-3">{props.title}</h1>
        <form action="" className="flex flex-col justify-center items-start">
          <fieldset className="flex flex-col justify-center items-start">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="font-normal focus:outline-none focus:ring focus:ring-emerald-100"/>
            <p>Error</p>
          </fieldset>
          <fieldset className="flex flex-col justify-center items-start">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="font-normal focus:outline-none focus:ring focus:ring-emerald-100"/>
            <p>Error</p>
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
