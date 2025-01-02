import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

import {axiosPublic} from '../../src/Pages/Hooks/useAxiosPublic'




const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })



export const register = (userData) => async (dispatch) => {
    

    // console.log(userData)
    const useAxios=axiosPublic
    dispatch(registerRequest())
    try {
        const response = await useAxios.post('auth/signUp', userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }

        console.log("user", user)

        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}


const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData) => async (dispatch) => {
    const useAxios=axiosPublic

    dispatch(loginRequest())
    try {
        const response = await useAxios.post('auth/signIn', userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("jwt", user.jwt)
        dispatch(loginSuccess(user.login))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}


const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = (jwt) => async (dispatch) => {
    const useAxios=axiosPublic

    dispatch(getUserRequest())
    try {
        const response = await useAxios.get('api/users/profile', {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        const user = response.data;
        // console.log(user)
        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}


export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT ,payload:null})
    localStorage.clear();
}