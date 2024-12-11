import React from 'react';

const HomeSectionCard = ({item}) => {
    return (
        <div>
            <div className="max-w-xs p-6  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img className='h-96' src={item.imageUrl}/>
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.brand}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{item.title}</h2>
                </div>
                <p className="dark:text-gray-800">{item.description.slice(0,20)}...</p>
            </div>
        </div>
    );
};

export default HomeSectionCard;