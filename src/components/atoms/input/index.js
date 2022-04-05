import React, { useReducer, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export const INPUT_CHANGE = "INPUT_CHANGE";
export const INPUT_BLUR = "INPUT_BLUR";

const InputReducer = (state = state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                 ...state,
                 value: action.value,
                 isValid: action.isValid,
            }
         case INPUT_BLUR:
             return {
                 ...state,
                 touched: true,
             }
         default:
             return state
    }
} 

const Input = ( props ) => {
    const [inputState, dispatch] = useReducer(InputReducer, {
        value: props.initialValue ? props.initialValue : "",
        isValid: props.initialValid,
        touched: false,
    })

    const { onInputChange, id } = props;

    useEffect(() => {
        if(inputState.touched) {
            onInputChange(inputState.value, inputState.isValid)
        }
    }, [inputState, onInputChange])

    const textChangeHandler = text => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;

        if (props.required && text.trim().length === 0) isValid = false;
        
        if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;

        if (props.min != null && +text < props.min) isValid = false;

        if (props.max != null && +text > props.max) isValid = false;

        if (props.minLength != null && text.length < props.minLength) isValid = false;

        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid 
        });
    }

    const onBlurHandler = () => dispatch({ type: INPUT_BLUR });

    return(
        <View style={styles.container}>
            <Text>{props.label}</Text>
            <TextInput
                {...props}
                value={inputState.value}
                onChangeText={textChangeHandler}
                onBlur={onBlurHandler}
            />
            {!inputState.isValid && inputState.touched && 
            (
                <View>
                    <Text style={styles.error}>{props.errorMessage}</Text>
                </View>
            )}
        </View>
    );
}

export default Input;