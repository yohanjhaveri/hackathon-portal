import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

const router = createBrowserRouter(routes);

export const External = () => <RouterProvider router={router} />;
