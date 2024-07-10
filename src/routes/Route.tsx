import App from "@/App";
import MainLayout from "@/layout/MainLayout";
import CreateProduct from "@/pages/ProductManagement/CreateProduct";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Home/Product/Products";
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "@/pages/Home/Product/ProductDetails";

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
        element: <Products/>
      },
      {
        path: "/products/:id",
        element: <ProductDetails/>
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
