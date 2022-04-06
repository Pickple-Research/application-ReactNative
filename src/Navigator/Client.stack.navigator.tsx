import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
    MainClientScreen, MainClientScreenProps, 
    ClientCategoryScreen, ClientCategoryScreenProps, 
    ClientDetailScreen, ClientDetailScreenProps, 
} from "@Screen/Client";

export const ClientStack = createNativeStackNavigator<ClientStackProps>()


export function ClientStackNavigator() {
    return (
        <ClientStack.Navigator screenOptions={{headerTitle: ""}}>
            <ClientStack.Screen
                name="MainClientScreen"
                component={MainClientScreen}
            />
            <ClientStack.Screen
                name="ClientCategoryScreen"
                component={ClientCategoryScreen}
            />
            <ClientStack.Screen
                name="ClientDetailScreen"
                component={ClientDetailScreen}
            />
        </ClientStack.Navigator>
    )
    
}
export type ClientStackProps = {
    "MainClientScreen": MainClientScreenProps
    "ClientCategoryScreen": ClientCategoryScreenProps
    "ClientDetailScreen": ClientDetailScreenProps
}