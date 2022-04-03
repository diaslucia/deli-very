import { CATEGORIES } from "../../constants/categories";
import categoryTypes from "../types/categoryTypes";

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
    categories: CATEGORIES,
    selectedCategory: null,
}

const CategoryReducer = ( state = initialState, action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(category => category.id === action.categoryId);
            if (indexCategory === -1) return state
            return {
                ...state,
                selectedCategory: state.categories[indexCategory]
            }
        default:
            return state
    }
}

export default CategoryReducer;