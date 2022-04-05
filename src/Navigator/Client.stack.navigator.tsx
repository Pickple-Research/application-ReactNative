import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainClientScreen, MainClientScreenProps } from "@Screen/Main/MainClient";

export const ClientStack = createNativeStackNavigator<ClientStackProps>()


export function ClientStackNavigator() {
    return (
        <ClientStack.Navigator screenOptions={{headerTitle: ""}}>
            <ClientStack.Screen
                name="MainClientScreen"
                component={MainClientScreen}
            />
        </ClientStack.Navigator>
    )
    
}
export type ClientStackProps = {
    "MainClientScreen": MainClientScreenProps
}