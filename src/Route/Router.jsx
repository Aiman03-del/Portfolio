import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Home from "../Component/Home";
import Portfolio from "../Component/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
