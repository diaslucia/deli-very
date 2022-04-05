import { createStore, combineReducers, applyMiddleware  } from "redux";
import CategoryReducer from "./reducers/categoryReducer";
import ProductReducer from "./reducers/productReducer";
import CartReducer from "./reducers/cartReducer";
import AuthReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    auth: AuthReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));