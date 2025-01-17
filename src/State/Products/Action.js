import { axiosPublic } from "../../Pages/Hooks/useAxiosPublic"
import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"



const useAxios = axiosPublic


export const findProducts = (reqData) => async (disPatch) => {

    disPatch({ type: FIND_PRODUCTS_REQUEST })

    // -----***********fix to do************------
    //    sizes is not working properly (showimg all sizes product even after selecting the size)
    //   sorting is impliment yet


    const { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqData

    console.log("action req data", reqData)


    try {
        // const {data}=await useAxios.get(`api/products?&pageNumber=${pageNumber}`)

        const { data } = await useAxios.get(`api/products?category=${category}&color=${color}&size=${sizes}`)
        // const { data } = await useAxios.get(`api/products?category=${category}&color=${color}&size=${sizes}&minPrice=${minPrice}&stock=${stock}&pageSize=${pageSize}&sort=${sort}&maxPrice=${maxPrice}&pageNumber=${pageNumber}&minDiscount=${minDiscount}&sort=${sort}`)

        console.log("product data", data)
        disPatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })


    } catch (error) {
        disPatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
}




export const findProductsById = (reqData) => async (disPatch) => {
    disPatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const { productId } = reqData


    try {
        const { data } = await axiosPublic.get(`api/products/id/${productId}`)

        disPatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
        // console.log("product :",data)



    } catch (error) {
        disPatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
}



export const createProduct = (product) => async (disPatch) => {
    console.log(product)
    disPatch({ type: CREATE_PRODUCTS_REQUEST })
    try {

        const { data } = await axiosPublic.post(`/api/admin/products`,product)

        disPatch({ type: CREATE_PRODUCTS_SUCCESS, payload: data })
        console.log("product :",data)



    } catch (error) {
        disPatch({ type: CREATE_PRODUCTS_FAILURE, payload: error.message })
    }
}



export const deleteProduct = (productId) => async (disPatch) => {

    console.log("delet id",productId)
    try {
        disPatch({ type: DELETE_PRODUCT_REQUEST })
        const { data } = await axiosPublic.delete(`/api/admin/products/${productId}`)

        disPatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId })
        // console.log("product :",data)



    } catch (error) {
        disPatch({ type: CREATE_PRODUCTS_FAILURE, payload: error.message })
    }
}

