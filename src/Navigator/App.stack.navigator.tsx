import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen, SplashScreenProps } from '@Screen/Splash.screen'
import { MainBottomTabNavigator, MainBottomTabProps } from './Main.bottomTab.navigator'

export const AppStack = createNativeStackNavigator<AppStackProps>()

export type AppStackProps = {
    "SplashScreen": SplashScreenProps
    "MainBottomTab": MainBottomTabProps
}

export function AppStackNavigator() {
    return (
        <AppStack.Navigator 
            initialRouteName='SplashScreen' 
            screenOptions={{headerShown: false}}>
            <AppStack.Screen name="SplashScreen" component={SplashScreen} />
            <AppStack.Screen name="MainBottomTab" component={MainBottomTabNavigator} />
        </AppStack.Navigator>
    )
}