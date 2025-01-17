import { Grid, Grid2 } from '@mui/material';
import React, { useEffect } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/Store';
import { getUsersOrders } from '../../../State/Order/Action';

const Order = () => {

    const orderStatus = [
        { label: "Pending", value: "Pending" },
        { label: "On The Way", value: "On The Way" },
        { label: "Delivered", value: "Delivered" },
        { label: "Returned", value: "Returned" },
        { label: "Cancel", value: "Cancel" },]

        const disPatch = useDispatch()
        const { orders } = useSelector(store => store.order)
    
        useEffect(() => {
            disPatch(getUsersOrders())
        }, [])
    
        // const order = orders.map((item) => {
        //     console.log(item)
        // })

        console.log(orders)

    return (
        <div className="mt-32 md:p-2">
            <Grid container sx={{ justifyContent: "space-between"  }}>

                {/* Filter Section
                <Grid item xs={12} sm={3}>
                    <div className="h-auto shadow-lg bg-white p-6 rounded-md sticky top-16">
                        <h1 className="font-bold text-xl text-gray-800">Filter</h1>
                        <div className="space-y-6 mt-8">
                            <h2 className="text-lg font-semibold text-gray-700">Order Status</h2>
                            {
                                orderStatus.map((option) => (
                                    <div key={option.value} className="flex items-center space-x-2">
                                        <input
                                            defaultValue={option.value}
                                            type="checkbox"
                                            id={option.value}
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor={option.value} className="text-sm text-gray-600">
                                            {option.label}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Grid> */}

                {/* Order Cards Section */}
                <Grid item xs={12} sm={12}>
                    <div className="flex flex-col space-y-4 md:mx-2">
                        {
                            orders.map((item)=><OrderCard item={item}></OrderCard>)
                        }
                        {/* Add more OrderCard components here */}
                    </div>
                </Grid>

            </Grid>
        </div>

    );
};

export default Order;