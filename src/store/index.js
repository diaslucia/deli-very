import { createStore, combineReducers, applyMiddleware  } from "redux";
import CategoryReducer from "./reducers/categoryReducer";
import ProductReducer from "./reducers/productReducer";
import CartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));