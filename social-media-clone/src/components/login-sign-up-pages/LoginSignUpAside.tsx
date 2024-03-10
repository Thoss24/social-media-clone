import { NavLink } from "react-router-dom"

const LoginSignUpAside: React.FC<{ asideDisplayHandler: () => void, title: string, body: string, pageLocation: string, btnText: string }> = (props) => {
    return (
        <>
        <h2 className="text-4xl text-white font-extrabold sm:visible m-1 text-center ">
          {props.title}
        </h2>
        <h3 className="text-xl text-center text-white font-extrabold sm:visible m-2">
          {props.body}
        </h3>
        <NavLink to={props.pageLocation}>
          <button
            className="mt-3 rounded-lg text-emerald-400 bg-white sm:visible p-1 hover:cursor-pointer hover:scale-105"
            onClick={props.asideDisplayHandler}
          >
            {props.btnText}
          </button>
        </NavLink>
      </>
    )
}

export default LoginSignUpAside;