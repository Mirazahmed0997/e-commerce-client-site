import { Box, Grid, Grid2, TextField } from '@mui/material';
import React from 'react';
import AddressCart from '../AddressCart/AddressCart';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../State/Order/Action';
import { useNavigate } from 'react-router';

const DeliveryAddressForm = () => {

    const disPatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const data = new FormData(event.currentTarget);
        const address = {
            firstName: data.get('firstname'),
            lastName: data.get('lastname'),
            email: data.get('email'),
            mobile: data.get('contact'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip')
        }
        console.log(address)
        const orderData = { address, navigate }
        disPatch(createOrder(orderData))
        console.log(orderData)
    }



    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={5} className='border w-full rounded-e-md shadow-md  overflow-y-scroll'>
                    <div className='p-5 py-7 cursor-pointer'>
                        <AddressCart></AddressCart>
                        {/* Delivery Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-sm font-medium text-white transition bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-violet-600 sm:w-auto"
                        >
                            Deliver Here
                        </button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-md shadow-md p-5 bg-white">
                        <section className="bg-gray-50 dark:bg-gray-900">
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                action=""
                                className="container flex flex-col mx-auto space-y-6 p-4 md:p-6"
                            >
                                <fieldset className="grid grid-cols-1 gap-6 p-4 rounded-md shadow-md bg-white dark:bg-gray-800 md:grid-cols-4">
                                    {/* Left Section */}
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            Delivery Information
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Please fill in your details below to proceed with the delivery.
                                        </p>
                                    </div>

                                    {/* Right Section */}
                                    <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3 sm:grid-cols-6">
                                        {/* First Name */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="firstname" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                First Name<span className='text-red-900 font-bold'>*</span>
                                            </label>
                                            <input
                                                id="firstname"
                                                name="firstname"
                                                type="text"
                                                placeholder="Enter your first name"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="lastname" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Last Name<span className='text-red-900 font-bold'>*</span>
                                            </label>
                                            <input
                                                id="lastname"
                                                name="lastname"
                                                type="text"
                                                placeholder="Enter your last name"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="contact" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Contact<span className='text-red-900 font-bold'>*</span>
                                            </label>
                                            <input
                                                id="contact"
                                                name="contact"
                                                type="number"
                                                placeholder="Enter your phone number"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="col-span-full">
                                            <label htmlFor="address" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                Address<span className='text-red-900 font-bold'>*</span>
                                            </label>
                                            <TextField
                                                id="address"
                                                name="address"
                                                type="text"
                                                placeholder="Enter your delivery address"
                                                multiline
                                                rows={3}
                                                required
                                                className="w-full rounded-md border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="city" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                City<span className='text-red-900 font-bold'>*</span>
                                            </label>
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                placeholder="Enter your city"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* State */}
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="state" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                State / Province
                                            </label>
                                            <input
                                                id="state"
                                                name="state"
                                                type="text"
                                                placeholder="Enter your state"
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>

                                        {/* ZIP */}
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="zip" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                ZIP / Postal Code
                                            </label>
                                            <input
                                                id="zip"
                                                name="zip"
                                                type="number"
                                                placeholder="Enter ZIP code"
                                                className="w-full px-4 py-3 mt-1 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* Submit Button */}
                                <div className="text-center md:text-left">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </section>
                    </Box>
                </Grid>
            </Grid>
        </div>

    );
};

export default DeliveryAddressForm;