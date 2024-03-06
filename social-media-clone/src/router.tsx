import { createBrowserRouter } from "react-router-dom";
import LoginRegistrationLayout from "./components/layouts/LoginRegistrationLayout";
import CreateAccount from "./views/login-registration/CreateAccount";
import Login from "./views/login-registration/Login";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegistrationLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
