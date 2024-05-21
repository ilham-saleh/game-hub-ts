import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetail from "./pages/GameDetail";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);

export default routes;
