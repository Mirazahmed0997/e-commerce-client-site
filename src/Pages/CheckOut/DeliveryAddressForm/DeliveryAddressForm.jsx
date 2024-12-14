import { Box, Grid, Grid2, TextField } from '@mui/material';
import React from 'react';
import AddressCart from '../AddressCart/AddressCart';

const DeliveryAddressForm = () => {

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        // const form=event.target;
        // const firstName=form.firstname.value
        const data= new FormData(event.currentTarget);
        const address={
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            email: data.get('email'),
            contact: data.get('contact'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zip: data.get('zip')
        }
        console.log(address)
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
                    <Box className="border rounded-s-md shadow-md p-5">
                        <section className="bg-indigo-500 opacity-90 dark:bg-black dark:text-gray-50">
                            <form onSubmit={handleSubmit} noValidate action="" className="container flex flex-col mx-auto space-y-8 p-4 md:space-y-12 md:p-2">
                                <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-800 md:grid-cols-4">
                                    {/* Left Section */}
                                    <div className="space-y-4 col-span-full lg:col-span-1">
                                        <p className="text-lg font-semibold text-gray-100">Delivery Information</p>
                                        <p className="text-sm text-gray-300">
                                            Please fill in your details below to proceed with the delivery.
                                        </p>
                                    </div>

                                    {/* Right Section */}
                                    <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3 sm:grid-cols-6">
                                        {/* First Name */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="firstname" className="text-sm font-semibold text-gray-100">
                                                First name*
                                            </label>
                                            <input
                                                id="firstname"
                                                name="firstname"
                                                type="text"
                                                placeholder="Enter your first name"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="lastname" className="text-sm font-semibold text-gray-100">
                                                Last name*
                                            </label>
                                            <input
                                                id="lastname"
                                                name="lastname"
                                                type="text"
                                                placeholder="Enter your last name"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="email" className="text-sm font-semibold text-gray-100">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* number */}
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="Contact" className="text-sm font-semibold text-gray-100">
                                                Contact*
                                            </label>
                                            <input
                                                id="contact"
                                                name="contact"
                                                type="text"
                                                placeholder="Enter your Phone Number"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="col-span-full">
                                            <label htmlFor="address" className="text-sm font-semibold text-gray-100">
                                                Address*
                                            </label>
                                            <TextField
                                                id="address"
                                                name="address"
                                                type="text"
                                                placeholder="Enter your delivery address"
                                                multiline
                                                rows={3}
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-white dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="city" className="text-sm font-semibold text-gray-100">
                                                City*
                                            </label>
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                placeholder="Enter your city"
                                                required
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* State/Province */}
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="state" className="text-sm font-semibold text-gray-100">
                                                State / Province
                                            </label>
                                            <input
                                                id="state"
                                                name="state"
                                                type="text"
                                                placeholder="Enter your state or province"
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>

                                        {/* ZIP/Postal */}
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="zip" className="text-sm font-semibold text-gray-100">
                                                ZIP / Postal Code
                                            </label>
                                            <input
                                                id="zip"
                                                name="zip"
                                                type="text"
                                                placeholder="Enter your ZIP code"
                                                className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                            />
                                        </div>
                                    </div>

                                </fieldset>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-sm font-medium text-white transition bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-violet-600 sm:w-auto"
                                >
                                     Submit
                                </button>
                            </form>
                        </section>
                    </Box>
                </Grid>
            </Grid>
        </div>

    );
};

export default DeliveryAddressForm;