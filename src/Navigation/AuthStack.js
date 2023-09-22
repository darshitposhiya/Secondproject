import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, ChooseAccount, ForgotPassword, SetPassword, SignIn, Main, SplashScreen, ItemsByCategory } from '../Screens';
import navigationString from '../Constants/navigationString';




const Stack = createNativeStackNavigator();

export default function AuthStack() {
    

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationString.SPLASH} component={SplashScreen} />
            <Stack.Screen name={navigationString.LOGIN} component={Login} />
            <Stack.Screen name={navigationString.SIGNIN} component={SignIn} />
            <Stack.Screen name={navigationString.MAIN} component={Main} />
            <Stack.Screen name={navigationString.ITEMSBYCATEGORY} component={ItemsByCategory} />
            <Stack.Screen name={navigationString.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navigationString.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen name={navigationString.SET_PASSWORD} component={SetPassword} />
        </Stack.Navigator>

    )
}
