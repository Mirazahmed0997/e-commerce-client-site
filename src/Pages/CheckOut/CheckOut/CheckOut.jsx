import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import DeliveryAddressForm from '../DeliveryAddressForm/DeliveryAddressForm';
import OrderSummary from '../OrderSummary/OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();

    // Parse the initial step from the query parameter
    const querySearch = new URLSearchParams(location.search);
    const initialStep = parseInt(querySearch.get("step"), 10);

    // State for active step, initialized based on query
    const [activeStep, setActiveStep] = React.useState(
        !isNaN(initialStep) && initialStep >= 0 && initialStep < steps.length ? initialStep : 0
    );

    // Synchronize state and query parameter
    React.useEffect(() => {
        const stepFromQuery = parseInt(querySearch.get("step"), 10);
        if (!isNaN(stepFromQuery) && stepFromQuery !== activeStep) {
            setActiveStep(stepFromQuery);
        }
    }, [location.search]);

    // Update the query parameter when the step changes
    const updateQuery = (step) => {
        navigate(`?step=${step}`, { replace: true });
    };

    const handleNext = () => {
        const nextStep = activeStep + 1;
        setActiveStep(nextStep);
        updateQuery(nextStep);
    };

    const handleBack = () => {
        const prevStep = activeStep - 1;
        setActiveStep(prevStep);
        updateQuery(prevStep);
    };

    const handleReset = () => {
        setActiveStep(0);
        updateQuery(0);
    };

    return (
        <div className="mt-32 p-4 md:p-6">
            <div className="w-full">
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography
                                sx={{
                                    mt: 2,
                                    mb: 1,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                }}
                            >
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    pt: 2,
                                }}
                            >
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={handleReset}
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' },
                                        mt: { xs: 1, sm: 0 },
                                    }}
                                >
                                    Reset
                                </Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography
                                sx={{
                                    mt: 2,
                                    mb: 1,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                }}
                            >
                                Step {activeStep + 1}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    pt: 2,
                                }}
                            >
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{
                                        mr: { sm: 1 },
                                        mb: { xs: 1, sm: 0 },
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={handleNext}
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </div>
            <div className="mt-6">
                {activeStep === 1 ? (
                    <div className="p-4 bg-gray-100 rounded-md shadow-md md:p-6 text-black">
                        <DeliveryAddressForm />
                    </div>
                ) : (
                    <div className="p-4 bg-gray-100 rounded-md shadow-md md:p-6">
                        <OrderSummary />
                    </div>
                )}
            </div>
        </div>



    );
}
