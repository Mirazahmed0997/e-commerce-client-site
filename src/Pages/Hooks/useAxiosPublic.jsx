import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to attach the token dynamically
axiosPublic.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt"); // Fetch the token dynamically
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
});
