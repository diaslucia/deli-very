export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM ,
    id
});

export const confirmCart = (cart) => ({
    type: CONFIRM_CART,
    cart
});