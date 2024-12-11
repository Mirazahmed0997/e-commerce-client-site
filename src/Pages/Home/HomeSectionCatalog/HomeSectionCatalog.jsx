import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import SharedTitle from '../SharedTitle/SharedTitle';
// import { mensShirt } from '../../Assets/Mens/MensShirt';

const HomeSectionCatalog = ({ data,title,subTitle }) => {
    // const items = mensShirt

    // const responsive = {
    //     0: { items: 1 },
    //     720: { items: 3 },
    //     1024: { items: 5 },
    // };

    return (
        <div className='ms-6'>
            {/* <AliceCarousel
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                items={items}
                responsive={responsive}
            /> */}
            <SharedTitle title={title} subTitle={subTitle}></SharedTitle>

            <div className="relative flex items-center justify-center w-full dark:text-gray-900">
                <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                    <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    {
                        data.slice(0, 10).map((item) =>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto ">
                                <HomeSectionCard item={item}></HomeSectionCard>
                            </div>)
                    }

                </div>
                <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default HomeSectionCatalog;