import App from "@/App";
import MainLayout from "@/layout/MainLayout";
import CreateProduct from "@/pages/ProductManagement/CreateProduct";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/Home/Product/Products";
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "@/pages/Home/Product/ProductDetails";
import AboutUs from "@/pages/Home/AboutUs/AboutUs";
import PageNotFound from "@/pages/PageNotFound";
import UpdateProduct from "@/pages/ProductManagement/UpdateProduct";
import CartPage from "@/pages/Cart/CartPage";
import ViewCart from "@/pages/Cart/ViewCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: "/",
        element: <MainLayout />
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
        path: "/products/update/:id",
        element: <UpdateProduct/>
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
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/view-cart',
        element: <ViewCart/>
      },
      {
        path: '/cart-page',
        element: <CartPage/>
      },
      
      {
        path: "/create-product",
        element: <CreateProduct/>
      },
    ],
  },
]);

export default router;
