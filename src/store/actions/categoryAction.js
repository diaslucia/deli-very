import { categoryTypes } from "../types/categoryTypes";
const { SELECT_CATEGORY } = categoryTypes;

export const selectedCategory = (id) => ({
    type: SELECT_CATEGORY,
    categoryId: id
});