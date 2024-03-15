import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import LoginSignUpAside from "../login-sign-up-pages/LoginSignUpAside";

const LoginRegistrationLayout = () => {
  
  const location = useLocation();

  const asideControls = useAnimationControls();
  const outletControls = useAnimationControls();

  const createAccountDisplayHandler = () => {
    asideControls.start({
      x: "150%",
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    });
    outletControls.start({
      x: "-70%",
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    });
  };

  const loginDisplayHandler = () => {
    asideControls.start({
      x: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    });
    outletControls.start({
      x: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    });
  };

  return (
    <div className="h-dvh flex flex-col sm:flex-row font sm:text-black bg-emerald-400 sm:bg-white font-semibold justify-center items-center">
      <motion.div
        id="login-sign-up-aside"
        animate={asideControls}
        className="sm:flex hidden justify-center flex-col items-center w-full sm:w-2/5 bg-emerald-400 sm:h-dvh"
      >
        {location.pathname === "/" ? (
          <LoginSignUpAside
            title={"Welcome back!"}
            body={"Don't have an account yet? Sign up below!"}
            asideDisplayHandler={createAccountDisplayHandler}
            pageLocation={"/create-account"}
            btnText={"Sign up"}
          />
        ) : (
          <LoginSignUpAside
            title={"Hey!"}
            body={"Already have an account? Login below!"}
            asideDisplayHandler={loginDisplayHandler}
            pageLocation={"/"}
            btnText={"Login"}
          />
        )}
      </motion.div>

      <motion.div
        animate={outletControls}
        className="w-full sm:w-3/5 hidden sm:flex"
      >
        <Outlet />
      </motion.div>

      <motion.div className="w-full sm:w-3/5 sm:hidden flex">
        <Outlet context={createAccountDisplayHandler}/>
      </motion.div>
    </div>
  );
};

export default LoginRegistrationLayout;

