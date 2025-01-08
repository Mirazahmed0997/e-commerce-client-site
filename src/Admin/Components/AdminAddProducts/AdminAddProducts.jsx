import React, { useState } from 'react';
import SharedTitle from '../../../Pages/Home/SharedTitle/SharedTitle';

const AdminAddProducts = () => {

    const [formData, setFormData] = useState({
        productName: "",
        brand: "",
        image: "",
        size1: "",
        size2: "",
        size3: "",
        size4: "",
        size5: "",
        size6: "",
        levelOne: "",
        levelTwo: "",
        levelThree: "",
        color: "",
        buyPrice: "",
        price: "",
        percent: "",
        discountPrice: "",
        quantity: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (

        <div>
            <SharedTitle title="Add Product" />
            <section className="p-6 dark:bg-gray-900 dark:text-gray-50">
                <form
                    noValidate
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const data = Object.fromEntries(formData.entries());
                        console.log(data);
                    }}
                    className="container flex flex-col mx-auto space-y-6"
                >
                    {/* Product Details */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Product Details</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="productName" className="block text-sm font-medium">Product Name</label>
                                <input
                                    id="productName"
                                    name="productName"
                                    type="text"
                                    placeholder="E.g., Comfortable Chair"
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium">Brand</label>
                                <input
                                    id="brand"
                                    name="brand"
                                    type="text"
                                    placeholder="E.g., IKEA"
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium">Image URL</label>
                                <input
                                    id="image"
                                    name="image"
                                    type="url"
                                    placeholder="E.g., https://example.com/image.jpg"
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Size Selection */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Available Sizes</legend>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {Array(6).fill(0).map((_, i) => (
                                <select
                                    key={i}
                                    name={`size${i + 1}`}
                                    className="select select-bordered w-full rounded-md"
                                >
                                    <option value="" disabled selected>Select Size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                </select>
                            ))}
                        </div>
                    </fieldset>

                    {/* Category Selection */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Category</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <select

                                className="select select-bordered w-full rounded-md"
                            >
                                <option value="" disabled selected>First Level Category</option>
                                <option value="Furniture">Men</option>
                                <option value="Electronics">Women</option>
                                <option value="Clothing">Kids</option>
                                {/* <option value="Clothing">Accessories</option> */}
                            </select>
                            <select

                                className="select select-bordered w-full rounded-md"
                            >
                                <option value="" disabled selected>Second Level Category</option>
                                <option value="Furniture">Clothing </option>
                                <option value="Electronics">Accessories</option>
                                <option value="Clothing">Others</option>
                            </select>
                            <select

                                className="select select-bordered w-full rounded-md"
                            >
                                <option value="" disabled selected>Third Level Category</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                            </select>
                        </div>
                    </fieldset>

                    {/* Pricing and Quantity */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Pricing & Quantity</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['color', 'buyPrice', 'price', 'percent', 'discountPrice', 'quantity'].map((field, index) => (
                                <div key={index}>
                                    <label htmlFor={field} className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                    <input
                                        id={field}
                                        name={field}
                                        type={field === 'percent' || field === 'quantity' ? 'number' : 'text'}
                                        placeholder={`Enter ${field}`}
                                        className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    {/* Description */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Description</legend>
                        <textarea
                            name="description"
                            placeholder="Enter a brief description of the product"
                            className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                        ></textarea>
                    </fieldset>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="py-2 px-4 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
                    >
                        Add Item
                    </button>
                </form>
            </section>
        </div>
        // <div>
        //     <SharedTitle title="Add product" />
        //     <section className="p-6 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        //         <form
        //             noValidate=""
        //             onSubmit={handleSubmit}
        //             className="container flex flex-col mx-auto space-y-6"
        //         >
        //             <fieldset className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
        //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full lg:col-span-3">
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="title" className="text-sm">
        //                             Product Name
        //                         </label>
        //                         <input
        //                             id="title"
        //                             name="productName"
        //                             type="text"
        //                             placeholder="Product Name"
        //                             value={formData.productName}
        //                             onChange={handleChange}
        //                             className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-violet-600 dark:border-gray-300"
        //                         />
        //                     </div>

        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="brand" className="text-sm">
        //                             Brand
        //                         </label>
        //                         <input
        //                             id="brand"
        //                             name="brand"
        //                             type="text"
        //                             placeholder="Brand"
        //                             value={formData.brand}
        //                             onChange={handleChange}
        //                             className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-violet-600 dark:border-gray-300"
        //                         />
        //                     </div>

        //                     <div className="col-span-full">
        //                         <label htmlFor="image" className="text-sm">
        //                             Image
        //                         </label>
        //                         <input
        //                             id="image"
        //                             name="image"
        //                             type="text"
        //                             placeholder="Image URL"
        //                             value={formData.image}
        //                             onChange={handleChange}
        //                             className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-violet-600 dark:border-gray-300"
        //                         />
        //                     </div>

        //                     {/* Sizes */}
        //                     {[...Array(6)].map((_, i) => (
        //                         <div className="col-span-full sm:col-span-2" key={`size${i + 1}`}>
        //                             <select
        //                                 name={`size${i + 1}`}
        //                                 value={formData[`size${i + 1}`]}
        //                                 onChange={handleChange}
        //                                 className="select select-bordered w-full"
        //                             >
        //                                 <option disabled value="">
        //                                     Select Size
        //                                 </option>
        //                                 <option>Size {i + 1} - Option 1</option>
        //                                 <option>Size {i + 1} - Option 2</option>
        //                             </select>
        //                         </div>
        //                     ))}

        //                     {/* Categories */}
        //                     {["levelOne", "levelTwo", "levelThree"].map((level, index) => (
        //                         <div className="col-span-full sm:col-span-2" key={level}>
        //                             <select
        //                                 name={level}
        //                                 value={formData[level]}
        //                                 onChange={handleChange}
        //                                 className="select select-bordered w-full"
        //                             >
        //                                 <option disabled value="">
        //                                     {`Level ${index + 1} Category`}
        //                                 </option>
        //                                 <option>Category 1</option>
        //                                 <option>Category 2</option>
        //                             </select>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </fieldset>

        //             <fieldset className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
        //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-full lg:col-span-3">
        //                     {[
        //                         { label: "Color", name: "color", type: "text", placeholder: "Color" },
        //                         { label: "Buy Price", name: "buyPrice", type: "text", placeholder: "Buy Price" },
        //                         { label: "Price", name: "price", type: "text", placeholder: "Price" },
        //                         { label: "Discount Percent", name: "percent", type: "text", placeholder: "%" },
        //                         { label: "Discounted Price", name: "discountPrice", type: "text", placeholder: "Discounted Price" },
        //                         { label: "Quantity", name: "quantity", type: "text", placeholder: "Quantity" },
        //                     ].map((field, i) => (
        //                         <div className="col-span-full sm:col-span-3" key={i}>
        //                             <label htmlFor={field.name} className="text-sm">
        //                                 {field.label}
        //                             </label>
        //                             <input
        //                                 id={field.name}
        //                                 name={field.name}
        //                                 type={field.type}
        //                                 placeholder={field.placeholder}
        //                                 value={formData[field.name]}
        //                                 onChange={handleChange}
        //                                 className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-violet-600 dark:border-gray-300"
        //                             />
        //                         </div>
        //                     ))}

        //                     <div className="col-span-full">
        //                         <label htmlFor="description" className="text-sm">
        //                             Description
        //                         </label>
        //                         <textarea
        //                             id="description"
        //                             name="description"
        //                             placeholder="Description"
        //                             value={formData.description}
        //                             onChange={handleChange}
        //                             className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-violet-600 dark:border-gray-300"
        //                         ></textarea>
        //                     </div>
        //                     <button
        //                         type="submit"
        //                         className="col-span-full px-4 py-2 text-white bg-violet-600 rounded-md hover:bg-violet-700"
        //                     >
        //                         ADD ITEM
        //                     </button>
        //                 </div>
        //             </fieldset>
        //         </form>
        //     </section>
        // </div>
        // <div>
        //     <SharedTitle title="Add product"></SharedTitle>
        //     <section className="p-6 dark:bg-gray-900 dark:text-gray-900">
        //         <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
        //             <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

        //                 <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="title" className="text-sm">Product Name</label>
        //                         <input id="title" name='productName' type="text" placeholder="Products Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>

        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Brand</label>
        //                         <input id="" name='brand' type="text" placeholder="Brand" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full">
        //                         <label htmlFor="image" className="text-sm">Image</label>
        //                         <input id="image" name='image' type="text" placeholder="ImageURL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>

        //                     {/* -----sizes----- */}

        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='size1' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Select Size</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>

        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='size2' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Select Size</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='size3' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Select Size</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='size4' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Select Size</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='size5' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Select Size</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='size6' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Select Size</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>

        //                     {/* ------Category----- */}



        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='levelOne' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>First Level Category</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='levelTwo' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Second Level Category</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-2">
        //                         <select name='levelThree' className="select select-bordered w-full max-w-xs">
        //                             <option disabled selected>Third Level Category</option>
        //                             <option>Han Solo</option>
        //                             <option>Greedo</option>
        //                         </select>
        //                     </div>

        //                 </div>
        //             </fieldset>
        //             <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

        //                 <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Color</label>
        //                         <input id="" type="text" name='color' placeholder="Color" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Buy Price</label>
        //                         <input id="" type="text" name='buyPrice' placeholder="buyPrice" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Price</label>
        //                         <input id="" type="text" name='price' placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Discount Percent</label>
        //                         <input id="" type="text" name='percent' placeholder="%" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Discounted Price</label>
        //                         <input id="" type="text" name='discountPrice' placeholder="Discounted Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label htmlFor="" className="text-sm">Quantity</label>
        //                         <input id="" type="text" name='quantity' placeholder="%" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
        //                     </div>
        //                     <div className="col-span-full">
        //                         <label htmlFor="bio" className="text-sm">Description</label>
        //                         <textarea id="bio" name='description' placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
        //                     </div>
        //                     <button type='submit'>ADD ITEM</button>
        //                     {/* <div className="col-span-full">
        //                     <label htmlFor="bio" className="text-sm">Photo</label>
        //                     <div className="flex items-center space-x-2">
        //                         <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
        //                         <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
        //                     </div>
        //                 </div> */}
        //                 </div>
        //             </fieldset>
        //         </form>
        //     </section>
        // </div>


    );
};

export default AdminAddProducts;