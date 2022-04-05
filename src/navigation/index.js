import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./main";
import AuthNavigator from "./auth";

const AppNavigation = () => {
    const [user, setUser] = useState(false);

    return(
        <NavigationContainer>
            {user ? <MainNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default AppNavigation;