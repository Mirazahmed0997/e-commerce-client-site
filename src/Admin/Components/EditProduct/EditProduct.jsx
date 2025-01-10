import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { findProductsById } from '../../../State/Products/Action';
import { store } from '../../../State/Store';
import SharedTitle from '../../../Pages/Home/SharedTitle/SharedTitle';

const EditProduct = () => {

    const params = useParams()
    const disPatch = useDispatch()
    const { singleProduct } = useSelector(store => store.AllProducts)

    console.log(singleProduct)

    useEffect(() => {
        const productId = params.productId;
        disPatch(findProductsById({ productId })); // Fetch product details
    }, [params.productId]);

    const [formData, setFormData] = useState({
        title: "",
        brand: "",
        imageUrl: "",
        sizes: [{ name: '', sizeQuantity: 0 }],
        topLevelCategory: "",
        secondLevelCategory: "",
        thirdLevelCategory: "",
        color: "",
        buyPrice: "",
        sellPrice: "",
        discountedPersent: "",
        discountedPrice: "",
        stockQuantity: 0,
        description: "",
    });

    useEffect(() => {
        if (singleProduct) {
          setFormData(singleProduct); // Populate the form with product data
        }
      }, [singleProduct]);

    const jwt = localStorage.getItem("jwt")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSizeChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSizes = [formData.sizes];

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
        console.log("Form Data:", formData);
    };

    return (
        <div>
            <SharedTitle title="Update Product" />
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
                                    value={formData?.title}
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
                                    value={formData?.brand}
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
                                    value={formData?.imageUrl}
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
                                    {/* Dropdown for Size */}
                                    <select
                                        name={`name${i + 1}`}
                                        value={formData?.sizes[i]?.name || ""} // Set default value
                                        onChange={(e) => handleSizeChange(e, i)}
                                        className="select select-bordered w-full rounded-md"
                                    >
                                        <option value="" disabled>
                                            Select Size
                                        </option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                    </select>

                                    {/* Input for Quantity */}
                                    <input
                                        type="number"
                                        name={`sizeQuantity${i + 1}`}
                                        value={formData?.sizes[i]?.sizeQuantity || ""}  // Set default value
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
                            <div>
                                <label htmlFor="color" className="block text-sm font-medium capitalize">Color</label>
                                <input
                                    id="color"
                                    name="color"
                                    type="text"
                                    value={formData?.color}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    placeholder="Color"
                                />
                            </div>
                            <div>
                                <label htmlFor="buyPrice" className="block text-sm font-medium capitalize">Buy Price</label>
                                <input
                                    id="buyPrice"
                                    name="buyPrice"
                                    type="number"
                                    value={formData?.buyPrice}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    placeholder="Buy Price"
                                />
                            </div>
                            <div>
                                <label htmlFor="sellPrice" className="block text-sm font-medium capitalize">Sell Price</label>
                                <input
                                    id="sellPrice"
                                    name="sellPrice"
                                    type="number"
                                    value={formData?.sellPrice}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    placeholder="Sell Price"
                                />
                            </div>
                            <div>
                                <label htmlFor="discountedPrice" className="block text-sm font-medium capitalize">Discounted Price</label>
                                <input
                                    id="discountedPrice"
                                    name="discountedPrice"
                                    type="number"
                                    value={formData?.discountedPrice}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    placeholder="Discounted Price"
                                />
                            </div>
                            <div>
                                <label htmlFor="discountedPrice" className="block text-sm font-medium capitalize">Discounted Percent</label>
                                <input
                                    id="discountedPersent"
                                    name="discountedPersent"
                                    type="number"
                                    value={formData?.discountedPersent}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    placeholder="Discounted Price"
                                />
                            </div>
                            <div>
                                <label htmlFor="stockQuantity" className="block text-sm font-medium capitalize">Stock Quantity</label>
                                <input
                                    id="stockQuantity"
                                    name="stockQuantity"
                                    type="number"
                                    value={formData?.stockQuantity}
                                    className="w-full p-2 rounded-md border focus:ring-2 focus:ring-violet-600 dark:border-gray-700"
                                    placeholder="Stock Quantity"
                                />
                            </div>
                        </div>
                    </fieldset>


                    {/* Description */}
                    <fieldset className="p-6 rounded-md shadow-md dark:bg-gray-800 space-y-4">
                        <legend className="text-lg font-semibold">Description</legend>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            placeholder="Enter a brief description of the product"
                            value={formData?.description}
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

export default EditProduct;