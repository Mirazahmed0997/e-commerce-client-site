import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart/Cart";
import Checkout from "../Pages/CheckOut/CheckOut/CheckOut";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/shop',
            element:<Products></Products>
        },
        {
            path:'/productDetails',
            element:<ProductDetails></ProductDetails>
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        },
        {
            path:'/checkOut',
            element:<Checkout></Checkout>
        },
      ]
    },
  ]);