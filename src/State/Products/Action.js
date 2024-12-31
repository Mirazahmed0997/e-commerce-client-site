import { axiosPublic } from "../../Pages/Hooks/useAxiosPublic"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"


export const findProducts = (reqData) => (disPatch) => {
    disPatch({type:FIND_PRODUCTS_REQUEST})
    const { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqData

    try {
        const {data}=axiosPublic.get(`api/products/color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        disPatch({type:FIND_PRODUCTS_SUCCESS,payload:data})


    } catch (error) {
        disPatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}




export const findProductsById = (reqData) => (disPatch) => {
    disPatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData

    try {
        const {data}=axiosPublic.get(`api/products/id/${productId}`)

        disPatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})


    } catch (error) {
        disPatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}