import React from 'react';
import "./ProductsCard.css"

const ProductsCard = ({Products}) => {
    return (
        <div className=' px-6'>

            <div className="productCard max-w-xs p-6 shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={Products.imageUrl} alt="" className="w-auto object-cover object-center w-full  h-full dark:bg-gray-500" />
                <img src="" alt="" className="object-cover object-center w-full rounded-md h-auto dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="textPart block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{Products.brand}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{Products.title}</h2>
                    <p className="dark:text-gray-800">{Products.description.slice(0,50)}...</p>
                    <span className="dark:text-gray-800 font-bold">{Products.discountedPrice}/- </span>
                    <span className="dark:text-gray-800 line-through opacity-50 font-semibold"> {Products.price}/= </span>
                    <span className="dark:text-gray-800 text-green-600 font-semibold"> {Products.discountPersent}% off</span>
                </div>

                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide  dark:bg-violet-600 dark:text-gray-50">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductsCard;