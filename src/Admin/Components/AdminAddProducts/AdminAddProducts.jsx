import React, { useState } from 'react';
import SharedTitle from '../../../Pages/Home/SharedTitle/SharedTitle';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../State/Products/Action';


const AdminAddProducts = () => {



    const [formData, setFormData] = useState({
        title: "",
        brand: "",
        imageUrl: "",
        sizes: [
            { name: '', sizeQuantity: 0 },
            { name: '', sizeQuantity: 0 },
            { name: '', sizeQuantity: 0 },
            { name: '', sizeQuantity: 0 },
            { name: '', sizeQuantity: 0 },
            { name: '', sizeQuantity: 0 }
        ],
        topLevelCategory: "",
        secondLevelCategory: "",
        thirdLevelCategory: "",
        color: "",
        buyPrice: 0,
        sellPrice: 0,
        discountedPersent: 0,
        discountedPrice: 0,
        stockQuantity: 0,
        description: "",
    });

    const disPtach = useDispatch()
    const jwt = localStorage.getItem("jwt")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSizeChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSizes = [...formData.sizes];
        
        if (name === `size${index + 1}`) {
          updatedSizes[index].size = value;
        } else if (name === `quantity${index + 1}`) {
          updatedSizes[index].quantity = value;
        }
    
        setFormData((prev) => ({
          ...prev,
          sizes: updatedSizes
        }));
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // disPtach(createProduct(formData))
        console.log("Form Data:", formData);
    };

    return (

        <div>
            <SharedTitle title="create Product" />
            <section className="p-6 dark:bg-gray-900 dark:text-gray-50">
                <form
                    noValidate
                   onSubmit={handleSubmit}
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
                                    name="title"
                                    type="text"
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    placeholder="E.g., IKEA"
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium">Image URL</label>
                                <input
                                    id="image"
                                    name="imageUrl"
                                    type="url"
                                    onChange={handleChange}
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
                                <div key={i} className="space-y-2">
                                    <select
                                        name={`size${i + 1}`}
                                        onChange={(e) => handleSizeChange(e, i)}
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
                                    <input
                                        type="number"
                                        name={`quantity${i + 1}`}
                                        onChange={(e) => handleSizeChange(e, i)}
                                        className="input input-bordered w-full rounded-md"
                                        placeholder="Quantity"
                                        min="0"
                                    />
                                </div>
                            ))}
                        </div>
                    </fieldset>


                    {/* Category Selection */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Category</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <select
                                name='topLevelCategory'
                                onChange={handleChange}
                                className="select select-bordered w-full rounded-md"
                                required
                            >
                                <option value="" disabled selected>First Level Category</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                                {/* <option value="Clothing">Accessories</option> */}
                            </select>
                            <select
                                name='secondLevelCategory'
                                onChange={handleChange}
                                className="select select-bordered w-full rounded-md"
                                required
                            >
                                <option value="" disabled selected>Second Level Category</option>
                                <option value="Clothing">Clothing </option>
                                <option value="Accessories">Accessories</option>
                                <option value="Others">Others</option>
                            </select>
                            <select
                                name='thirdLevelCategory'
                                onChange={handleChange}
                                className="select select-bordered w-full rounded-md"
                                required
                            >
                                <option value="" disabled selected>Third Level Category</option>
                                <option value="T-Shirts">T-Shirts</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                            </select>
                        </div>
                    </fieldset>

                    {/* Pricing and Quantity */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Pricing & Quantity</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['color', 'buyPrice', 'sellPrice', 'discountedPersent', 'discountedPrice', 'stockQuantity'].map((field, index) => (
                                <div key={index}>
                                    <label htmlFor={field} className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                    <input
                                        id={field}
                                        name={field}
                                        onChange={handleChange}
                                        type={field === 'buyPrice' || field === 'sellPrice'|| field === 'discountedPersent'|| field === 'discountedPrice'|| field === 'stockQuantity' ? 'number' : 'text'}
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
                            onChange={handleChange}
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
    );
};

export default AdminAddProducts;