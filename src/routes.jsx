import React from "react";
import Home from "./components/Home";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home/:name",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
