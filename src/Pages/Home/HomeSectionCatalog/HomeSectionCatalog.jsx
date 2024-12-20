import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import SharedTitle from '../SharedTitle/SharedTitle';
import  { useRef } from 'react';

// import { mensShirt } from '../../Assets/Mens/MensShirt';

const HomeSectionCatalog = ({ data, title, subTitle }) => {

    const carouselRef = useRef(null);

    // Scroll left
    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 300; // Scroll 300px to the left
        }
    };

    // Scroll right
    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 300; // Scroll 300px to the right
        }
    };

    // const items = mensShirt

    // const responsive = {
    //     0: { items: 1 },
    //     720: { items: 3 },
    //     1024: { items: 5 },
    // };

    return (
        <div className="ms-6">
            {/* Title Section */}
            <SharedTitle title={title} subTitle={subTitle} />

            {/* Carousel Container */}
            <div className="relative flex items-center justify-center w-full dark:text-gray-900">
                {/* Left Arrow Button */}
                <button
                    aria-label="Slide back"
                    type="button"
                    onClick={scrollPrev} // Call scrollPrev
                    className="absolute left-0 z-30 p-2 ml-4 bg-opacity-50 rounded-full focus:outline-none dark:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600"
                >
                    <svg
                        width="8"
                        height="14"
                        fill="none"
                        viewBox="0 0 8 14"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                    >
                        <path
                            d="M7 1L1 7L7 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>

                {/* Scrollable Card Container */}
                <div
                    ref={carouselRef}
                    className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-x-auto lg:gap-8 scroll-smooth"
                    style={{ scrollBehavior: 'smooth' }} // Smooth scrolling
                >
                    {data.slice(0, 10).map((item, index) => (
                        <div key={index} className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <HomeSectionCard item={item} />
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button */}
                <button
                    aria-label="Slide forward"
                    type="button"
                    onClick={scrollNext} // Call scrollNext
                    className="absolute right-0 z-30 p-2 mr-4 bg-opacity-50 rounded-full focus:outline-none dark:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600"
                >
                    <div className="flex items-center">
                        <span className="font-bold"></span>
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                        >
                            <path
                                d="M1 1L7 7L1 13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default HomeSectionCatalog;