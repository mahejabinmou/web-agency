import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AboutUs from "./ClientSide/AboutUs/AboutUs";

import Home from "./ClientSide/Home/Home";

import Footer from "./ClientSide/Shared/Footer/Footer";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/navbar",
    element: <Navbar></Navbar>,
  },
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>,
  },

  {
    path: "/footer",
    element: <Footer></Footer>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
