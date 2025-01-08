import React, { useEffect } from 'react';
import { deleteProduct, findProducts } from '../../State/Products/Action';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../State/Store';
import Swal from 'sweetalert2';

const Tables = () => {

    const disPatch = useDispatch()
    const { AllProducts } = useSelector(store => store)


    console.log("table products", AllProducts?.products?.content?.category)
    const handleProductDelete = (productId) => {

        console.log(productId)
        // disPatch(deleteProduct(productId))


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
            pageSize: 10,
            stock: ""
        };

        // console.log(data)


        disPatch(findProducts(data))

        // console.log(data)

    }, [AllProducts.deletedProduct])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Products</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Sold Price</th>
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
                                    {item?.category?.name}
                                </td>

                                <td>{item.sellPrice}</td>

                                <td>{item.discountedPrice}</td>

                                <td>{item.buyPrice}</td>


                                <th>
                                    <button onClick={() => handleProductDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Edit</button>
                                </th>
                            </tr>
                        ))
                    }


                </tbody>

            </table>
        </div>
        // <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        //     <div className="py-6 px-4 md:px-6 xl:px-7.5">
        //         <h4 className="text-xl font-semibold text-black dark:text-white">
        //             Top Products
        //         </h4>
        //     </div>

        //     <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 p-6 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        //         <div className="col-span-3 flex items-center">
        //             <p className="font-medium">Product Name</p>
        //         </div>
        //         <div className="col-span-2 hidden items-center sm:flex">
        //             <p className="font-medium">Category</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">Sell Price</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">Sold Price</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">Buy Price</p>
        //         </div>
        //         <div className="col-span-1 flex items-center">
        //             <p className="font-medium">Quantity</p>
        //         </div>
        //     </div>

        //     {AllProducts?.products?.content?.map((item, key) =>
        //         // console.log("item",item)
        //          (
        //             <div
        //                 className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        //                 key={key}
        //             >
        //                 <div className="col-span-3 flex items-center">
        //                     <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        //                         <div className="avatar p-2">
        //                             <div className="w-16 rounded">
        //                                 <img src={item.imageUrl} />
        //                             </div>
        //                         </div>
        //                         <p className="text-sm text-black dark:text-white">
        //                             {item.title}
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="col-span-2 hidden items-center sm:flex">
        //                     <p className="text-sm text-black dark:text-white">
        //                         {item?.category?.name}
        //                     </p>
        //                 </div>
        //                 <div className="col-span-1 flex items-center">
        //                     <p className="text-sm text-black dark:text-white">
        //                         {item.sellPrice} BDT
        //                     </p>
        //                 </div>
        //                 <div className="col-span-1 flex items-center">
        //                     <p className="text-sm text-black dark:text-white">{item.discountedPrice} BDT</p>
        //                 </div>
        //                 <div className="col-span-1 flex items-center">
        //                     <p className="text-sm text-meta-3">{item.buyPrice} BDT</p>
        //                 </div>
        //                 <div className="col-span-1 flex items-center">
        //                     <p className="text-sm text-meta-3">{item.stockQuantity}</p>
        //                 </div>
        //             </div>
        //         )
        //     )}
        // </div>
    );
};

export default Tables;