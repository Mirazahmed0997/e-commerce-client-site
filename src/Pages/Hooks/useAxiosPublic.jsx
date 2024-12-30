import axios from "axios";

const jwt=localStorage.getItem("jwt")

export const axiosPublic= axios.create({
    baseURL: "http://localhost:5000/",
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})

