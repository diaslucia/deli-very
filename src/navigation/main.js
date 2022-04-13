import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Styles */
import { colors } from "../constants/theme";

/* Icons */
import IonicIcons from "react-native-vector-icons/Ionicons";

/* Stacks */
import ShopNavigator from "./shop";
import CartNavigator from "./cart";

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
    return(
        <TabStack.Navigator
        initialRouteName="ShopStack"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: colors.primary },
        }}
        >
            <TabStack.Screen
            name="ShopStack"
            component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <IonicIcons name={focused ? 'home' : 'home-outline' } size={25} color={colors.secondary} />
                ),
                title: "Inicio",
            }}
            />
            <TabStack.Screen
            name="CartStack"
            component={CartNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <IonicIcons name={focused ? 'cart' : 'cart-outline' } size={25} color={colors.secondary} />
                ),
                title: "Carrito"
            }}
            />
        </TabStack.Navigator>
    ); 
}

export default MainNavigator;