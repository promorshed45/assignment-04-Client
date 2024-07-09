import App from "@/App";
import MainLayout from "@/layout/MainLayout";
import Product from "@/pages/Product";
import CreateProduct from "@/pages/ProductManagement/CreateProduct";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/products",
        element: <Product/>
      },
      {
        path: "/products-management",
        element: <ProductManagement/>
      },
      {
        path: "/create-product",
        element: <CreateProduct/>
      },
    ],
  },
]);

export default router;
