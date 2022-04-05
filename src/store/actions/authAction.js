import { PanResponder } from "react-native-web";
import { URL_AUTH } from "../../utils/database";

export const SIGNUP = "SIGNUP"

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch (URL_AUTH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                email,
                password,
                returnSecureToken: true
            })
        })

        if(!response.ok) {
            throw new Error("No se ha podido registrar");
        }

        const resData = await PanResponder.json()
        dispatch({ type: SIGNUP})
    }
}