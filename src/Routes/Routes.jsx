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
import Order from "../Pages/Order/Order/Order";
import OrderDetails from "../Pages/Order/OrderDetails/OrderDetails";
import SignUp from "../Pages/SignUp&LogIn/SignUp/SignUp";
import Login from "../Pages/SignUp&LogIn/Login/Login";

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
            path:'/:level1/:level2/:level3',
            element:<Products></Products>
        },
        {
            path:'/productDetails/:productId',
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
        {
            path:'/account/myOrders',
            element:<Order></Order>
        },
        {
            path:'/account/myOrders/:orderId',
            element:<OrderDetails></OrderDetails>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/signIn',
            element:<Login></Login>
        },
      ]
    },
  ]);