import React from 'react';

const DeliveryAddressForm = () => {
    return (
        <div>
            <section className="p-6 bg-indigo-500 opacity-80 dark:bg-black dark:text-gray-50">
                <form noValidate action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-800">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-gray-100">Delivery Information</p>
                            <p className="text-xs text-gray-300">
                                Please fill in your details below to proceed with the delivery.
                            </p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            {/* First Name */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm font-semibold text-gray-100">
                                    First name
                                </label>
                                <input
                                    id="firstname"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                />
                            </div>
                            {/* Last Name */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm font-semibold text-gray-100">
                                    Last name
                                </label>
                                <input
                                    id="lastname"
                                    type="text"
                                    placeholder="Enter your last name"
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
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                />
                            </div>
                            {/* Address */}
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm font-semibold text-gray-100">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Enter your delivery address"
                                    className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                />
                            </div>
                            {/* City */}
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm font-semibold text-gray-100">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Enter your city"
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
                                    type="text"
                                    placeholder="Enter your ZIP code"
                                    className="w-full px-4 py-3 mt-1 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 focus:ring focus:ring-opacity-75 focus:ring-violet-600 hover:ring hover:ring-opacity-50 hover:ring-violet-500"
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>

        </div>
    );
};

export default DeliveryAddressForm;