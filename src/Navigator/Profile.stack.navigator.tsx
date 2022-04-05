import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainClientScreen } from "@Screen/Main/MainClient";
import { MainProfileScreenProps } from "@Screen/Main/MainProfile";

export const ProfileStack = createNativeStackNavigator<ProfileStackProps>()


export function ProfileStackNavigator() {
    return (    
        <ProfileStack.Navigator screenOptions={{headerTitle: ""}}>
            <ProfileStack.Screen
                name={"MainProfileScreen"}
                component={MainClientScreen}
                />
        </ProfileStack.Navigator>
    )
}


export type ProfileStackProps = {
    "MainProfileScreen": MainProfileScreenProps
}
