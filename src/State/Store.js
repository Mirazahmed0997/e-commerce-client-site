import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "../Auth/Reducer";
import { customerProductReducer } from "./Products/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { adminOrderReducer } from "./Admin/Orders/Reducer";
// import { authReducer } from "../Auth/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    AllProducts:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder:adminOrderReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))