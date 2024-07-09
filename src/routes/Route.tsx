import App from "@/App";
import Product from "@/pages/Product";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Products",
        element: <Product/>
      },
    ],
  },
]);

export default router;
