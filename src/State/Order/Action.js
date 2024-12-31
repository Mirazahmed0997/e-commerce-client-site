import { axiosPublic } from "../../Pages/Hooks/useAxiosPublic"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"



export const createOrder = (reqData) => async (disPatch) => {
    disPatch({ type: CREATE_ORDER_REQUEST })

    try {
        const { data } = await axiosPublic.post(`api/orders`, reqData.address)
        if (data.id) {
            reqData.navigate({ search: `step=3&order_id=${data.id}` })
        }
        console.log("created Order:", data)
        disPatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        console.log("errror:",error)
        disPatch({type:CREATE_ORDER_FAILURE,payload:error.message})

    }
}



export const getOrderById = (orderId) => async (disPatch) => {
    disPatch({ type: GET_ORDER_BY_ID_REQUEST })

    try {
        const { data } = await axiosPublic.get(`api/orders/${orderId}`)
        
        console.log("Order by ID:", data)

        disPatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data })

    } catch (error) {
        console.log("errror:",error)
        disPatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message})

    }
}