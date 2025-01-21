import { Grid, Grid2 } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { store } from '../../../State/Store';
import { getUsersOrders } from '../../../State/Order/Action';

const OrderCard = ({ item }) => {

    console.log("order card", item)



    return (
        <div>

            <div className="flex flex-col md:flex-row items-start justify-between p-6 border shadow-lg bg-white space-y-6 md:space-y-0 hover:shadow-2xl">
                {/* Product Image */}
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    {
                        item?.orderItems?.map((orderItem) =>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={orderItem?.product?.thumNailImage} />
                                </div>
                            </div>)
                    }

                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-1 mt-4 md:mt-0 md:ml-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                        Women Bodycon Yellow Dress
                    </h3>
                    <p className="text-sm text-gray-700">Price: <span className="font-bold opacity-50">{item.totalPrice} TK</span></p>
                    <p className="text-sm text-gray-700">Quantity: <span className="font-bold opacity-50">{item.totalItem}</span></p>
                    <p className="text-sm"><span className="font-semibold opacity-50">Your Item Has Been {item?.orderStatus}</span></p>

                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link to={`/account/myOrders/${item?._id}`}>
                        <button className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-200">
                            View Details
                        </button></Link>



                    <button className="px-6 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none transition-all duration-200">
                        {item?.orderStatus}
                    </button>




                </div>

            </div>


        </div>
    );
};

export default OrderCard;