import React, { useState } from 'react';
import SharedTitle from '../../../Pages/Home/SharedTitle/SharedTitle';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../State/Products/Action';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const AdminAddProducts = () => {



    const [formData, setFormData] = useState({
        title: "",
        brand: "",
        thumNailImage: "",
        imageUrl: [{ url: "" }],
        sizes: [],
        topLevelCategory: "",
        secondLevelCategory: "",
        thirdLevelCategory: "",
        color: "",
        buyPrice: 0,
        sellPrice: 0,
        discountedPercent: 0,
        stockQuantity: 0,
        description: "",
    });

    // Handle image URL changes
    const handleImageUrlChange = (e, index) => {
        const { value } = e.target;
        const updatedImageUrl = [...formData.imageUrl];
        updatedImageUrl[index] = { url: value }; // Update the object at the index
        setFormData((prev) => ({ ...prev, imageUrl: updatedImageUrl }));
    };


    // Add new image URL field
    const addImageField = () => {
        setFormData((prev) => ({ ...prev, imageUrl: [...prev.imageUrl, { url: "" }] }));
    };


    // Remove an image URL field
    const removeImageField = (index) => {
        const updatedImageUrl = [...formData.imageUrl];
        updatedImageUrl.splice(index, 1); // Remove the specific object
        setFormData((prev) => ({ ...prev, imageUrl: updatedImageUrl }));
    };



    const disPtach = useDispatch()
    const jwt = localStorage.getItem("jwt")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle sizes changes
    const handleSizeChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSizes = [...formData.sizes];
        updatedSizes[index][name] = name === "sizeQuantity" ? Number(value) : value; // Update field
        setFormData((prev) => ({ ...prev, sizes: updatedSizes }));
    };

    // Add new size field
    const addSizeField = () => {
        setFormData((prev) => ({ ...prev, sizes: [...prev.sizes, { name: "", sizeQuantity: 0 }] }));
    };

    // Remove a size field
    const removeSizeField = (index) => {
        const updatedSizes = [...formData.sizes];
        updatedSizes.splice(index, 1); // Remove the specific size
        setFormData((prev) => ({ ...prev, sizes: updatedSizes }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        disPtach(createProduct(formData))
        console.log("Form Data:", formData);
    };

    return (

        <div>
            <SharedTitle title="Create Product" />
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
                                <label htmlFor="image" className="block text-sm font-medium">Thumbnail Image</label>
                                <input
                                    id="thumNailImage"
                                    name="thumNailImage"
                                    type="url"
                                    onChange={handleChange}
                                    placeholder="E.g., https://example.com/image.jpg"
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Image URLs */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Product Images</legend>

                        {/* Map over the imageUrl array to display input fields */}
                        {formData.imageUrl.map((image, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
                            >
                                <input
                                    type="url"
                                    value={image.url} // Access the url key in the object
                                    onChange={(e) => handleImageUrlChange(e, index)}
                                    placeholder={`Image URL ${index + 1}`}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImageField(index)} // Remove the specific field
                                    className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                >
                                    <HighlightOffIcon></HighlightOffIcon>
                                </button>
                            </div>
                        ))}

                        {/* Add Button to dynamically add fields */}
                        <button
                            type="button"
                            onClick={addImageField} // Call the addImageField function
                            className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
                        </button>
                    </fieldset>



                    {/* Sizes Section */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Available Sizes</legend>
                        {formData.sizes.map((size, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                <select
                                    name="name"
                                    value={size.name}
                                    onChange={(e) => handleSizeChange(e, index)}
                                    className="select select-bordered w-full sm:w-1/3 rounded-md"
                                >
                                    <option value="">Select Size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                </select>
                                <input
                                    type="number"
                                    name="sizeQuantity"
                                    onChange={(e) => handleSizeChange(e, index)}
                                    className="input input-bordered w-full sm:w-1/3 rounded-md"
                                    placeholder="Quantity"
                                    min="0"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSizeField(index)}
                                    className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                >
                                    <HighlightOffIcon></HighlightOffIcon>
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addSizeField}
                            className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                           <AddCircleOutlineOutlined></AddCircleOutlineOutlined>
                        </button>
                    </fieldset>

                    {/* Category Selection */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Category</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <select
                                name="topLevelCategory"
                                onChange={handleChange}
                                className="select select-bordered w-full rounded-md"
                                required
                            >
                                <option value="" disabled selected>First Level Category</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                            <select
                                name="secondLevelCategory"
                                onChange={handleChange}
                                className="select select-bordered w-full rounded-md"
                                required
                            >
                                <option value="" disabled selected>Second Level Category</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Others">Others</option>
                            </select>
                            <select
                                name="thirdLevelCategory"
                                onChange={handleChange}
                                className="select select-bordered w-full rounded-md"
                                required
                            >
                                <option value="" disabled selected>Third Level Category</option>
                                <option value="T-Shirts">T-Shirts</option>
                                <option value="Tops">Tops</option>
                            </select>
                        </div>
                    </fieldset>

                    {/* Pricing and Quantity */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Pricing & Quantity</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['color', 'buyPrice', 'sellPrice', 'discountedPercent', 'stockQuantity'].map((field, index) => (
                                <div key={index}>
                                    <label htmlFor={field} className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                    <input
                                        id={field}
                                        name={field}
                                        onChange={handleChange}
                                        type={field === 'buyPrice' || field === 'sellPrice' || field === 'discountedPercent' || field === 'stockQuantity' ? 'number' : 'text'}
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