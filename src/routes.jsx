import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
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
    children: [
      // TODO: Replace with better Default Page
      {
        index: true,
        element: <ErrorPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
