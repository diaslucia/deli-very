import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./main";

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigation;