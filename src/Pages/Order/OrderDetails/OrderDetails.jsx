import React, { useEffect, useState } from 'react';
import AddressCart from '../../CheckOut/AddressCart/AddressCart';
import OrderTracker from '../OrderTracker/OrderTracker';
import { Box, Grid } from '@mui/material';
import { Link, useParams } from 'react-router';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/Store';
import { getOrderById } from '../../../State/Order/Action';

// Dummy Data
const invoiceData = {
    invoiceNumber: "INV-12345",
    invoiceDate: "2025-01-18",
    dueDate: "2025-02-01",
    sender: {
        name: "China Trade BD",
        address: "Pritam Jaman Tower, Culvert Road , Purana Polton, Dhaka",
        email: "contact@abccorp.com",
        phone: "+123-456-7890",
    },
    recipient: {
        name: "John Doe",
        address: "456 Residential Ave, City, Country",
        email: "john.doe@example.com",
        phone: "+987-654-3210",
    },
    items: [
        { name: "Web Development Services", quantity: 1, price: 1500 },
        { name: "Hosting (1 Year)", quantity: 1, price: 100 },
        { name: "Domain Registration", quantity: 1, price: 20 },
        { name: "Consultation", quantity: 2, price: 75 },
    ],
    taxRate: 10, // 10%
    notes: "Thank you for your business! Payment is due by the due date.",
};







