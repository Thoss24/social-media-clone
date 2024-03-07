import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LoginRegistrationLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/create-account"}>Create Account</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoginRegistrationLayout;
