import { Avatar, Box, Grid, Grid2, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = ({ items }) => {


    console.log("review card", items)

    return (
        <div className='flex gap-6'>
            <Grid2 container spacing={2} gap={3}>
                <Grid2 item xs={1}>
                    <Box className='space-y-5'>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "indigo" }}>R</Avatar>
                    </Box>
                </Grid2>
            </Grid2>

            <Grid2 item xs={9}>
                <div className='space-y-2'>
                    <div className=''>
                        <p className='font-semibold test-lg'>{items?.user}</p>
                        <p className='opacity-70'>{items?.createdAt}</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5}></Rating>

                <p>{items?.review}</p>
            </Grid2>
        </div>
    );
};

export default ProductReviewCard;


