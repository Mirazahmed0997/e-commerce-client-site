import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/Store';
import { createReview } from '../../../State/Review&Rating/Review/Action';

const ReviewModal = ({ singleProduct }) => {
    const [comment, setComment] = useState(''); // State to store the textarea value
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    console.log(auth.user?._id)

    const handleCommentChange = (e) => {
        setComment(e.target.value); // Update the comment state as the user types
    };

    const handleCommentButton = (id) => {
        if (!comment.trim()) {
            alert("Comment cannot be empty!");
            return;
        }

        console.log("Product ID:", id);
        console.log("Comment:", comment);

        // You can dispatch an action or make an API call here
        // Example:
        dispatch(createReview({ productId: singleProduct?._id, review: comment }));

        // Clear the comment field and close the modal
        setComment('');
        document.getElementById('my_modal_2').close();
    };

    return (
        <div className='m-6'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Add Review</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                <h3 className="font-bold text-lg m-2">Add Your opinions!</h3>
                    {/* Textarea for the comment */}
                    <textarea
                        placeholder="Write your comment..."
                        name="comment"
                        value={comment}
                        onChange={handleCommentChange} // Track changes to the textarea
                        className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>
                    {/* Submit button */}
                    <button
                        className="btn mt-4"
                        onClick={() => handleCommentButton(singleProduct?._id)}
                    >
                        Submit
                    </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
       


    );
};

export default ReviewModal;
