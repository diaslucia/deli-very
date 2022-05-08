import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Button, ImageBackground } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { useDispatch } from "react-redux";
import { signin, signup } from "../../store/actions/authAction";

/* Components */
import Input from "../../components/atoms/input/index";

const Auth = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNotValid, setIsNotValid] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();

    const onChangeInput = (value, type) => {
        if(type === 'email') {
            setEmail(value);
        }
        if(type === 'password') {
            setPassword(value);
        }

        if(emailInputRef.current.state.validate && passwordInputRef.current.state.validate) {
            setIsNotValid(false);
        } else {
            setIsNotValid(true);
        }
    }

    const handleAuth = () => {
        if(isLogin) {
            dispatch(signin(email, password));
        } else {
            dispatch(signup(email, password));
        }
    }
    
    return (
            <ImageBackground source={require('../../../assets/wallpaper.png')} style={styles.image}>
                <View style={styles.containerCard}>

                    <Text style={styles.formTitle}>{isLogin ? "Iniciar Sesión" : "Registrarse"}</Text>

                    <View style={styles.formContainer}>

                        <Input 
                            ref={emailInputRef}
                            placeholder="Ingresa tu correo"
                            placeholderTextColor= {colors.button}
                            keyboardType="email-address"
                            type="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeInput={(value) => onChangeInput(value, "email")}
                            value={email}
                            maxLength={60}
                        />
                        <Input 
                            ref={passwordInputRef}
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor= {colors.button}
                            type="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            onChangeInput={(value) => onChangeInput(value, "password")}
                            value={password}
                            maxLength={20}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button title={ isLogin ? "Ingresar" : "Registrar"} onPress={() => handleAuth()} disabled={isNotValid} color={colors.button} />
                    </View>

                    <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.linkText}>{isLogin ? "¿No tenes una cuenta? Registrate" : "¿Ya tenes una cuenta? Inicia Sesión"}</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
            
         
    );
}

export default Auth;