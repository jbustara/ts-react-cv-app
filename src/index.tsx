import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import server from "./services/server";
import App from "./App";
import HomePage from "./pages/Home/HomePage";
import InnerPage from "./pages/Inner/InnerPage";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

server();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/inner",
        element: <InnerPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
