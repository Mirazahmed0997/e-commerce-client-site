import React from 'react';
import "./ProductsCard.css"
import { Link } from 'react-router';

const ProductsCard = ({ Products }) => {

    // console.log("products card", Products)

    function calculateDiscountedPrice(originalPrice, percent) {
        const discountPercentage = percent; // 10% discount
        const discountedPrice = originalPrice * (1 - discountPercentage / 100);
        return discountedPrice;
    }

    const calDiscountedamount = ((Products.sellPrice * Products.discountedPersent) / 100)

    // Example usage

    const sellPrice = Products.sellPrice
    const discountedPercent = Products.discountedPersent;
    const calDiscountedPrice = calculateDiscountedPrice(sellPrice, discountedPercent);
    // console.log(`The discounted price is: $${calDiscountedPrice}`);


    return (

        <Link to={`/productDetails/${Products._id}`}>
            <div className="px-4 sm:px-6 md:px-8 max-w-[30rem] max-h-[35rem]">
                <div className="productCard w-full h-full max-w-[20rem] sm:max-w-[25rem] mx-auto p-4 sm:p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                    {/* Product Image */}
                    <div className="relative w-full h-48 sm:h-56 md:h-64">
                        <img
                            src={Products.thumNailImage}
                            alt={Products.title}
                            className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="mt-4 sm:mt-6 mb-2">
                        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-violet-600">
                            {Products.brand}
                        </span>
                        <h2 className="text-lg sm:text-xl font-semibold tracking-wide mt-1">
                            {Products.title}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-800 mt-2">
                            {Products.description.slice(0, 20)}...
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-gray-800">
                            {
                                Products.discountedPercent ? (<> <span className="font-bold text-base sm:text-lg">
                                    {Products.discountedPrice}/-
                                </span>
                                    <span className="line-through opacity-50 font-medium text-sm">
                                        {Products.sellPrice}/=
                                    </span>
                                    <span className="text-green-600 font-semibold text-sm">
                                        {Products.discountedPercent}% off
                                    </span></>) :
                                    (<>
                                        <span className="font-bold text-base sm:text-lg">
                                            {Products.discountedPrice}/-
                                        </span>
                                    </>)
                            }
                        </div>
                    </div>

                    {/* Buy Now Button */}
                    <Link to={`/productDetails/${Products._id}`}>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-2 sm:p-3 font-semibold tracking-wide text-gray-50 bg-violet-600 hover:bg-violet-700 transition rounded-md"
                        >
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </Link>

    );
};

export default ProductsCard;