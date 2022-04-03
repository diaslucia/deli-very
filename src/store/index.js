import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/categoryReducer";
import ProductReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
})

export default createStore(rootReducer);