import { createStore, combineReducers, applyMiddleware  } from "redux";

import CategoryReducer from "./reducers/categoryReducer";
import ProductReducer from "./reducers/productReducer";
import CartReducer from "./reducers/cartReducer";
import AuthReducer from "./reducers/authReducer";
import OrderReducer from "./reducers/orderReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    auth: AuthReducer,
    order: OrderReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));