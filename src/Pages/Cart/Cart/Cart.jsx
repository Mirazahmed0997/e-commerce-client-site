import React, { useEffect } from 'react';
import CartItem from './CartItem/CartItem';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
import { store } from '../../../State/Store';

const Cart = () => {
    const navigate = useNavigate();
    const disPatch = useDispatch();
    const {cart}=useSelector(store=>store)
    console.log("cart data",cart.cart)

    useEffect(() => {
        disPatch(getCart())
    }, [cart.deleteCartItem,cart.updateCartItem]);


    return (
        <div className='mt-24 p-6'>
            <h2 className="text-xl font-semibold text-center sm:text-left">Your cart</h2>

            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {cart.cart?.cartItems.map((item) => <CartItem item={item}></CartItem>)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0  shadow-lg'>
                    <div className=' md:mt-16'>
                        <div className="space-y-1 text-right">
                            <p>
                                Total amount:
                                <span className="font-semibold"> {cart.cart?.totalPrice} tk</span>
                            </p>
                            <p className="text-sm dark:text-gray-600">Total Item : {cart.cart?.totalItem} </p>
                            {/* <p className="text-sm dark:text-gray-600">Discount : {cart.cart?.discount} tk</p> */}
                            <p className="text-sm dark:text-gray-600">Excluded Delivery Charge 60 tk in Dhaka</p>
                            {/* <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p> */}
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-6">
                            <button
                                type="button"
                                className="w-full sm:w-auto px-6 py-2 border rounded-md dark:border-violet-600"
                            >
                                <Link to='/'>Back <span className="sr-only sm:not-sr-only">to Home</span></Link>
                            </button>
                            <Link to='/checkOut?step=1'>
                                <button
                                    type="button"
                                    className="w-full sm:w-auto px-6 py-2 border rounded-md dark:border-violet-600"
                                >
                                    Continue <span className="sr-only sm:not-sr-only">to Checkout</span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cart;