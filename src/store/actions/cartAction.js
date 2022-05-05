import { URL_API } from "../../utils/database";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

/* Map */
import MAP from "../../constants/map";

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM ,
    id
});

export const confirmCart = (cart, total, user, location) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`,);

        if(!response.ok) throw new Error("[RESPONSE] Something went wrong!");
        
        const resData = await response.json();
        if(!resData.results) throw new Error("[GEOCODE] Something went wrong!");

        const address = resData.results[0].formatted_address;
        try {
            
            const response = await fetch(`${URL_API}/order.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date: Date.now(), items: cart, total, user, delivery: {address} })
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
