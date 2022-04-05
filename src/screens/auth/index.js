import React, { useState , useReducer } from "react";
import { View, Text, KeyboardAvoidingView, Button } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";

import Input from "../../components/atoms/input/index";

import * as authAction from "../../store/actions/authAction";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for(const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const Auth = ({ navigation }) => {
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: "",
            password: ""
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    })

    const [isLogin, setIsLogin] = useState(true);

    const onHandlerLogIn = () => console.log("hola");

    const onHandlerSignUp = () => {
        dispatch(authActions.signUp(formState.inputValues.email, formState.inputValues.password));
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={50}
            enabled
        >
            <View style={styles.container}>
                <Text style={styles.title}>{isLogin ? "LogIn" : "Registro"}</Text>
                <View>
                    <Input
                        id="email"
                        label="Email"
                        placeholder="Ingresa tu correo"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        required
                        email
                        minLength={6}
                        secureTextEntry
                        autoCapitalize="none"
                        errorMessage="Ingrese un email válido"
                        onInputChange={() => {}}
                        initialValue="" 
                    />
                    <Input
                        id="password"
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor="#999"
                        keyboardType="default"
                        required
                        email
                        minLength={6}
                        secureTextEntry
                        autoCapitalize="none"
                        errorMessage="Ingrese un email válido"
                        onInputChange={() => {}}
                        initialValue="" 
                    />
                </View>
                <View>
                    <Button title="LogIn" onPress={onHandlerLogIn} color="red"/>
                    <Button title="Registrarse" onPress={onHandlerSignUp} color="red"/>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;