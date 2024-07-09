import App from "@/App";
import Product from "@/pages/Product";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Product/>
      },
      {
        path: "/products-management",
        element: <ProductManagement/>
      },
    ],
  },
]);

export default router;
