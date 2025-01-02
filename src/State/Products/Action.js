import { axiosPublic } from "../../Pages/Hooks/useAxiosPublic"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"



const useAxios=axiosPublic


export const findProducts = (reqData) =>async (disPatch) => {

    disPatch({type:FIND_PRODUCTS_REQUEST})



    // -----***********fix to do************------

    //    sizes is not working properly (showimg all sizes product even after selecting the size)
    //   discount have to fix discounted product, cannot get product by select discount, 
    //   sorting is impliment yet


    const { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock,pageNumber, pageSize } = reqData


    try {
        // const {data}=await useAxios.get(`api/products?&pageNumber=${pageNumber}`)
        
        const {data}=await useAxios.get(`api/products?category=${category}&color=${color}&size=${sizes}&minPrice=${minPrice}&stock=${stock}&pageSize=${pageSize}&sort=${sort}&maxPrice=${maxPrice}`)

        console.log("product data",data)
        disPatch({type:FIND_PRODUCTS_SUCCESS,payload:data})


    } catch (error) {
        disPatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}




export const findProductsById = (reqData) =>async (disPatch) => {
    disPatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData

    try {
        const {data}=await axiosPublic.get(`api/products/id/${productId}`)

        disPatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})


    } catch (error) {
        disPatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}