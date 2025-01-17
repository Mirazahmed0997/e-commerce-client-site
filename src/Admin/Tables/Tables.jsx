import React, { useEffect } from 'react';
import { deleteProduct, findProducts } from '../../State/Products/Action';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../State/Store';
import Swal from 'sweetalert2';
import SharedTitle from '../../Pages/Home/SharedTitle/SharedTitle';
import { Link } from 'react-router';

const Tables = () => {

    const disPatch = useDispatch()
    const { AllProducts } = useSelector(store => store)


    console.log("table products", AllProducts?.products?.content)

   

    const handleProductDelete = (productId) => {

        console.log(productId)


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
                disPatch(deleteProduct(productId))
            }

        });

    }

    useEffect(() => {
        const data = {
            category: "",
            color: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 1,
            pageSize: 10000,
            stock: ""
        };

        // console.log(data)


        disPatch(findProducts(data))

        // console.log(data)

    }, [AllProducts.deletedProduct])

    return (
        <div>
            <SharedTitle title="All products"></SharedTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th></th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Discounted Price</th>
                            <th>Buy Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            AllProducts?.products?.content?.map((item =>
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-16 w-16">
                                                    <img
                                                        src={item.imageUrl} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                                <div className="text-sm opacity-50">Quantity: {item.stockQuantity}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item?.categoryName}
                                    </td>

                                    <td>{item.sellPrice}</td>

                                    <td>{item.discountedPrice}</td>

                                    <td>{item.buyPrice}</td>


                                    <th>
                                        <button onClick={() => handleProductDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                    <th>
                                        <Link to={`/admin/update/products/${item._id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
                                    </th>
                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Tables;