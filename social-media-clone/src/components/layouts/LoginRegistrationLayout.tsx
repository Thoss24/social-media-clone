import { Outlet, useLocation } from "react-router-dom";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const LoginRegistrationLayout = () => {
  const [isCreateAccountDisplaying, setIsCreateAccountDisplaying] =
    useState<boolean>(false);
  
  const [windowSize, setWindowSize] = useState<number>(0);

  const location = useLocation();

  const asideControls = useAnimationControls();
  const outletControls = useAnimationControls();

  const handleWindowWidthResize = useCallback(() => {
    setWindowSize(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidthResize)
    console.log(windowSize)
    return () => {
      window.removeEventListener('resize', handleWindowWidthResize)
    }
    
    // if (scrollX <= 580) {
    //   asideControls.start({
    //     x: 0
    //   })
    //   outletControls.start({
    //     x: 0
    //   })
    // }
  }, [handleWindowWidthResize])

  const createAccountDisplayHandler = () => {
      asideControls.start({
        x: "150%",
        opacity: [0.5, 1],
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      });
      outletControls.start({
        x: "-70%",
        opacity: [0.5, 1],
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      });
  };

  const handleAsideAnimationComplete = () => {
    const aside = document.getElementById('login-sign-up-aside') as HTMLDivElement;
    // aside.style.transform = ''
    console.log("test")
  }

  const loginDisplayHandler = () => {
    asideControls.start({
      x: 0,
      opacity: [0.5, 1],
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    });
    outletControls.start({
      x: 0,
      opacity: [0.5, 1],
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
        onAnimationComplete={handleAsideAnimationComplete}
        animate={asideControls}
        className="sm:flex hidden justify-center flex-col items-center w-full sm:w-2/5 bg-emerald-400 sm:h-dvh"
      >
        <h2 className="text-4xl text-white font-extrabold sm:visible m-1">
          Hey!
        </h2>
        <h3 className="text-xl text-center text-white font-extrabold sm:visible m-2">
          Don't have an account yet? Sign up below!
        </h3>
        {location.pathname === "/" ? (
          <button
            className="mt-3 rounded-lg text-emerald-400 bg-white sm:visible p-1"
            onClick={createAccountDisplayHandler}
          >
            <NavLink to={"/create-account"}>Sign up</NavLink>
          </button>
        ) : (
          <button
            className="mt-3 rounded-lg text-emerald-400 bg-white sm:visible p-1"
            onClick={loginDisplayHandler}
          >
            <NavLink to={"/"}>Login</NavLink>
          </button>
        )}
      </motion.div>
      <motion.div animate={outletControls} className="w-full sm:w-3/5">
        <Outlet />
      </motion.div>
    </div>
  );
};

export default LoginRegistrationLayout;
