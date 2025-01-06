import React from 'react';

const AddressCart = ({address}) => {
    return (
        <div>
            {/* <h1>Delivery Address</h1> */}
            <div className="col-span-full">
                <p className='font-semibold'>{address?.firstName} {address?.lastName}</p>
                <div className='mt-2'>
                    <p>{address?.streetAddress}</p>
                    <p>{address?.city} {address?.zipCode}</p>
                    {address?.mobile?
                        <><p>Contact: 0{address?.mobile}</p></>:
                        <></>
                    }
                </div>
            </div><br />

        </div>
    );
};

export default AddressCart;