import { CANCLED_ORDER_FAILURE, CANCLED_ORDER_REQUEST, CANCLED_ORDER_SUCCESS, CONFIRMD_ORDER_FAILURE, CONFIRMD_ORDER_REQUEST, CONFIRMD_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

const initialState = {
    loading: false,
    orders: [],
    error: ""
};

export const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_ORDER_SUCCESS:
            return {
                ...state,
                // Add item(s) to the cartItems list. Ensure action.payload.cartItems is correct
                orders: action.payload,  // Check this structure!
                loading: false,
                error: null
            };

        case GET_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CONFIRMD_ORDER_REQUEST:
        case PLACED_ORDER_REQUEST:
        case DELIVERED_ORDER_REQUEST:
        case CANCLED_ORDER_REQUEST:
            return { ...state, loading: true };

        case CONFIRMD_ORDER_SUCCESS:
            return {
                ...state,
                confirmed: action.payload, // Check if payload has cartItems
                loading: false
            };
        case PLACED_ORDER_SUCCESS:
            return {
                ...state,
                placed: action.payload, // Check if payload has cartItems
                loading: false
            };
        case DELIVERED_ORDER_SUCCESS:
            return {
                ...state,
                delivered: action.payload, // Check if payload has cartItems
                loading: false
            };
        case CANCLED_ORDER_SUCCESS:
            return {
                ...state,
                cancled: action.payload, // Check if payload has cartItems
                loading: false
            };

        case CONFIRMD_ORDER_FAILURE:
        case PLACED_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
        case CANCLED_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DELETE_ORDER_SUCCESS:
            return { ...state, loading: false, error: null,deletedProduct:action.payload}
            // return {
            //     ...state,
            //     loading: false,
            //     orders: state.orders.filter((order) => order._id !== action.payload)
            // };
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        case SHIP_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SHIP_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                shipped: action.payload
            };
        case SHIP_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };





        default:
            return state;
    }
};
