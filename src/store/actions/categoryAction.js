export const SELECT_CATEGORY = "SELECT_CATEGORY";

export const selectedCategory = (id) => ({
    type: SELECT_CATEGORY,
    categoryId: id
});