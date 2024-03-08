import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LoginRegistrationLayout = () => {
  return (
    <div className="h-dvh flex flex-col sm:flex-row font sm:text-black bg-emerald-400 sm:bg-white font-semibold justify-center items-center">
      <aside className="sm:flex hidden justify-center flex-col items-center w-full sm:w-2/5 bg-emerald-400 sm:h-dvh">
        <h2 className="text-4xl text-white font-extrabold sm:visible m-1">Hey!</h2>
        <h3 className="text-xl text-center text-white font-extrabold sm:visible m-2">Don't have an account yet? Sign up below!</h3>
        <button className="mt-3 rounded-lg text-emerald-400 bg-white sm:visible p-1">Sign Up</button>
      </aside>
      <div className="w-full sm:w-3/5">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginRegistrationLayout;
