import { SIGNUP, SIGNIN } from "../actions/authAction";

const initialState = {
    token: null,
    userId: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGNIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default authReducer;