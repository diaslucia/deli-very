import React from "react";
import { Button, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Theme */
import { colors, fontFamily, fontSize } from "../constants/theme";

/* Components */
import Home from "../screens/home/index";
import Category from "../screens/category/index";
import Product from "../screens/product/index";
import Order from "../screens/order/index";
import Buy from "../screens/buy/index";
import Thanks from "../screens/thanks/index";

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 150, height: 50 }}
            source={require("../../assets/Logo.png")}
        />
      
    );
}

const ShopNavigator = () => {
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
                headerTitleAlign: "left",
            }}
            />
            <Stack.Screen name="Order"
            options={{ title: "Mis órdenes" }}
                component={Order}
            />
            <Stack.Screen name="Category"
            options={{ title: "Categorías" }}
                component={Category}
            />
            <Stack.Screen name="Product"
            options={{ title: "Detalle" }}
                component={Product}
            />
            <Stack.Screen name="Buy"
                options={{ title: "¡Último paso!" }}
                component={Buy}
            />
            <Stack.Screen name="Thanks"
                options={{ title: "¡Listo!" }}
                component={Thanks}
            />
        </Stack.Navigator>
    );
}

export default ShopNavigator;