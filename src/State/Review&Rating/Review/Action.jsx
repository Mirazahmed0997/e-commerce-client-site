import { axiosPublic } from "../../../Pages/Hooks/useAxiosPublic"
import { CREATE_REVIEW_FAILURE, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, FIND_REVIEW_BY_ID_FAILURE, FIND_REVIEW_BY_ID_REQUEST, FIND_REVIEW_BY_ID_SUCCESS } from "../Rating/ActionlType"



// export const createReview = (reqData) =>async (disPatch) => {
//     console.log("ReviewAction",reqData)
//     disPatch({ type: CREATE_REVIEW_REQUEST })

//     try {
//         const { data } =await axiosPublic.post('/api/reviews/creates',reqData)
//         disPatch({ type: CREATE_REVIEW_SUCCESS, payload: data })
//         console.log("review data",data)
//     } 
//     catch (error) {
//         disPatch({ type: CREATE_REVIEW_FAILURE, payload: error.message })
//     }
// }

export const createReview = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_REVIEW_REQUEST });

    try {
        const { data } = await axiosPublic.post('/api/reviews/creates', reqData);
        dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
        console.log("Review Submitted:", data);
    } catch (error) {
        dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
    }
};


export const getReviews = (productId) =>async (disPatch) => {
    disPatch({ type: FIND_REVIEW_BY_ID_REQUEST })
    try {
        const { data } = await axiosPublic.get(`/api/reviews/product${productId}`)
        disPatch({ type: FIND_REVIEW_BY_ID_SUCCESS, payload: data })
        // console.log("cart data",data)
    } catch (error) {
        disPatch({ type: FIND_REVIEW_BY_ID_FAILURE, payload: error.message })
    }

}


