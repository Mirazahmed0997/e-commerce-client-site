import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCaruselData } from './HomeCaruselData';
import SharedTitle from '../SharedTitle/SharedTitle';

const HomeCarusel = () => {


    const items = HomeCaruselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image}></img>)

    return (
        <div className='relative mt-28'>
            <AliceCarousel
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                items={items}
            />

        </div>
    );
};

export default HomeCarusel;