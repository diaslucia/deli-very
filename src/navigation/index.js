import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

/* Components */
import MainNavigator from './main';
import AuthNavigator from './auth';

/* Redux */
import { useSelector } from 'react-redux';

const AppNavigation = () => {
    const isAuth = useSelector(state => state.auth.userId);
    
    return (
        <NavigationContainer>
            {isAuth ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigation;