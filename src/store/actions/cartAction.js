import { URL_API } from "../../utils/database";
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

export const confirmCart = (cart, total, user) => {
    return async dispatch => {
        try {
            
            const response = await fetch(`${URL_API}/order.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date: Date.now(), items: cart, total, user })
            });

            const result = await response.json();

            dispatch({
                type: CONFIRM_CART,
                cart: result
            })

        } catch (error) {
            console.log(error.message)
        }
    }
}
