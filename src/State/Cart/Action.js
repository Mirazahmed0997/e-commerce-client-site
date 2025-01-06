import { axiosPublic } from "../../Pages/Hooks/useAxiosPublic"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"



export const getCart = () =>async (disPatch) => {
    disPatch({ type: GET_CART_REQUEST })
    try {
        const { data } = await axiosPublic.get('api/cart')
        disPatch({ type: GET_CART_SUCCESS, payload: data })
        // console.log("cart data",data)
    } catch (error) {
        disPatch({ type: GET_CART_FAILURE, payload: error.message })
    }

}


export const addItemToCart = (reqData) =>async (disPatch) => {
    disPatch({ type: ADD_ITEM_TO_CART_REQUEST })
    // console.log("cartreqData",reqData)

    try {
        const { data } =await axiosPublic.put('api/cart/add',reqData)
        disPatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        console.log("cart data",data)
    } catch (error) {
        disPatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}


export const removeCartItem = (cartItemId) => async (disPatch) => {
    disPatch({ type: REMOVE_CART_ITEM_REQUEST })

    try {
        const { data } =await axiosPublic.delete(`api/cart_items/${cartItemId}`)
        disPatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
    } catch (error) {
        disPatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}


export const updateCartItem = (reqData) =>async (disPatch) => {
    disPatch({ type: UPDATE_CART_ITEM_REQUEST })

    console.log("reqdata",reqData.data)

    try {
        const { data } =await axiosPublic.put(`api/cart_items/${reqData.CartItemId}`,reqData.data)
        disPatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
    } catch (error) {
        disPatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}

