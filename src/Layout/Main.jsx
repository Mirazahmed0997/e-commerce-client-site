import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Products from '../Pages/Products/Products/Products';
import ProductDetails from '../Pages/Products/ProductDetails/ProductDetails';
import ProductDetailsCarusel from '../Pages/Products/ProductDetailsCarusel/ProductDetailsCarusel';
import Order from '../Pages/Order/Order/Order';
import OrderDetails from '../Pages/Order/OrderDetails/OrderDetails';
import NavbarII from '../Pages/Shared/Navbar/NavbarII';

const Main = () => {
    return (
        <div>
            {/* <NavbarII></NavbarII> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <OrderDetails></OrderDetails> */}
          <Footer></Footer>
        </div>
    );
};

export default Main;