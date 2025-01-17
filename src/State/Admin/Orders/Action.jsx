import { axiosPublic } from "../../../Pages/Hooks/useAxiosPublic"
import { CANCLED_ORDER_FAILURE, CANCLED_ORDER_REQUEST, CANCLED_ORDER_SUCCESS, CONFIRMD_ORDER_FAILURE, CONFIRMD_ORDER_REQUEST, CONFIRMD_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType"


export const getOrders = () => async (disPatch) => {
        disPatch({ type: GET_ORDER_REQUEST })
        try {
            const response = await axiosPublic.get(`api/admin/orders/`)
            disPatch({ type: GET_ORDER_SUCCESS, payload: response.data })
        } catch (error) {
            disPatch({ type: GET_ORDER_FAILURE, payload: error.message })
        }
    
}
export const confirmOrder = (orderId) => async (disPatch) => {
    disPatch({ type: CONFIRMD_ORDER_REQUEST })
    try {
        const response = await axiosPublic.put(`api/admin/orders/${orderId}/confirmed`)
        const data = response.data
        disPatch({ type: CONFIRMD_ORDER_SUCCESS, payload: response.data })
    } catch (error) {
        disPatch({ type: CONFIRMD_ORDER_FAILURE, payload: error.message })
    }

}
export const shipOrder = (orderId) => async (disPatch) => {
    disPatch({ type: SHIP_ORDER_REQUEST })
    try {
        const {data} = await axiosPublic.put(`api/admin/orders/${orderId}/shipped`)
        // const data = response.data
        disPatch({ type: SHIP_ORDER_SUCCESS, payload: data })
    } catch (error) {
        disPatch({ type: SHIP_ORDER_FAILURE, payload: error.message })
    }

}

export const deliverOrder = (orderId) => async (disPatch) => {
    disPatch({ type: DELIVERED_ORDER_REQUEST })
    try {
        const {data} = await axiosPublic.put(`api/admin/orders/${orderId}/delivered`)
        // const data = response.data
        disPatch({ type: DELIVERED_ORDER_SUCCESS, payload: data })
    } catch (error) {
        disPatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message })
    }

}
export const cancelOrder = (orderId) => async (disPatch) => {
    disPatch({ type: CANCLED_ORDER_REQUEST })
    try {
        const {data} = await axiosPublic.put(`api/admin/orders/${orderId}/cancelled`)
        // const data = response.data
        disPatch({ type: CANCLED_ORDER_SUCCESS, payload: data })
    } catch (error) {
        disPatch({ type: CANCLED_ORDER_FAILURE, payload: error.message })
    }

}
export const placeOrder = (orderId) => async (disPatch) => {
    disPatch({ type: PLACED_ORDER_REQUEST })
    try {
        const {data} = await axiosPublic.put(`api/admin/orders/${orderId}`)
        // const data = response.data
        disPatch({ type: PLACED_ORDER_SUCCESS, payload: data })
    } catch (error) {
        disPatch({ type: PLACED_ORDER_FAILURE, payload: error.message })
    }

}
export const deleteOrder = (orderId) => async (disPatch) => {
    disPatch({ type: DELETE_ORDER_REQUEST })
    try {
        const {data} = await axiosPublic.delete(`api/admin/orders/${orderId}/deleted`)
        // const data = response.data
        disPatch({ type: DELETE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        disPatch({ type: DELETE_ORDER_FAILURE, payload: error.message })
    }

}