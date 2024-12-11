import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Products from '../Pages/Products/Products/Products';
import ProductDetails from '../Pages/Products/ProductDetails/ProductDetails';
import ProductDetailsCarusel from '../Pages/Products/ProductDetailsCarusel/ProductDetailsCarusel';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <ProductDetails></ProductDetails> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;