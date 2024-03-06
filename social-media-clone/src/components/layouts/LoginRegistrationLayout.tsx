import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LoginRegistrationLayout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Login</NavLink></li>
                    <li><NavLink to={"/create-account"}>Create Account</NavLink></li>
                </ul>
            </nav>
            <main>
            <Outlet />
            </main>
        </div>
    )
};

export default LoginRegistrationLayout;