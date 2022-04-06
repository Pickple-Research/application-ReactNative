import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainHomeScreen, MainHomeScreenProps } from "@Screen/Home";

export const HomeStack = createNativeStackNavigator<HomeStackProps>()


export function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{headerTitle: ""}}>
            <HomeStack.Screen 
                name={"MainHomeScreen"}
                component={MainHomeScreen}
            />
        </HomeStack.Navigator>
    )
    
}

export type HomeStackProps = {
    MainHomeScreen: MainHomeScreenProps;
}