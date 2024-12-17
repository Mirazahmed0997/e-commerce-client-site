import React from 'react';
import "./ProductsCard.css"
import { Link } from 'react-router';

const ProductsCard = ({ Products }) => {
    return (
        <div className="px-4 sm:px-6 md:px-8">
            <div className="productCard max-w-xs sm:max-w-sm mx-auto p-4 sm:p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                {/* Product Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                    <img
                        src={Products.imageUrl}
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
                        {Products.description.slice(0, 50)}...
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-gray-800">
                        <span className="font-bold text-base sm:text-lg">
                            {Products.discountedPrice}/-
                        </span>
                        <span className="line-through opacity-50 font-medium text-sm">
                            {Products.price}/=
                        </span>
                        <span className="text-green-600 font-semibold text-sm">
                            {Products.discountPersent}% off
                        </span>
                    </div>
                </div>

                {/* Buy Now Button */}
                <Link to="/productDetails">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-2 sm:p-3 font-semibold tracking-wide text-gray-50 bg-violet-600 hover:bg-violet-700 transition rounded-md"
                    >
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsCard;