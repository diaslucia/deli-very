import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors, fontFamily, fontSize } from "../constants/theme";

import Order from "../screens/order/index";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Order"
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
            <Stack.Screen name="Order" component={Order}/>
        </Stack.Navigator>
    ); 
}

export default OrderNavigator;