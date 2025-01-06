import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_ITEMS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
            return { ...state, loading: true, error: null };

        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                // Add item(s) to the cartItems list. Ensure action.payload.cartItems is correct
                cartItems: [...state.cartItems, ...action.payload.cartItems],  // Check this structure!
                loading: false
            };

        case ADD_ITEM_TO_CART_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_CART_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems, // Check if payload has cartItems
                cart: action.payload, // The full cart object might contain more details
                loading: false
            };

        case GET_CART_FAILURE:
            return { ...state, error: action.payload, loading: false };

        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, loading: true, error: null };

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                deleteCartItem: action.payload, // Ensure the structure is correct
                loading: false
            };

        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                updateCartItem: action.payload,
                loading: false
            };

        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return { ...state, error: action.payload, loading: false };

        case CLEAR_CART_ITEMS:
            return { ...state, cartItems: [] };

        default:
            return state;
    }
};