const OrderDetails = () => {

    const {
        invoiceNumber,
        invoiceDate,
        dueDate,
        sender,
        recipient,
        items,
        taxRate,
        notes,
    } = invoiceData;




    const disPatch = useDispatch()
    const { order } = useSelector(store => store)
    const params = useParams()
    const [ordersItem, setOrderItem] = useState([])
    const [price, setPrice] = useState([])
    // console.log(price)


    useEffect(() => {
        const orderId = params.orderId;
        disPatch(getOrderById(orderId)); // Fetch product details
        console.log(order)

    }, [params.orderId]);





    const calculateSubtotal = () =>
        order?.order?.orderItems?.reduce((total, itemPrice) => total + itemPrice.discountedPrice, 0);

    const calculateDeliveryCharge = () => calculateSubtotal()+ 100;

    const calculateTotal = () => calculateSubtotal() + calculateDeliveryCharge();


    return (
        <div className='mt-36 mb-6'>
            <AddressCart></AddressCart>
            <div className="p-6 bg-white shadow rounded-md max-w-4xl mx-auto">
                {/* Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold">Invoice</h1>
                    <p className="text-gray-600">Invoice #:INV- {order?.order?._id}</p>
                    <p className="text-gray-600">Date: {order?.order?.createdAt}</p>
                    <p className="text-gray-600">Due Date: {dueDate}</p>
                </div>

                {/* Sender and Recipient */}
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold">From:</h2>
                        <p>{sender.name}</p>
                        <p>{sender.address}</p>
                        <p>{sender.email}</p>
                        <p>{sender.phone}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">To:</h2>
                        <p>{order?.order?.shippingAddress?.firstName} {order?.order?.shippingAddress?.lastName},</p>
                        <p>{order?.order?.shippingAddress?.state}</p>
                        <p>{order?.order?.shippingAddress?.streetAddress}</p>
                        <p>{order?.order?.shippingAddress?.city}- {order?.order?.shippingAddress?.zipCode}</p>
                        <p>{recipient.email}</p>
                        <p>Contact :  {order?.order?.shippingAddress?.mobile}</p>
                    </div>
                </div>

                {/* Itemized Details */}
                <table className="w-full text-left border-collapse mb-6">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2 px-4">Item</th>
                            <th className="py-2 px-4">Quantity</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order?.order?.orderItems?.map((item, index) => 
                            (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4">{item.product.title}</td>
                                    <td className="py-2 px-4">{item.quantity}</td>
                                    <td className="py-2 px-4">${item.product.discountedPrice}</td>
                                    <td className="py-2 px-4">
                                        ${(item.quantity * item.product.discountedPrice)}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>

                {/* Summary */}
                <div className="text-right mb-6">
                    <p className="text-lg">
                        Subtotal: <span className="font-bold">${order?.order?.totalPrice}</span>
                        {/* Subtotal: <span className="font-bold">${calculateSubtotal()}</span> */}
                    </p>
                    <p className="text-lg">
                        Delivery Charge: <span className="font-bold">100</span>
                    </p> 
                    <p className="text-xl font-bold">
                        Total: <span>${order?.order?.totalPrice+100}</span>
                    </p> 
                </div>

                {/* Notes */}
                {notes && (
                    <div className="mt-6 P-16">
                        <h2 className="text-lg font-bold">ORDER {order?.order?.orderStatus}</h2>
                        <p className="text-gray-600"></p>
                    </div>
                )}
            </div>
        </div>
        // <div className='mt-32'>
        //     <div className='p-6'>
        //         <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        //         <AddressCart></AddressCart>
        //     </div>
        //     {/* <div className='py-20 shadow-lg'>
        //         <OrderTracker activeStep={0}></OrderTracker>
        //     </div> */}

        //     <Grid container className='space-y-5 p-6 '>
        //         {
        //             [1, 1, 1, 1, 1].map((item) =>
        //                 <Grid item container className='shadow-lg hover:shadow-2xl  p-5 border ' sx={{ alignItems: 'center', justifyContent: "space-between" }}>
        //                     <Grid item xs={6}>
        //                         <div className="flex flex-col md:flex-row items-start justify-between p-6   bg-white space-y-6 md:space-y-0 ">
        //                             {/* Product Image */}
        //                             <div className="w-full md:w-1/4">
        //                                 <img
        //                                     src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70"
        //                                     alt="Product"
        //                                     className="w-full h-24 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        //                                 />
        //                             </div>

        //                             {/* Product Details */}
        //                             <div className="flex flex-col flex-1 mt-4 md:mt-0 md:ml-6 space-y-3">
        //                                 <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
        //                                     Women Bodycon Yellow Dress
        //                                 </h3>
        //                                 <div className='font-semibold'>
        //                                     <p className="text-sm text-gray-700">Price: <span className="font-bold opacity-50 mr-2">59.99 TK</span>  Color: <span className="font-bold opacity-50">Yellow</span></p>
        //                                     <p className="text-sm"> Size : <span className="font-semibold opacity-50">M</span></p>
        //                                     <p className="text-sm"> Seller : <span className="font-semibold opacity-50">linaria</span></p>
        //                                 </div>
        //                                 {/* <p className="text-sm text-gray-700 opacity-50">Size: <span className="font-semibold">M</span></p>
        //             <p className="text-sm text-gray-700 opacity-50">Quantity: <span className="font-semibold">5</span></p>
        //             <p className="text-sm text-gray-700 opacity-50">Color: <span className="font-semibold">Yellow</span></p>
        //             <p className="text-sm text-gray-700 opacity-50">Status: <span className="font-semibold">Pending</span></p> */}
        //                                 {/* Status (if you decide to include it) */}
        //                                 {/* <p className={`text-sm font-medium ${status === "Delivered" ? "text-green-600" : status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>Status: {status}</p> */}
        //                             </div>

        //                             {/* Action Buttons */}
        //                             {/* <div className="flex space-x-4 mt-4 md:mt-0">
        //                         <Link to='/orderDetails'>
        //                             <button className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-200">
        //                                 View Details
        //                             </button></Link>
        //                         <button className="px-6 py-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none transition-all duration-200">
        //                             Track Order
        //                         </button>

        //                     </div> */}

        //                         </div>
        //                     </Grid>

        //                     <Grid item>
        //                         <Box sx={{ color: deepPurple[500] }}>
        //                             <StarBorderIcon sx={{ fontSize: '2rem' }} className='px-2 text-2xl' ></StarBorderIcon>
        //                             <span>Rate & Review Product</span>
        //                         </Box>
        //                     </Grid>
        //                 </Grid>)
        //         }
        //     </Grid>

        // </div>
    );
};

export default OrderDetails;