import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const OrderTracker = ({activeStep}) => {
    const steps= [
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out For Delivery",
        "Delivered",
    ]
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                    {
                        steps.map((label)=><Step>
                            <StepLabel sx={{color:'#9155fd', fontSize:"54px"}}>{label}</StepLabel>
                        </Step>)
                    }
            </Stepper>
        </div>
    );
};

export default OrderTracker;