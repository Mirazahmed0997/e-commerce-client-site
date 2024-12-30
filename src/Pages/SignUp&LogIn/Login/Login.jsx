import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
// import { store } from '../../../State/Store';
import { login } from '../../../Auth/Action';
import { store } from '../../../State/Store';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const jwt=localStorage.getItem("jwt")
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate()
    const disPatch=useDispatch();

    // useEffect(()=>
    //     {
    //         if(jwt)
    //         {
    //             disPatch(getUser(jwt))
    //         }
    //     },[jwt,auth.jwt])


    const handleLoginButton = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        disPatch(login(userData))
        navigate("/")
        console.log(userData);
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 mt-10 sm:mt-20 md:mt-32 mb-6 shadow-2xl">
            <h2 className="mb-3 text-2xl sm:text-2xl font-semibold text-center ">Sign in to access your account
            </h2>

            <form onSubmit={handleLoginButton} noValidate className="space-y-6 sm:space-y-8 ">
                {/* Email Input */}
                <div className="space-y-4">

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address<span className="text-red-900">*</span></label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password<span className="text-red-900">*</span>
                            </label>
                            <a
                                href="#"
                                rel="noopener noreferrer"
                                className="text-xs text-indigo-600 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-4 py-2 mt-1 border rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.146a9.786 9.786 0 0116.044 0M3.98 15.854a9.786 9.786 0 0116.044 0M9.596 12c0-2.242 1.726-4.062 3.854-4.062s3.854 1.82 3.854 4.062-1.726 4.062-3.854 4.062-3.854-1.82-3.854-4.062z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.146a9.786 9.786 0 0116.044 0M3.98 15.854a9.786 9.786 0 0116.044 0M9.596 12c0-2.242 1.726-4.062 3.854-4.062s3.854 1.82 3.854 4.062-1.726 4.062-3.854 4.062-3.854-1.82-3.854-4.062z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-500 hover:bg-indigo-700 hover:text-white dark:text-gray-50">Sign In</button>

                <p className="text-sm text-center dark:text-gray-600">
                    Don't have an account?
                    <Link to="/signUp" rel="noopener noreferrer" className="underline text-indigo-500 hover:underline"> Sign up Now</Link>
                </p>
            </form>

            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
            </div>

            <div className="my-6 space-y-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;