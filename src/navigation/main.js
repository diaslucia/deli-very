import React from "react";
import { Platform } from "react-native";
import { Button, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors, fontFamily, fontSize } from "../constants/theme";

import Home from "../screens/home/index";
import Category from "../screens/category/index";
import Product from "../screens/product/index";
import Cart from "../screens/cart/index";

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 150, height: 50 }}
            source={require("../../assets/Logo.png")}
        />
      
    );
  }

const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home"
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
            <Stack.Screen name="Home"
            component={Home}
            options={{ 
                headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                    <Button
                        onPress={() => alert('Iniciar sesión')}
                        title="Log In"
                        color="#e0480b"
                    />
                ),
                headerTitleAlign: "left",
            }}
            />
            <Stack.Screen name="Category"
                component={Category}
            />
            <Stack.Screen name="Product"
                component={Product}
            />
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    ); 
}

export default MainNavigator;