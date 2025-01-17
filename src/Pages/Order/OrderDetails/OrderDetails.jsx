import React from 'react';
import AddressCart from '../../CheckOut/AddressCart/AddressCart';
import OrderTracker from '../OrderTracker/OrderTracker';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='mt-32'>
            <div className='p-6'>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCart></AddressCart>
            </div>
            {/* <div className='py-20 shadow-lg'>
                <OrderTracker activeStep={0}></OrderTracker>
            </div> */}

            <Grid container className='space-y-5 p-6 '>
                {
                    [1, 1, 1, 1, 1].map((item) =>
                        <Grid item container className='shadow-lg hover:shadow-2xl  p-5 border ' sx={{ alignItems: 'center', justifyContent: "space-between" }}>
                            <Grid item xs={6}>
                                <div className="flex flex-col md:flex-row items-start justify-between p-6   bg-white space-y-6 md:space-y-0 ">
                                    {/* Product Image */}
                                    <div className="w-full md:w-1/4">
                                        <img
                                            src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70"
                                            alt="Product"
                                            className="w-full h-24 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-col flex-1 mt-4 md:mt-0 md:ml-6 space-y-3">
                                        <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                                            Women Bodycon Yellow Dress
                                        </h3>
                                        <div className='font-semibold'>
                                            <p className="text-sm text-gray-700">Price: <span className="font-bold opacity-50 mr-2">59.99 TK</span>  Color: <span className="font-bold opacity-50">Yellow</span></p>
                                            <p className="text-sm"> Size : <span className="font-semibold opacity-50">M</span></p>
                                            <p className="text-sm"> Seller : <span className="font-semibold opacity-50">linaria</span></p>
                                        </div>
                                        {/* <p className="text-sm text-gray-700 opacity-50">Size: <span className="font-semibold">M</span></p>
                    <p className="text-sm text-gray-700 opacity-50">Quantity: <span className="font-semibold">5</span></p>
                    <p className="text-sm text-gray-700 opacity-50">Color: <span className="font-semibold">Yellow</span></p>
                    <p className="text-sm text-gray-700 opacity-50">Status: <span className="font-semibold">Pending</span></p> */}
                                        {/* Status (if you decide to include it) */}
                                        {/* <p className={`text-sm font-medium ${status === "Delivered" ? "text-green-600" : status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>Status: {status}</p> */}
                                    </div>

                                    {/* Action Buttons */}
                                    {/* <div className="flex space-x-4 mt-4 md:mt-0">
                                <Link to='/orderDetails'>
                                    <button className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-200">
                                        View Details
                                    </button></Link>
                                <button className="px-6 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none transition-all duration-200">
                                    Track Order
                                </button>
                  
                            </div> */}

                                </div>
                            </Grid>

                            <Grid item>
                                <Box sx={{ color: deepPurple[500] }}>
                                    <StarBorderIcon sx={{ fontSize: '2rem' }} className='px-2 text-2xl' ></StarBorderIcon>
                                    <span>Rate & Review Product</span>
                                </Box>
                            </Grid>
                        </Grid>)
                }
            </Grid>

        </div>
    );
};

export default OrderDetails;