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
import Admin from "../Admin/Admin";
import Dashboard from "../Admin/Components/Dashboard/Dashboard";
import ProductsAdmin from "../Admin/Components/ProductsAdmin/ProductsAdmin";
import AdminUsers from "../Admin/Components/AdminUsers/AdminUsers";
import AdminOrders from "../Admin/Components/AdminOrders/AdminOrders";
import AdminAddProducts from "../Admin/Components/AdminAddProducts/AdminAddProducts";

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
            path:'/:levelOne/:levelTwo/:levelThree',
            element:<Products></Products>
        },
        {
            path:'/productDetails/:productId',
            element:<ProductDetails></ProductDetails>,
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

    {
        path:'/admin',
        element:<Admin></Admin>,
        children: [
          {
            path:'/admin/dashboard',
            element:<Dashboard></Dashboard>
          },
          {
            path:'/admin/products',
            element:<ProductsAdmin></ProductsAdmin>
          },
          {
            path:'/admin/users',
            element:<AdminUsers></AdminUsers>
          },
          {
            path:'/admin/product/create',
            element:<AdminAddProducts></AdminAddProducts>
          },
          {
            path:'/admin/orders',
            element:<AdminOrders></AdminOrders>
          },
         
        ]
      }
  ]);