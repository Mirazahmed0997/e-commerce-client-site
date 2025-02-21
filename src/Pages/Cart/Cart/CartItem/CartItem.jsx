import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../../State/Cart/Action';
import Swal from 'sweetalert2';
const CartItem = ({ item }) => {

    const disPatch = useDispatch();
    // const [quantities,setQuantities]=useState([])
        // setQuantities(item.quantity)
        // console.log(quantities)
    console.log("item", item)
    const handleUpdateCart = (num) => {
        console.log("clicked", num)
        const data = {
            data: { data: { quantity: item.quantity + num } }, // Ensure this matches the reducer's expected structure
            CartItemId: item?._id
        };
        console.log("clicked data", data)

        disPatch(updateCartItem(data));
    }

    const handleRemoveCartItem = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                disPatch(removeCartItem(item._id))
            }

        });


    }


    return (
        <div>
            <div className="flex flex-col max-w-3xl p-12 space-y-4 sm:p-10 mx-auto dark:bg-gray-50 dark:text-gray-800 shadow-lg">
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
                            <img
                                className="flex-shrink-0 object-cover w-full h-40 sm:w-32 sm:h-32 rounded dark:bg-gray-500"
                                src={item.product?.thumNailImage}
                                alt="Polaroid camera"
                            />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.product?.title}</h3>
                                        <p className="text-sm dark:text-gray-600 opacity-50">Size: {item?.size}, Color:  {item?.color}</p>
                                        <p className="text-sm dark:text-gray-600 opacity-50">{item.product?.brand}</p>

                                    </div>
                                    <div className="text-right">


                                        <> <p className="text-lg font-semibold">Total Price: {item?.price}/-</p></>

                                        {/* <p className="text-sm dark:text-gray-600">Total Discount : {item?.discountedPrice} tk</p> */}


                                        {item?.discountedPercent ? (

                                            <> <p className="font-semibold"></p></>

                                        ) : (
                                            <>
                                                <p className="text-sm dark:text-gray-600 line-through">{item?.product?.discountedPercent
                                                }% off</p>
                                            </>
                                        )}

                                        {/* <p className="text-lg font-semibold">Discount: {item?.discountedPrice}</p>
                                        <p className="text-lg font-semibold">Discount: {item?.product?.discountedPersent}%</p> */}
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">

                                    <IconButton onClick={() => handleUpdateCart(-1)} disabled={item.quantity <= 1}>
                                        <RemoveCircleIcon />
                                    </IconButton>
                                    <span className="py-1 px-7 border rounded-sm font-semibold">{item.quantity}</span>
                                    <IconButton onClick={() => handleUpdateCart(1)}>
                                        <AddCircleIcon />
                                    </IconButton>


                                    <button onClick={handleRemoveCartItem}
                                        type="button"
                                        className="flex items-center px-2 py-1 space-x-1 sm:space-x-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                            <rect width="32" height="200" x="168" y="216"></rect>
                                            <rect width="32" height="200" x="240" y="216"></rect>
                                            <rect width="32" height="200" x="312" y="216"></rect>
                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                        </svg>
                                        <span>Remove</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center px-2 py-1 space-x-1 sm:space-x-2"
                                    >
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                        </svg>
                                        <span>Add to favorites</span> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default CartItem;