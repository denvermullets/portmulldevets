import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/error-page";
import Layout from "../components/Layout";
import LandingView from "../components/LandingView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingView />,
      },
      {
        path: "resume",
        element: <div>resume</div>,
      },
    ],
  },
]);
