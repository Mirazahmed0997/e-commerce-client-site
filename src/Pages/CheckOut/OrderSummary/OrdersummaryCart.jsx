import React from 'react';

const OrdersummaryCart = ({item}) => {

    console.log("ordersum",item)
    return (
        <div>
            <div className="flex flex-col max-w-3xl p-12 space-y-4 sm:p-5 mx-auto dark:bg-gray-50 dark:text-gray-800 shadow-lg">
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
                            <img
                                className="flex-shrink-0 object-cover w-full h-40 sm:w-32 sm:h-32 rounded dark:bg-gray-500"
                                src={item.product.thumNailImage}
                                alt="Polaroid camera"
                            />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.product?.title}</h3>
                                        <p className="text-sm dark:text-gray-600 opacity-50">Size: {item?.size}, Color:{item.product?.color}</p>
                                        <p className="text-sm dark:text-gray-600 opacity-50">Quantity: {item?.quantity}</p>
                                        <p className="text-sm dark:text-gray-600 opacity-50">{item?.product.brand}</p>

                                    </div>
                                    <div className="text-right">


                                        <> <p className="text-lg font-semibold">Total Price: {item?.discountedPrice
                                        }/-</p></>

                                        {/* <p className="text-sm dark:text-gray-600">Total Discount : {item?.discountedPrice} tk</p> */}
                                        <p className="text-sm dark:text-gray-600 line-through">{item?.product?.discountedPercent}% off</p>
                                        {/* <p className="text-lg font-semibold">Discount: {item?.discountedPrice}</p>
                                        <p className="text-lg font-semibold">Discount: {item?.product?.discountedPersent}%</p> */}
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default OrdersummaryCart;