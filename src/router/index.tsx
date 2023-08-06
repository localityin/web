import { createBrowserRouter } from "react-router-dom";

// screens
import Home from "../screens/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
