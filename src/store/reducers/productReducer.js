import { PRODUCTS } from "../../constants/products";
import { SELECT_PRODUCT, FILTERED_PRODUCTS } from "../actions/productAction";

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selectedProduct: null,
}

const ProductReducer = (state = initialState, action) => {
   switch (action.type) {
       case SELECT_PRODUCT:
           return {
                ...state,
                selectedProduct: state.products.find(product => product.id === action.productId)
           }
        case FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.category === action.categoryId)
            }
        default:
            return state
   }
}

export default ProductReducer;