import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/Store';
import { confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../../../State/Admin/Orders/Action';
import SharedTitle from '../../../Pages/Home/SharedTitle/SharedTitle';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AdminOrders = () => {
    const disPatch = useDispatch()
    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        disPatch(getOrders())
    }, [])

    console.log("orders table", adminOrder?.orders)

    const handleOrderDelete = (orderId) => {

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
                disPatch(deleteOrder(orderId))
            }

        });
    }

    const handleShipOrder = (orderId) => {
        disPatch(shipOrder(orderId))
    }
    const handleConfirmedOrder = (orderId) => {
        disPatch(confirmOrder(orderId))
    }
    const handleDeliverdOrder = (orderId) => {
        disPatch(deliverOrder(orderId))
    }
    // const handlePendingOrder=(orderId)=>
    // {
    //     disPatch(pendii(orderId))
    // }

    return (
        <div className="">
            <SharedTitle title="All Orders"></SharedTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {adminOrder?.orders?.map((item) => (
                            <tr className="shadow-md">
                                {/* Order Items */}
                                <td>
                                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                        {item?.orderItems?.map((orderItem) => (
                                            <div className="avatar">
                                                <div className="w-12 sm:w-10">
                                                    <img
                                                        src={orderItem?.product?.thumNailImage}
                                                        alt={orderItem?.product?.title}
                                                        className="rounded-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </td>

                                {/* Titles */}
                                <td>
                                    {item?.orderItems?.map((orderItem) => (
                                        <div key={orderItem?.product?._id} className="text-sm sm:text-xs">
                                            {orderItem?.product?.title}.
                                        </div>
                                    ))}
                                </td>

                                {/* Price */}
                                <td className="text-left text-lg sm:text-sm">
                                    {item.totalPrice} BDT
                                </td>
                                {/* <td className="text-left text-lg sm:text-sm">
                                    {item?.orderStatus}
                                </td> */}

                                {/* Status Dropdown */}
                                <td>
                                    <div className="dropdown dropdown-end">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-sm sm:btn-xs"
                                        >
                                            {item?.orderStatus}
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box shadow-lg z-[100] w-32"
                                        >
                                            <li>
                                                <a onClick={() => handleConfirmedOrder(item?._id)}>CONFIRMED</a>
                                            </li>
                                            <li>
                                                <a onClick={() => handleShipOrder(item?._id)}>SHIPPED</a>
                                            </li>
                                            <li>
                                                <a onClick={() => handleDeliverdOrder(item?._id)}>DELIVERED</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>

                                {/* Actions */}
                                <td>
                                    <button
                                        onClick={() => handleOrderDelete(item._id)}
                                        className="btn btn-ghost btn-sm sm:btn-xs"
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/admin/orders/details/${item._id}`}>
                                        <button className="btn btn-ghost btn-sm sm:btn-xs">
                                            Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AdminOrders;