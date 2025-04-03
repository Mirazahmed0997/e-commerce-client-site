import {
    CREATE_REVIEW_FAILURE,
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_SUCCESS,
    FIND_REVIEW_BY_ID_FAILURE,
    FIND_REVIEW_BY_ID_REQUEST,
    FIND_REVIEW_BY_ID_SUCCESS,
} from "./ActionlType";

const initialState = {
    review: null,  // For single review operations (like viewing or editing)
    loading: false, // Indicates loading state
    error: null,    // Stores any error messages
    reviews: [],    // Stores a list of reviews
};

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: [...state.reviews, action.payload], // Add the new review to the existing list
                loading: false,
            };

        case CREATE_REVIEW_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload, // Store error details
            };

        case FIND_REVIEW_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FIND_REVIEW_BY_ID_SUCCESS:
            return {
                ...state,
                review: action.payload, // Store the fetched review in a dedicated field
                loading: false,
            };

        case FIND_REVIEW_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
