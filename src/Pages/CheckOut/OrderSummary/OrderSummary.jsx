import React, { useEffect } from 'react';
import AddressCart from '../AddressCart/AddressCart';
import CartItem from '../../Cart/Cart/CartItem/CartItem';
import { Link, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { store } from '../../../State/Store';
import OrdersummaryCart from './OrdersummaryCart';

const OrderSummary = () => {

    const disPatch=useDispatch()
    const location=useLocation()
    const searchParams= new URLSearchParams(location.search)
    const orderId= searchParams.get("order_id")
    const {order}=useSelector(store=>store)

    console.log(order)

    useEffect(()=>
        {
            disPatch(getOrderById(orderId))
        },[orderId])

    return (
        <div className=''>
            <div className='p-5 shadow-lg roundded-s-md border'>
                <AddressCart address={order?.order?.shippingAddress}></AddressCart>
            </div>

            <div className='mt-24 p-6'>
                {/* <h2 className="text-xl font-semibold text-center sm:text-left">Your Order</h2> */}

                <div className='lg:grid grid-cols-3 relative'>



                    <div className='col-span-2'>
                        {order?.order?.orderItems?.map((item) => <OrdersummaryCart item={item}></OrdersummaryCart>)}
                    </div>


                    

                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0  shadow-lg'>
                        <div className=' md:mt-16'>
                            <div className="space-y-1 text-right">
                                <p>
                                    Total amount:
                                    <span className="font-semibold"> {order?.order?.totalPrice} tk</span>
                                </p>
                                <p className="text-sm dark:text-gray-600">Total Discount : {order?.order?.discount}</p>
                                <p className="text-sm dark:text-gray-600">Delivery Charge : 60 tk</p>
                                {/* <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p> */}
                            </div>
                            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    className="w-full sm:w-auto px-6 py-2 border rounded-md dark:border-violet-600"
                                >
                                    <Link to='/shop'>Back <span className="sr-only sm:not-sr-only">to shop</span></Link>
                                </button>
                                <button
                                    type="button"
                                    className="w-full sm:w-auto px-6 py-2 border rounded-md dark:border-violet-600"
                                >
                                    <Link to='/checkOut'>Continue <span className="sr-only sm:not-sr-only">to Checkout</span></Link>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default OrderSummary;