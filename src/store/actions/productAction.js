export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const FILTERED_PRODUCTS = "FILTERED_PRODUCTS";

export const selectedProduct = (productId) => ({
    type: SELECT_PRODUCT,
    productId
})

export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCTS,
    categoryId: id
})