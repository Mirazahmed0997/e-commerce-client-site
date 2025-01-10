import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/Store';
import { deleteOrder, getOrders } from '../../../State/Admin/Orders/Action';
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

    return (
        <div>
            <SharedTitle title="All Orders"></SharedTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Discount Percent</th>
                            <th>Total Discount Price</th>
                            <th>Total Price</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            adminOrder?.orders?.map((item =>
                                <tr className='shadow-2xl'>

                                    <td >
                                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                            {
                                                item?.orderItems?.map((orderItem) =>
                                                    <div className="avatar">
                                                        <div className="w-12">
                                                            <img src={orderItem?.product?.imageUrl}  />
                                                        </div>
                                                    </div>)
                                            }

                                        </div>

                                        {/* <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                {
                                                    item?.orderItems?.map((orderItem) =>
                                                        <div className="mask mask-squircle h-16 w-16">
                                                            <img
                                                                src={orderItem?.product?.imageUrl} />
                                                        </div>)
                                                }

                                            </div>
                                            <div>
                                                <div className="text-sm opacity-50">Total Item: {item.totalItem}</div>
                                            </div>
                                        </div> */}
                                    </td>
                                    {item?.orderItems?.map(orderItem => (
                                        <tr key={orderItem?.product?._id}>
                                            <td>{orderItem?.product?.title}</td>
                                        </tr>
                                    ))}


                                    <td>  {item?.orderItems?.map(orderItem => (
                                        <tr key={orderItem?.product?._id}>
                                            <td>{orderItem?.product?.discountedPrice}</td>
                                        </tr>
                                    ))}</td>
                                    <td>  {item?.orderItems?.map(orderItem => (
                                        <tr key={orderItem?.product?._id}>
                                            <td>{orderItem?.product?.discountedPersent} %</td>
                                        </tr>
                                    ))}</td>

                                    <td>{item.discount}</td>

                                    <td>{item.totalPrice}</td>


                                    <td>
                                        <tr>
                                            <td>Name : {item.shippingAddress?.firstName}, {item.shippingAddress?.lastName} <br />Address : {item.shippingAddress?.streetAddress}  {item.shippingAddress?.city} -{item.shippingAddress?.zipCode}, <br /> Contact: {item.shippingAddress?.mobile} </td>

                                        </tr>

                                    </td>


                                    <th>
                                        <button onClick={() => handleOrderDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                    <th>
                                        <Link to={`/admin/update/products/${item._id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
                                    </th>
                                </tr>
                            ))
                        }


                    </tbody>
                    {/* <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot> */}


                </table>
            </div>

        </div>
    );
};

export default AdminOrders;