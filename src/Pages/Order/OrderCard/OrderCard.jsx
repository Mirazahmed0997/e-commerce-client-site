import { Grid, Grid2 } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';

const OrderCard = () => {
    return (
        <div>
            {/* <Grid container spacing={2}sx={{justifyContent:"space-between"}}>
                 <Grid item sx={6}>
                        <div className=''>

                        </div>
                 </Grid>
            </Grid> */}

            <div className="flex flex-col md:flex-row items-start justify-between p-6 border shadow-lg bg-white space-y-6 md:space-y-0 hover:shadow-2xl">
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
                    <p className="text-sm text-gray-700">Price: <span className="font-bold opacity-50">59.99 TK</span></p>
                    <p className="text-sm"><span className="font-semibold opacity-50">Your Item Has Been Delivered</span></p>
                    {/* <p className="text-sm text-gray-700 opacity-50">Size: <span className="font-semibold">M</span></p>
                    <p className="text-sm text-gray-700 opacity-50">Quantity: <span className="font-semibold">5</span></p>
                    <p className="text-sm text-gray-700 opacity-50">Color: <span className="font-semibold">Yellow</span></p>
                    <p className="text-sm text-gray-700 opacity-50">Status: <span className="font-semibold">Pending</span></p> */}
                    {/* Status (if you decide to include it) */}
                    {/* <p className={`text-sm font-medium ${status === "Delivered" ? "text-green-600" : status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>Status: {status}</p> */}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link to={`/account/myOrders/${5}`}>
                        <button className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-200">
                            View Details
                        </button></Link>
                    <button className="px-6 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none transition-all duration-200">
                        Track Order
                    </button>
                    {/* <p>
                    {
                        true &&
                        <span>Expected Delivery On Mar 03</span>
                    }
                    {
                        false &&
                        <span>Expected Delivery On Mar 03</span>
                    }
                </p> */}
                </div>

            </div>


        </div>
    );
};

export default OrderCard;