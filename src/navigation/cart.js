import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors, fontFamily, fontSize } from "../constants/theme";

import Cart from "../screens/cart/index";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primary : colors.primary,
            },
            headerTintColor: colors.secondaryText,
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: fontSize.medium,
                fontFamily: fontFamily.main,
            }
        }}
        >
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    ); 
}

export default CartNavigator;