import React from 'react';

const HomeSectionCard = ({ item }) => {
    return (
        <div className="max-w-sm mx-auto">
            <div className="w-60 p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 flex flex-col">
                {/* Responsive Image */}
                <img
                    className="w-full h-48 object-cover rounded-md"
                    src={item.imageUrl}
                    alt={item.title}
                />
                {/* Content */}
                <div className="mt-4 flex-1">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
                        {item.brand}
                    </span>
                    <h2 className="text-lg font-semibold mt-1">{item.title}</h2>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    {item.description.slice(0, 40)}...
                </p>
            </div>
        </div>
    );
};

export default HomeSectionCard;