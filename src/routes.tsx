import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
